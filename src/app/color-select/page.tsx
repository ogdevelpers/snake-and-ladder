'use client'; // This directive marks the component for client-side rendering

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router

const ColorSelectPage = () => {
    const router = useRouter();
    const [selectedColor, setSelectedColor] = useState('#EF4444'); // Default to red

    const colors = [
        { name: 'Red', hex: '#EF4444' }, 
        { name: 'Green', hex: '#22C55E' },
        { name: 'Yellow', hex: '#EAB308' },
        { name: 'Blue', hex: '#3B82F6' },
        { name: 'Orange', hex: '#F97316' },
        { name: 'Purple', hex: '#A855F7' },
    ];

    const handleNext = () => {
        localStorage.setItem('selectedPlayerColor', selectedColor);
        router.push('/how-to-play');
    };

    return (
        <div className="screen color-select-screen">
            <h2 className="color-select-title">
                SELECT YOUR COLOUR
            </h2>
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
            <button
                onClick={handleNext}
                className="next-button"
            >
                Next ▶️
            </button>
        </div>
    );
};

export default ColorSelectPage;