// DiceRoller.tsx
import React, { useState, useEffect } from 'react';
import styles from './dice.module.css'; // Import CSS Module

// Define the types for the component's props
interface DiceRollerProps {
    onRoll: (result: number) => void;
    disabled: boolean;
}

const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll, disabled }) => {
    const [rolling, setRolling] = useState<boolean>(false);
    const [diceValue, setDiceValue] = useState<number>(1); // Start with 1

    const handleDiceRoll = (): void => {
        if (disabled || rolling) {
            return; 
        }


        const newRoll: number = Math.floor(Math.random() * 6) + 1;
        
        setRolling(true); // Start the rolling animation

        // Set a timeout for the animation duration
        setTimeout(() => {
            setRolling(false); // Stop the rolling animation
            setDiceValue(newRoll); // Set the final dice value
            if (onRoll) {
                onRoll(newRoll); // Call the parent's rollDice function with the result
            }
        }, 1000); // Adjust this duration to match your CSS animation duration
    };

    // Use useEffect to ensure the dice value is visible even if not rolled yet
    useEffect(() => {
        // Initialize with a random value if preferred
        // setDiceValue(Math.floor(Math.random() * 6) + 1);
    }, []);

    return (
        <button
            onClick={handleDiceRoll}
            disabled={disabled || rolling} // Disable button while rolling or if parent disables
            className={`${styles['dice-roller-button']} ${disabled || rolling ? styles['dice-roller-button-disabled'] : ''}`}
        >
            <div className={`${styles['dice-face']} ${rolling ? styles['rolling-animation'] : ''}`}>
                {/* Display dots based on the diceValue */}
                {diceValue === 1 && <span className={`${styles.dot} ${styles['center-dot']}`}></span>}
                {diceValue === 2 && (
                    <>
                        <span className={`${styles.dot} ${styles['top-left']}`}></span>
                        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
                    </>
                )}
                {diceValue === 3 && (
                    <>
                        <span className={`${styles.dot} ${styles['top-left']}`}></span>
                        <span className={`${styles.dot} ${styles['center-dot']}`}></span>
                        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
                    </>
                )}
                {diceValue === 4 && (
                    <>
                        <span className={`${styles.dot} ${styles['top-left']}`}></span>
                        <span className={`${styles.dot} ${styles['top-right']}`}></span>
                        <span className={`${styles.dot} ${styles['bottom-left']}`}></span>
                        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
                    </>
                )}
                {diceValue === 5 && (
                    <>
                        <span className={`${styles.dot} ${styles['top-left']}`}></span>
                        <span className={`${styles.dot} ${styles['top-right']}`}></span>
                        <span className={`${styles.dot} ${styles['center-dot']}`}></span>
                        <span className={`${styles.dot} ${styles['bottom-left']}`}></span>
                        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
                    </>
                )}
                {diceValue === 6 && (
                    <>
                        <span className={`${styles.dot} ${styles['top-left']}`}></span>
                        <span className={`${styles.dot} ${styles['top-right']}`}></span>
                        <span className={`${styles.dot} ${styles['middle-left']}`}></span>
                        <span className={`${styles.dot} ${styles['middle-right']}`}></span>
                        <span className={`${styles.dot} ${styles['bottom-left']}`}></span>
                        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
                    </>
                )}
            </div>
        </button>
    );
};

export default DiceRoller;