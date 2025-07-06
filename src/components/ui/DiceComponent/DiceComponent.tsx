// DiceRoller.tsx
import React, { useState, useEffect } from 'react';
import styles from './dice.module.css';
import { One, Two, Three, Four, Five, Six } from './DiceFace';

// Define the types for the component's props
interface DiceRollerProps {
    onRoll: (result: number) => void;
    disabled: boolean;
}

const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll, disabled }) => {
    // Primary state: dice face number (1-6)
    const [diceFaceNumber, setDiceFaceNumber] = useState<number>(1);
    
    // Secondary state: rolling animation state
    const [isRolling, setIsRolling] = useState<boolean>(false);

    // Function to get the appropriate dice face component based on face number
    const getDiceFace = (faceNumber: number): React.ReactElement => {
        console.log(`getDiceFace called with faceNumber: ${faceNumber}`);
        switch (faceNumber) {
            case 1:
                return <One />;
            case 2:
                return <Two />;
            case 3:
                return <Three />;
            case 4:
                return <Four />;
            case 5:
                return <Five />;
            case 6:
                return <Six />;
            default:
                return <One />;
        }
    };

    // Function to generate a random dice face number
    const generateRandomDiceFace = (): number => {
        return Math.floor(Math.random() * 6) + 1;
    };

    // Function to simulate the dice roll
    const handleDiceRoll = (): void => {
        if (disabled || isRolling) {
            return; // Prevent rolling if disabled or already rolling
        }

        // Generate the new dice face number
        const newDiceFaceNumber: number = generateRandomDiceFace();
        
        // Start the rolling animation
        setIsRolling(true);

        // Complete the roll after animation duration
        setTimeout(() => {
            setIsRolling(false); // Stop the rolling animation
            setDiceFaceNumber(newDiceFaceNumber); // Update the dice face
            
            // Notify parent component of the roll result
            if (onRoll) {
                onRoll(newDiceFaceNumber);
            }
        }, 1000); // Animation duration
    };

    // Initialize dice face on component mount
    useEffect(() => {
        // Start with face 1, or optionally a random face
        setDiceFaceNumber(1);
        // Alternative: setDiceFaceNumber(generateRandomDiceFace());
    }, []);

    // Effect to handle dice face changes (for debugging or additional logic)
    useEffect(() => {
        console.log(`Dice face changed to: ${diceFaceNumber}`);
    }, [diceFaceNumber]);

    return (
        <button
            onClick={handleDiceRoll}
            disabled={disabled || isRolling} // Disable button while rolling or if parent disables
            className={`${styles['dice-roller-button']} ${disabled || isRolling ? styles['dice-roller-button-disabled'] : ''}`}
        >
            <div className={`${styles['dice-face']} ${isRolling ? styles['rolling-animation'] : ''}`}>
                {getDiceFace(diceFaceNumber)}
            </div> 
        </button>
    );
};

export default DiceRoller;