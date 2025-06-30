'use client'; // This directive marks the component for client-side rendering

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import { Modal, GameIdNotFoundModal } from '../../components/Modal'; // Adjust path for App Router structure
import Logo from '@/components/ui/Logo/Logo';
import Banner from '@/components/ui/Banner/Banner';
import Button from '@/components/ui/Button/Button';

const GameIdPage = () => {
    const router = useRouter();
    const [gameIdInput, setGameIdInput] = useState('');
    const [gameProfile, setGameProfile] = useState(null);
    const [showResultModal, setShowResultModal] = useState(false);
    const [resultModalMessage, setResultModalMessage] = useState('');
    const [showGameIdNotFoundModal, setShowGameIdNotFoundModal] = useState(false);
    const [modalConfirmAction, setModalConfirmAction] = useState(null);

    useEffect(() => {
        const storedGameId = localStorage.getItem('snakesAndLaddersGameId');
        if (storedGameId) {
            setGameIdInput(storedGameId);
        }
    }, []);

    const handleEnterGameId = () => {
        if (!gameIdInput.trim()) {
            setResultModalMessage("Please enter a Game ID.");
            setShowResultModal(true);
            setModalConfirmAction((): any => setShowResultModal(false));
            return;
        }

        const storedId = localStorage.getItem('snakesAndLaddersGameId');

        if (storedId === gameIdInput) {
            console.log("Game ID found:", gameIdInput);
            router.push('/color-select');
        } else if (!storedId) {
            setResultModalMessage(`Game ID "${gameIdInput}" not found. Do you want to create it?`);
            setShowGameIdNotFoundModal(true);
            setModalConfirmAction((): any => {
                return () => {
                    setShowGameIdNotFoundModal(false);
                    localStorage.setItem('snakesAndLaddersGameId', gameIdInput);
                    console.log("Game ID created:", gameIdInput);
                    router.push('/color-select');
                };
            });
        } else {
            setResultModalMessage(`A different Game ID "${storedId}" is stored. Do you want to replace it with "${gameIdInput}"?`);
            setShowGameIdNotFoundModal(true);
            setModalConfirmAction((): any => {
                return () => {
                    setShowGameIdNotFoundModal(false);
                    localStorage.setItem('snakesAndLaddersGameId', gameIdInput);
                    console.log("Game ID overwritten:", gameIdInput);
                    router.push('/color-select');
                };
            });
        }
    };

    // const handleCreateNewGameId = () => {
    //     const newGameId = Math.random().toString(36).substring(2, 10);
    //     setGameIdInput(newGameId);
    //     setResultModalMessage(`A new Game ID "${newGameId}" has been generated. Press Enter to use it, or change it.`);
    //     setShowResultModal(true);
    //     setModalConfirmAction(():any => setShowResultModal(false));
    // };

    return (
        <div className="screen game-id-screen">
            <section className="home-title">
                <div className="home-logo">
                    <Logo />
                </div>
                <div className="home-banner">
                    <Banner />
                </div>
            </section>
            <section className="game-id-form-section">
                <div className="game-id-form">
                    <div className="game-id-input-container">
                        <input
                            type="text"
                            value={gameIdInput}
                            onChange={(e) => setGameIdInput(e.target.value)}
                            placeholder="Enter Game ID"
                            className="game-id-input"
                        />
                        {/* <button
                            onClick={handleEnterGameId}
                            className="game-id-enter-button"
                        >
                            ➡️
                        </button> */}
                    </div>
                    <div className="game-id-input-container">
                        <input
                            type="select"
                            value={gameIdInput}
                            onChange={(e) => setGameIdInput(e.target.value)}
                            placeholder="Enter Game ID"
                            className="game-id-input"
                        />
                    </div>
                    <div className="game-id-register-button">
                        <Button onClick={handleEnterGameId}>
                            Register & Play
                        </Button>
                    </div>
                </div>

            </section>
            {/* <p className="game-id-info-text">
                *You can find your unique game ID in the profile section of the Cvent mobile app.
            </p> */}
            {/* <button
                onClick={handleCreateNewGameId}
                className="generate-id-button"
            >
                Generate New Game ID
            </button> */}

            {showResultModal && (
                <Modal
                    message={resultModalMessage}
                    onConfirm={modalConfirmAction}
                />
            )}

            {showGameIdNotFoundModal && (
                <GameIdNotFoundModal
                    message={resultModalMessage}
                    onConfirm={modalConfirmAction}
                    onCancel={() => setShowGameIdNotFoundModal(false)}
                />
            )}
        </div>
    );
};

export default GameIdPage;