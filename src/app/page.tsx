"use client"; // This directive marks the component for client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router

const HomePage = () => {
    const router = useRouter();

    return (
        <div className="screen home-screen">
            <h1 className="home-title">
                Cvent <br /> Snakes & Ladders
            </h1>
            <div className="home-image-container">
                <img
                    src="https://placehold.co/300x200/ADD8E6/000000?text=Game+Graphics"
                    alt="Snakes and Ladders Graphics"
                    className="home-image"
                />
            </div>
            <button
                onClick={() => router.push('/gameid')}
                className="start-game-button"
            >
                Start Game
            </button>
        </div>
    );
};

export default HomePage;