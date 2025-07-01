'use client'; // This directive marks the component for client-side rendering

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import { formatTime } from '../../lib/gameConfig'; // Adjust path for App Router structure
import Logo from '@/components/ui/Logo/Logo';
import Banner from '@/components/ui/Banner/Banner';
import Button from '@/components/ui/Button/Button';

const HowToPlayPage = () => {
    const router = useRouter();
    const [timer] = useState(180); // Display the 3-minute limit

    const handlePlayGame = () => {
        router.push('/game'); // Navigate to the game page
    };

    return (
        <div className="screen how-to-play-screen">
            <section className="home-title">
                <div className="home-logo">
                    <Logo />
                </div>
                <div className="home-banner">
                    <Banner />
                </div>
            </section>
            <h2 className="how-to-play-title">
                HOW TO PLAY
            </h2>
            <div className="how-to-play-content">
                <p className="how-to-play-text">
                    <span className="how-to-play-highlight">🎲 Roll dice</span> to start game.
                </p>
                <p className="how-to-play-text">
                    <span className="how-to-play-highlight-purple">❓ On cells with a ‘?’</span>, a question will pop up. Choose the right option to go up the ladder. If you select the wrong option, you go down the snake.
                </p>
                <p className="how-to-play-timer-text">
                    REACH 100 WITHIN {formatTime(timer)}!
                </p>
            </div>
            <Button
                onClick={handlePlayGame}
                className="play-game-button"
            >
                Let&apos;s Play
            </Button>
        </div>
    );
};

export default HowToPlayPage;