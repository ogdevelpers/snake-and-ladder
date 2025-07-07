'use client'; // This directive marks the component for client-side rendering

import { Modal, QuestionModal } from '@/components/Modal';
import DiceRoller from '@/components/ui/DiceComponent/DiceComponent';
import Footer from '@/components/ui/Footer/Footer';
import Katora from '@/components/ui/Katora/Katora';
import Logo from '@/components/ui/Logo/Logo';
import { formatTime, questionCells, questions, starClimbs } from '@/lib/gameConfig';
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

const colorResolver = (cellNumber: number): string => {
    const idx = (cellNumber) % 5;
    const isOddRow = Math.floor(cellNumber / 10) % 2 === 1;

    if (idx === 0) return 'white';
    if (idx === 1) return 'plain';
    if (idx === 2) return 'pink';
    if (isOddRow) {
        if (idx === 3) return 'teal';
        if (idx === 4) return 'purple';
    }
    if (idx === 3) return 'purple';
    return 'teal';
};

const GamePage = () => {
    const [playerPosition, setPlayerPosition] = useState(1);
    const [diceValue, setDiceValue] = useState(0);
    const [showDiceRollButton, setShowDiceRollButton] = useState(true);
    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<{ question: string; options: string[]; correctAnswer: string } | null>(null);
    const [showResultModal, setShowResultModal] = useState(false);
    const [resultModalMessage, setResultModalMessage] = useState('');
    const [timer, setTimer] = useState(1800); // 3 minutes in seconds
    const [gameStarted, setGameStarted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [modalConfirmAction, setModalConfirmAction] = useState<(() => void) | null>(null);
    const [selectedColor, setSelectedColor] = useState('#EF4444'); // Default color
    const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

    // Use useRef to store the timer interval ID
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Load selected color from localStorage and start the game on mount
    useEffect(() => {
        const storedColor = localStorage.getItem('selectedPlayerColor');
        const storedProfile = localStorage.getItem('snakesAndLaddersGameProfile');
        if (storedColor) {
            setSelectedColor(storedColor);
        }
        if (storedProfile) {
            setSelectedProfile(storedProfile);
        }
        console.log("Selected Color:", storedColor);
        console.log("Selected Profile:", storedProfile);
        setGameStarted(true);
    }, []);

    // Optimized Game Timer Effect - only runs when gameStarted changes
    useEffect(() => {
        if (gameStarted) {
            // Clear any existing timer
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }

            // Start new timer
            timerRef.current = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        // Time's up
                        setGameStarted(false);
                        setResultModalMessage("Time's up! Better luck next time!");
                        setShowResultModal(true);
                        setShowDiceRollButton(false);
                        setModalConfirmAction(() => () => {
                            setShowResultModal(false);
                            resetGame();
                        });
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            // Clear timer when game stops
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }

        // Cleanup on unmount
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [gameStarted]); // Only depends on gameStarted


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

    // Memoized board generation - only re-renders when playerPosition or selectedColor changes
    const boardCells = useMemo(() => {
        const reorderedBoard = [];
        // Iterate from the top row (index 9) down to the bottom row (index 0)
        for (let r = 9; r >= 0; r--) {
            const row = [];
            for (let c = 0; c < 10; c++) {
                row.push(r * 10 + c + 1);
            }

            if (r % 2 !== 0) {
                row.reverse();
            }
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
                    {!starInfo && num}
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
    const rollDice = useCallback((diceNumber:number) => {
        if (!gameStarted || !showDiceRollButton) return;

        const roll = diceNumber;
        setDiceValue(roll);
        setShowDiceRollButton(false);

        let newPosition = playerPosition + roll;
        if (newPosition > 100) {
            newPosition = playerPosition; // If overshoot, stay in place
        }

        setTimeout(() => {
            setPlayerPosition(newPosition);
            if (questionCells.includes(newPosition)) {
                const idx = questionCells.indexOf(newPosition);
                const fallBackQuestion = questions.find(q => q.number === (idx+1)) ;
                const questionIndex = questions.find(q => q.start === newPosition);
                setCurrentQuestion(questionIndex || fallBackQuestion || questions[Math.floor(Math.random() * questions.length)]);
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

    // Memoized formatted time to avoid recalculation
    const formattedTime = useMemo(() => formatTime(timer), [timer]);

    return (
        <div className="game-screen-main">
            <div className="game-header">
                <section className="game-home-title">
                    <div className="game-home-logo">
                        <Logo src={"/game_logo.png"} />
                    </div>
                </section>

            </div>

            <div className="board-grid">
                {boardCells}
            </div>

            <section className="game-controls">
                <div className="dice-reveal">
                    <Katora color={selectedColor} />
                </div>
                <div className="timer-display">
                    <span className="timer-label">Time:</span>
                    <span className="timer-value">{formattedTime}</span>
                </div>
            <DiceRoller
                onRoll={rollDice} // Pass your rollDice function
                disabled={!showDiceRollButton || !gameStarted} // Pass your disabled logic
            />
            </section>

            <section className="home-footer">
                <Footer variant="game" />
            </section>

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