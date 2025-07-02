'use client'; // This directive marks the component for client-side rendering

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import Logo from '@/components/ui/Logo/Logo';
import Banner from '@/components/ui/Banner/Banner';
import Button from '@/components/ui/Button/Button';
import { GameProfileTypes } from '@/types/GameComponentTypes';


const GAME_PROFILE_OPTIONS: GameProfileTypes[] = [
    'Marketing Professional',
    'Event Planner',
    'Others',
];

const GameIdPage = () => {
    const router = useRouter();
    const [gameIdInput, setGameIdInput] = useState('');
    const [gameProfile, setGameProfile] = useState<GameProfileTypes | ''>('');   

    useEffect(() => {
        const storedGameId = localStorage.getItem('snakesAndLaddersGameId');
        if (storedGameId) {
            setGameIdInput(storedGameId);
        }
    }, []);

    const proceedToColorSelect = () => {
        console.log("Proceeding with Game ID:", gameIdInput);
        router.push('/color-select');
    };

    const createNewGameId = () => {
        localStorage.setItem('snakesAndLaddersGameId', gameIdInput);
        console.log("Game ID created:", gameIdInput); 
        proceedToColorSelect();
    };

    const replaceExistingGameId = () => {
        localStorage.setItem('snakesAndLaddersGameId', gameIdInput);
        console.log("Game ID replaced:", gameIdInput); 
        proceedToColorSelect();
    };

    const handleEnterGameId = () => {
        // Validation checks
        if (!gameIdInput.trim()) { 
            return;
        }
        
        if (!gameProfile) { 
            return;
        }

        const storedId = localStorage.getItem('snakesAndLaddersGameId');

        // Game ID logic
        if (storedId === gameIdInput) {
            // Exact match - proceed directly
            proceedToColorSelect();
        } else if (!storedId) {
            // No stored ID - ask to create new one 
        } else {
            // Different ID exists - ask to replace 
        }
    };

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
                        <label className="game-id-label">
                            <span className="game-id-label-text">Game ID</span>
                        <input
                            type="text"
                            value={gameIdInput}
                            onChange={(e) => setGameIdInput(e.target.value)}
                            placeholder="E.g. 12345"
                            className="game-id-input"
                            name='gameIdInput'
                        />
                        </label>
                    </div>
                    <div className="game-id-input-container">
                        <label className="game-id-label">
                            <span className="game-id-label-text">Select Your Profile</span>
                        <select
                            value={gameProfile}
                            onChange={(e) => setGameProfile(e.target.value as GameProfileTypes)}
                            className="game-id-input"
                        >
                            <option value="">Select Profile Type</option>
                            {GAME_PROFILE_OPTIONS.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        </label>
                    </div>
                    <div className="game-id-register-button">
                        <Button onClick={handleEnterGameId}>
                            Register & Play
                        </Button>
                    </div>
                </div>
            </section>

 
        </div>
    );
};

export default GameIdPage;