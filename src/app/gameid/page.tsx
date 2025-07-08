'use client'; // This directive marks the component for client-side rendering

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import Logo from '@/components/ui/Logo/Logo'; 
import Button from '@/components/ui/Button/Button';
import { GameProfileTypes } from '@/types/GameComponentTypes'; 
import Footer from '@/components/ui/Footer/Footer';
import { GAME_PROFILE_OPTIONS } from '@/lib/constants';
import { Modal } from '@/components/Modal';
 
const GameIdPage = () => {
    const router = useRouter();
    const [gameIdInput, setGameIdInput] = useState('');
    const [gameProfile, setGameProfile] = useState<GameProfileTypes | ''>('');
    const [gameIdError, setGameIdError] = useState<boolean>(false);
    const [gameProfileError, setGameProfileError] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);

    const proceedToColorSelect = () => {
        console.log("Proceeding with Game ID:", gameIdInput);
        router.push('/color-select');
    };

    const createNewGameId = () => {
        localStorage.setItem('snakesAndLaddersGameId', gameIdInput);
        console.log("Game ID created:", gameIdInput);
    };

    const createNewGameProfile = () => {
        localStorage.setItem('snakesAndLaddersGameProfile', gameProfile);
        console.log("Game Profile created:", gameProfile);
    }

    const handleEnterGameId = () => {
        // Validation checks
        const isGameIdValid = gameIdInput.trim() !== '';
        const isProfileSelected = gameProfile !== '';

        setGameIdError(!isGameIdValid);
        setGameProfileError(!isProfileSelected);

        if (!isGameIdValid || !isProfileSelected) return;

        // gameId and profile have been selected. 
        createNewGameId();
        createNewGameProfile();

        // All set, let's go 
        proceedToColorSelect();
    };

    const handleWhereIsMyId = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const modalMessage = `You can find your unique game ID in the profile section of the Cvent mobile app.`;

    return (
        <div className="screen game-id-screen">
            <section className="home-title">
                <div className="home-logo">
                    <Logo src='logo_cvent2.png'/>
                </div> 
            </section>
            <section className="game-id-form-section">
                <div className="game-id-form">
                    <div className="game-id-input-container">
                        <label className="game-id-label">
                            <span className="game-id-label-text">Game ID</span>
                            <div className="game-id-input-wrapper">
                                <input
                                    type="text"
                                    value={gameIdInput}
                                    onChange={(e) => setGameIdInput(e.target.value)}
                                    placeholder=""
                                    className="game-id-input"
                                    name='gameIdInput'
                                />
                                {
                                    gameIdInput?.trim() === '' &&
                                    <button
                                    onClick={handleWhereIsMyId}
                                    className="where-is-my-id-button"
                                    type="button"
                                >
                                    Where&apos;s my ID?
                                </button>}
                            </div>
                        </label>
                        {
                            gameIdError && <span className="game-id-error-text">
                                Please enter game ID
                            </span>
                        }
                    </div>
                    <div className="game-id-input-container">
                        <label className="game-id-label">
                            <span className="game-id-label-text">Select Your Profile</span>
                            <select
                                value={gameProfile}
                                onChange={(e) => setGameProfile(e.target.value as GameProfileTypes)}
                                className="game-id-select"
                            >
                                <option value=""> </option>
                                {GAME_PROFILE_OPTIONS.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {
                            gameProfileError && <span className="game-id-error-text">
                                Please select your profile
                            </span>
                        }
                    </div>
                    <div className="game-id-register-button">
                        <Button onClick={handleEnterGameId}>
                            Next
                        </Button>
                    </div>
                </div>
            </section>
            <section className="home-footer">
                <Footer variant="default" />
            </section>

            {/* Modal */}
            {showModal && (
                <Modal
                    title="Where’s My ID?"
                    message={modalMessage}
                    onConfirm={handleCloseModal}
                    showCancel={false}
                    closeBtnText='Got it'
                />
            )}
        </div>
    );
};

export default GameIdPage;