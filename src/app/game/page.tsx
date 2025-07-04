'use client'; // This directive marks the component for client-side rendering

import { Modal, QuestionModal } from '@/components/Modal';
import { formatTime, questionCells, questions, starClimbs } from '@/lib/gameConfig';
import React, { useState, useEffect, useCallback } from 'react';

const colorResolver = (cellNumber: number): string => {
    const idx = (cellNumber) % 5;
    if (idx === 1) return 'plain'; 
    if (idx === 2) return 'pink' ;
    if (idx === 3) return 'purple';
    if (idx === 4) return 'teal' 
    if (idx === 0) return 'white';
    return 'plain';
};

// pink: background: #D68B96;
// plain : background: #7791B5;
// purple: background: #9E6DD9;
// teal : background: #6FBEC1;
// white: background: #A1BBEF;



const GamePage = () => {
    const [playerPosition, setPlayerPosition] = useState(1);
    const [diceValue, setDiceValue] = useState(0);
    const [showDiceRollButton, setShowDiceRollButton] = useState(true);
    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<{ question: string; options: string[]; correctAnswer: string } | null>(null);
    const [showResultModal, setShowResultModal] = useState(false);
    const [resultModalMessage, setResultModalMessage] = useState('');
    const [timer, setTimer] = useState(180000); // 3 minutes in seconds
    const [gameStarted, setGameStarted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [modalConfirmAction, setModalConfirmAction] = useState<(() => void) | null>(null);
    const [selectedColor, setSelectedColor] = useState('#EF4444'); // Default color

    // Load selected color from localStorage and start the game on mount
    useEffect(() => {
        const storedColor = localStorage.getItem('selectedPlayerColor');
        if (storedColor) {
            setSelectedColor(storedColor);
        }
        setGameStarted(true);
    }, []);

    // Game Timer Effect
    useEffect(() => {
        let timerId: NodeJS.Timeout;
        if (gameStarted && timer > 0) {
            timerId = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (gameStarted && timer === 0) {
            setGameStarted(false);
            setResultModalMessage("Time's up! Better luck next time!");
            setShowResultModal(true);
            setShowDiceRollButton(false);
            setModalConfirmAction(() => () => {
                setShowResultModal(false);
                resetGame();
            });
        }
        return () => clearInterval(timerId);
    }, [gameStarted, timer]);

    // Resets the game state and navigates home
    const resetGame = useCallback(() => {
        setPlayerPosition(1);
        setDiceValue(0);
        setTimer(180);
        setGameStarted(false);
        setShowDiceRollButton(true);
        localStorage.removeItem('selectedPlayerColor');
        // Use standard browser navigation instead of Next.js router
        window.location.href = '/';
    }, []);

    // Generates the board cells (1-100)
    const generateBoard = useCallback(() => {
        const reorderedBoard = [];
        // Iterate from the top row (index 9) down to the bottom row (index 0)
        for (let r = 9; r >= 0; r--) {
            const row = [];
            // Populate cells for the current row
            for (let c = 0; c < 10; c++) {
                row.push(r * 10 + c + 1);
            }
            // Apply S-shape logic: reverse odd-numbered rows (from top)
            // r=9 (topmost row) is odd, r=8 is even, etc.
            if (r % 2 !== 0) {
                row.reverse();
            }
            // Add the completed row to the reorderedBoard
            reorderedBoard.push(...row);
        } 
        return reorderedBoard.map((num) => {
            const isQuestionCell = questionCells.includes(num);
            const isPlayerHere = playerPosition === num;
            const starInfo = starClimbs.find(sl => sl.start === num);

            return (
                <div
                    key={num}
                    className={`board-cell board-cell-${colorResolver(num)}  ${isQuestionCell ? 'board-cell-question' : (num % 2 === 0 ? 'board-cell-even' : 'board-cell-odd')}`}
                >
                    {num}
                    {starInfo && <span className="game-icon-star" role="img" aria-label="star">⭐</span>}
                    {isPlayerHere && (
                        <div className="player-token" style={{ backgroundColor: selectedColor }}>
                            <span className="player-initial">P</span>
                        </div>
                    )}
                </div>
            );
        });
    }, [playerPosition, selectedColor]);

    // Handles the game win condition
    const handleGameWin = useCallback(() => {
        setGameStarted(false);
        const timeTaken = 180 - timer;
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        setResultModalMessage(`Congratulations! You reached 100 in ${minutes}m ${seconds}s!`);
        setShowResultModal(true);
        setShowConfetti(true);
        setShowDiceRollButton(false);
        setModalConfirmAction(() => () => {
            setShowResultModal(false);
            setShowConfetti(false);
            resetGame();
        });
    }, [timer, resetGame]);

    // Handles the dice roll and player movement
    const rollDice = useCallback(() => {
        if (!gameStarted || !showDiceRollButton) return;

        const roll = Math.floor(Math.random() * 6) + 1;
        setDiceValue(roll);
        setShowDiceRollButton(false);

        let newPosition = playerPosition + roll;
        if (newPosition > 100) {
            newPosition = 100; // Player stops at 100, no bouncing back
        }

        setTimeout(() => {
            setPlayerPosition(newPosition);
            if (questionCells.includes(newPosition)) {
                const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
                setCurrentQuestion(randomQuestion);
                setShowQuestionModal(true);
            } else if (newPosition === 100) {
                handleGameWin();
            } else {
                setShowDiceRollButton(true);
            }
        }, 1000);
    }, [gameStarted, showDiceRollButton, playerPosition, handleGameWin]);
    
    // Handles the outcome of answering a question
    const handleAnswer = useCallback((selectedOption: string) => {
        setShowQuestionModal(false);
        const isCorrect = selectedOption === currentQuestion?.correctAnswer;
        let finalPosition = playerPosition;

        if (isCorrect) {
            const starMove = starClimbs.find(s => s.start === playerPosition);
            if (starMove) {
                finalPosition = starMove.end;
                setResultModalMessage("Correct! You climb up the star!");
                setTimeout(() => setPlayerPosition(finalPosition), 500); // Animate the climb
            } else {
                setResultModalMessage("Correct answer!");
            }
        } else {
            const starMove = starClimbs.find(s => s.start === playerPosition);
            if (starMove && starMove.drop) {
                finalPosition = starMove.drop;
                setResultModalMessage(`Oops! Wrong answer. You drop to cell ${finalPosition}!`);
                setTimeout(() => setPlayerPosition(finalPosition), 500); // Animate the drop
            } else {
                setResultModalMessage("Oops! Wrong answer. You stay where you are.");
            }
        }

        setShowResultModal(true);
        setModalConfirmAction(() => () => {
            setShowResultModal(false);
            if (finalPosition === 100) {
                handleGameWin();
            } else {
                setShowDiceRollButton(true);
            }
        });
    }, [currentQuestion, playerPosition, handleGameWin]);

    return (
        <div className="game-screen-main">

            
            <div className="game-header">
                <div>Time: {formatTime(timer)}</div>
                <div>Player Position: {playerPosition}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="player-token" style={{ position: 'static', width: '30px', height: '30px', fontSize: '14px' }}>
                        P
                    </div>
                    <span>You</span>
                </div>
            </div>

            <div className="board-grid">
                {generateBoard()}
            </div>

            <div className="game-controls">
                <div className="dice-value-display">
                    Dice: {diceValue > 0 ? diceValue : '🎲'}
                </div>
                <button
                    onClick={rollDice}
                    disabled={!showDiceRollButton || !gameStarted}
                    className={`roll-dice-button ${!showDiceRollButton || !gameStarted ? 'roll-dice-button-disabled' : ''}`}
                >
                    Roll Dice!
                </button>
            </div>

            {showQuestionModal && currentQuestion && (
                <QuestionModal
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    onAnswer={handleAnswer}
                />
            )}

            {showResultModal && modalConfirmAction && (
                <Modal
                    message={resultModalMessage}
                    onConfirm={modalConfirmAction}
                    title={resultModalMessage.includes('Congratulations') ? 'Game Over!' : 'Result'}
                />
            )}

            {showConfetti && (
                <div className="confetti-container">
                    {[...Array(100)].map((_, i) => (
                        <div
                            key={i}
                            className={`confetti-particle ${i % 2 === 0 ? 'yellow' : 'blue'}`}
                            style={{
                                left: `${Math.random() * 100}vw`,
                                animationDelay: `${Math.random() * 4}s`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default GamePage;
