'use client'; // This directive marks the component for client-side rendering

import React, { useState, useEffect, useCallback } from 'react'; // useRef is not strictly necessary here, can remove if preferred
import { useRouter } from 'next/navigation'; // Changed import for App Router
import { snakesAndLadders, questionCells, questions, formatTime } from '../../lib/gameConfig'; // Adjust path for App Router structure
import { Modal, QuestionModal } from '../../components/Modal'; // Adjust path for App Router structure

const GamePage = () => {
    const router = useRouter();

    // --- Game State ---
    const [playerPosition, setPlayerPosition] = useState(1);
    const [diceValue, setDiceValue] = useState(0);
    const [showDiceRollButton, setShowDiceRollButton] = useState(true);
    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<any>(null);
    const [showResultModal, setShowResultModal] = useState(false);
    const [resultModalMessage, setResultModalMessage] = useState('');
    const [timer, setTimer] = useState(180); // 3 minutes in seconds
    const [gameStarted, setGameStarted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [modalConfirmAction, setModalConfirmAction] = useState(null);
    const [selectedColor, setSelectedColor] = useState('#EF4444'); // Default color, loaded from localStorage

    // Load selected color and start game on mount
    useEffect(() => {
        const storedColor = localStorage.getItem('selectedPlayerColor');
        if (storedColor) {
            setSelectedColor(storedColor);
        }
        setGameStarted(true); // Start the game timer when navigating to the game page
    }, []);

    // --- Timer Effect ---
    useEffect(() => {
        let timerId: any;
        if (gameStarted && timer > 0) {
            timerId = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (gameStarted && timer === 0) {
            setGameStarted(false);
            setResultModalMessage("Time's up! Better luck next time!");
            setShowResultModal(true);
            setShowDiceRollButton(false);
            setModalConfirmAction((): any => {
                setShowResultModal(false);
                resetGame();
            });
        }
        return () => clearInterval(timerId);
    }, [gameStarted, timer]);

    // Generates the board cells (1-100)
    const generateBoard = useCallback(() => {
        const reorderedBoard = [];
        for (let r = 9; r >= 0; r--) {
            const start = r * 10 + 1;
            const rowCells = [];
            for (let i = 0; i < 10; i++) {
                rowCells.push(start + i);
            }

            if (r % 2 === 1) { // Odd rows (from top: 9, 7, 5, 3, 1) should be reversed (e.g., 90-81)
                rowCells.reverse();
            }
            reorderedBoard.push(...rowCells);
        }

        return reorderedBoard.map((num) => {
            const isQuestionCell = questionCells.includes(num);
            const isPlayerHere = playerPosition === num;
            const snakeLadderInfo = snakesAndLadders.find(sl => sl.start === num);

            let icon = null;
            if (snakeLadderInfo) {
                if (snakeLadderInfo.type === 'snake') {
                    icon = <span className="game-icon-snake" role="img" aria-label="snake">🐍</span>;
                } else if (snakeLadderInfo.type === 'ladder') {
                    icon = <span className="game-icon-ladder" role="img" aria-label="ladder">🪜</span>;
                }
            }

            return (
                <div
                    key={num}
                    className={`board-cell ${isQuestionCell ? 'board-cell-question' : (num % 2 === 0 ? 'board-cell-even' : 'board-cell-odd')}`}
                >
                    {num}
                    {isQuestionCell && (
                        <span className="question-mark">?</span>
                    )}
                    {icon}
                    {isPlayerHere && (
                        <div
                            className="player-token"
                            style={{ backgroundColor: selectedColor }}
                        >
                            <span className="player-initial">P</span>
                        </div>
                    )}
                </div>
            );
        });
    }, [playerPosition, selectedColor]);


    const rollDice = () => {
        if (!gameStarted || !showDiceRollButton) return;

        const roll = Math.floor(Math.random() * 6) + 1;
        setDiceValue(roll);
        setShowDiceRollButton(false);

        let newPosition = playerPosition + roll;
        if (newPosition > 100) {
            newPosition = 100 - (newPosition - 100);
        }

        setTimeout(() => {
            setPlayerPosition(newPosition);
            if (questionCells.includes(newPosition)) {
                const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
                setCurrentQuestion(randomQuestion);
                setShowQuestionModal(true);
            } else {
                checkSnakeOrLadder(newPosition);
            }
        }, 1000);
    };

    const checkSnakeOrLadder = useCallback((pos: any) => {
        const effect = snakesAndLadders.find(sl => sl.start === pos);
        if (effect) {
            setTimeout(() => {
                setPlayerPosition(effect.end);
                setResultModalMessage(`${effect.type === 'ladder' ? 'Right answer! Climb up the ladder!' : 'Oops! Down the snake you go!'}`);
                setShowResultModal(true);
                setModalConfirmAction(():any => {
                    setShowResultModal(false);
                    if (effect.end === 100) {
                        handleGameWin();
                    } else {
                        setShowDiceRollButton(true);
                    }
                });
            }, 1000);
        } else {
            if (pos === 100) {
                handleGameWin();
            } else {
                setShowDiceRollButton(true);
            }
        }
    }, []);

    const handleAnswer = (selectedOption: any) => {
        setShowQuestionModal(false);
        if (selectedOption === currentQuestion.correctAnswer) {
            const ladderMove = snakesAndLadders.find(sl => sl.start === playerPosition && sl.type === 'ladder');
            if (ladderMove) {
                setPlayerPosition(ladderMove.end);
                setResultModalMessage("Right answer! Climb up the ladder!");
            } else {
                setResultModalMessage("Right answer!");
            }
        } else {
            const snakeMove = snakesAndLadders.find(sl => sl.start === playerPosition && sl.type === 'snake');
            if (snakeMove) {
                setPlayerPosition(snakeMove.end);
                setResultModalMessage("Oops! Down the snake you go!");
            } else {
                setResultModalMessage("Oops! Wrong answer!");
            }
        }
        setShowResultModal(true);
        setModalConfirmAction(():any => {
            setShowResultModal(false);
            if (playerPosition === 100) {
                handleGameWin();
            } else {
                setShowDiceRollButton(true);
            }
        });
    };

    const handleGameWin = () => {
        setGameStarted(false);
        const timeTaken = 180 - timer;
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        setResultModalMessage(`Congratulations! You've completed the game in ${minutes} minutes and ${seconds} seconds!`);
        setShowResultModal(true);
        setShowConfetti(true);
        setShowDiceRollButton(false);
        setModalConfirmAction(():any => {
            setShowResultModal(false);
            setShowConfetti(false);
            resetGame();
        });
    };

    const resetGame = () => {
        setPlayerPosition(1);
        setDiceValue(0);
        setTimer(180);
        setGameStarted(false);
        setShowDiceRollButton(true);
        router.push('/'); // Navigate back to home
        localStorage.removeItem('snakesAndLaddersGameId');
        localStorage.removeItem('selectedPlayerColor');
    };

    return (
        <div className="game-screen-main">
            <div className="game-header">
                <div className="game-header-item">Time: {formatTime(timer)}</div>
                <div className="game-header-item player-position-text">Player: {playerPosition}</div>
                <div className="game-header-item player-info">
                    <div className="player-icon" style={{ backgroundColor: selectedColor }}></div>
                    <span className="player-name">You</span>
                </div>
            </div>

            <div className="board-grid">
                {generateBoard()}
            </div>

            <div className="game-controls">
                <div className="dice-value-display">
                    Dice: {diceValue > 0 ? diceValue : '-'}
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
                    question={currentQuestion}
                    options={currentQuestion.options}
                    onAnswer={handleAnswer}
                />
            )}

            {showResultModal && (
                <Modal
                    message={resultModalMessage}
                    onConfirm={modalConfirmAction}
                    title={resultModalMessage.includes('Congratulations') ? 'Game Over!' : (resultModalMessage.includes('Time') ? 'Game Over!' : 'Result')}
                />
            )}

            {showConfetti && (
                <div className="confetti-container">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="confetti-particle yellow"
                            style={{
                                left: `${Math.random() * 100}vw`,
                                top: `${Math.random() * 100}vh`,
                                animationDelay: `${Math.random() * 2}s`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                opacity: Math.random()
                            }}
                        />
                    ))}
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i + 50}
                            className="confetti-particle blue"
                            style={{
                                left: `${Math.random() * 100}vw`,
                                top: `${Math.random() * 100}vh`,
                                animationDelay: `${Math.random() * 2}s`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                opacity: Math.random()
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default GamePage;