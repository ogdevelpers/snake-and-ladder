'use client'; // This directive marks the component for client-side rendering

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import Logo from '@/components/ui/Logo/Logo';
import Banner from '@/components/ui/Banner/Banner';
import Button from '@/components/ui/Button/Button';

const ColorSelectPage = () => {
    const router = useRouter();
    const [selectedColor, setSelectedColor] = useState('#EF4444'); // Default to red

    const colors = [
        { name: 'Red', hex: '#EF4444' },
        { name: 'Green', hex: '#22C55E' },
        { name: 'Yellow', hex: '#EAB308' },
        { name: 'Blue', hex: '#3B82F6' },
    ];

    const handleNext = () => {
        localStorage.setItem('selectedPlayerColor', selectedColor);
        router.push('/how-to-play');
    };

    return (
        <div className="screen color-select-screen">
            <section className="home-title">
                <div className="home-logo">
                    <Logo />
                </div>
                <div className="home-banner">
                    <Banner />
                </div>
            </section>
            <span className="color-select-title">
                Select Your Token Colour
            </span>
            <div className="color-grid">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.hex)}
                        className={`color-button ${selectedColor === color.hex ? 'color-button-selected' : ''}`}
                        style={{ backgroundColor: color.hex }}
                    >
                        <span className="color-name">{color.name}</span>
                    </button>
                ))}
            </div>
            <Button
                onClick={handleNext}
                className="next-button"
            >
                Continue
            </Button>
        </div>
    );
};

export default ColorSelectPage;