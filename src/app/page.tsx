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
            <section className="home-hero">
                <div className="landing-btn">
                    <Button
                        // onClick={() => router.push('/gameid')}
                        onClick={() => router.push('/game')}
                        className=""
                    >
                        Let&apos;s Go
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;