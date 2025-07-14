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
    const [gameIdErrorMessage, setGameIdErrorMessage] = useState<string>('');
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

const validateGameId = (gameId: string): { isValid: boolean; errorMessage: string } => {
    const trimmedId = gameId.trim();

    if (trimmedId === '') {
        return { isValid: false, errorMessage: 'Please enter game ID' };
    }

    // Check if the format matches CVTSAL (case-insensitive) followed by 4 digits
    // The 'i' flag at the end makes the regex case-insensitive.
    const gameIdRegex = /^CVTSAL\d{4}$/i; // Changed: added 'i' flag
    if (!gameIdRegex.test(trimmedId)) {
        return { isValid: false, errorMessage: 'Game ID must be in format CVTSAL0001-CVTSAL1000' };
    }

    // Extract the numeric part and check if it's in the valid range
    // Ensure to convert the potentially lowercased prefix back to expected for substring if needed,
    // though substring(4) will still work correctly on "CVTSAL0040" to get "0040".
    const numericPart = parseInt(trimmedId.substring(4), 10);
    if (numericPart < 1 || numericPart > 1000) {
        return { isValid: false, errorMessage: 'Game ID must be between CVTSAL0001 and CVTSAL1000' };
    }

    return { isValid: true, errorMessage: '' };
};

    const handleEnterGameId = () => {
        // Validation checks
        const gameIdValidation = validateGameId(gameIdInput);
        const isProfileSelected = gameProfile !== '';

        setGameIdError(!gameIdValidation.isValid);
        setGameIdErrorMessage(gameIdValidation.errorMessage);
        setGameProfileError(!isProfileSelected);

        if (!gameIdValidation.isValid || !isProfileSelected) return;

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
                                {gameIdErrorMessage}
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
                    title="Where&apos;s My ID?"
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