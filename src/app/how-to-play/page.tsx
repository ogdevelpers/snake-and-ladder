'use client'; // This directive marks the component for client-side rendering

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import { formatTime } from '../../lib/gameConfig'; // Adjust path for App Router structure
import Logo from '@/components/ui/Logo/Logo';
import Banner from '@/components/ui/Banner/Banner';
import Button from '@/components/ui/Button/Button';
import Footer from '@/components/ui/Footer/Footer';

const HowToPlayPage = () => {
    const router = useRouter();
    const [timer] = useState(300); // Display the 3-minute limit

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

            <section className="how-to-play-section">


                <div className="how-to-play-content">
                    <h2 className="how-to-play-title">
                        How To Play
                    </h2>
                    <article className="how-to-play-article">
                        <ul>
                            <li><span className="how-to-play-text">Roll dice to start game.</span></li>
                            <li><span className="how-to-play-text">On cells with a       , a question will pop up. </span></li>
                            <li><span className="how-to-play-text">Choose the right option to go up the ladder.</span></li>
                            <li><span className="how-to-play-text">If you selectthe wrong option, you go downthe snake.</span></li>
                        </ul>
                    </article>
                    <p className="how-to-play-timer-text">
                        REACH 100 WITHIN 5 MINUTES!
                    </p>
                </div>
                <Button
                    onClick={handlePlayGame}
                    className="play-game-button"
                >
                    Let&apos;s Play
                </Button>
            </section>
            <section className="home-footer">
                <Footer variant="choice" />
            </section>
        </div>
    );
};

export default HowToPlayPage;