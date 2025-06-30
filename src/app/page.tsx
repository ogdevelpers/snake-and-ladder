"use client"; // This directive marks the component for client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import Logo from '@/components/ui/Logo/Logo';
import Banner from '@/components/ui/Banner/Banner';
import Button from '@/components/ui/Button/Button';
import Footer from '@/components/ui/Footer/Footer';

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
                        src="/snake_landing_banner.png"
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
            <section className="home-footer">
                <Footer variant="default" />
            </section>
        </div>
    );
};

export default HomePage;