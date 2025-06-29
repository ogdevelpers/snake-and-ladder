"use client"; // This directive marks the component for client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import Logo from '@/components/ui/Logo/Logo';
import Banner from '@/components/ui/Banner/Banner';
import Button from '@/components/ui/Button/Button';

const HomePage = () => {
    const router = useRouter();

    return (
        <div className="screen home-screen">
            <section className="home-title">
                <div className="home-logo">
                    <Logo />
                </div>
                <div className="home-banner">
                    <Banner />
                </div>
            </section>

            <section className="home-hero">
            <div className="home-image-container">
                <img
                    src="https://placehold.co/300x200/ADD8E6/000000?text=Game+Graphics"
                    alt="Snakes and Ladders Graphics"
                    className="home-image"
                />
            </div>
            <Button
                onClick={() => router.push('/gameid')}
                className=""
            >
                Let's Go
            </Button>
            </section>
        </div>
    );
};

export default HomePage;