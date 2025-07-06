// DiceFaces.tsx
import React from 'react';
import styles from './dice.module.css';

// One dot in the center
export const One: React.FC = () => (
    <span className={`${styles.dot} ${styles['center-dot']}`}></span>
);

// Two dots diagonally opposite
export const Two: React.FC = () => (
    <>
        <span className={`${styles.dot} ${styles['top-left']}`}></span>
        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
    </>
);

// Three dots diagonally
export const Three: React.FC = () => (
    <>
        <span className={`${styles.dot} ${styles['top-left']}`}></span>
        <span className={`${styles.dot} ${styles['center-dot']}`}></span>
        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
    </>
);

// Four dots in corners
export const Four: React.FC = () => (
    <>
        <span className={`${styles.dot} ${styles['top-left']}`}></span>
        <span className={`${styles.dot} ${styles['top-right']}`}></span>
        <span className={`${styles.dot} ${styles['bottom-left']}`}></span>
        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
    </>
);

// Five dots - four corners plus center
export const Five: React.FC = () => (
    <>
        <span className={`${styles.dot} ${styles['top-left']}`}></span>
        <span className={`${styles.dot} ${styles['top-right']}`}></span>
        <span className={`${styles.dot} ${styles['center-dot']}`}></span>
        <span className={`${styles.dot} ${styles['bottom-left']}`}></span>
        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
    </>
);

// Six dots - two columns of three
export const Six: React.FC = () => (
    <>
        <span className={`${styles.dot} ${styles['top-left']}`}></span>
        <span className={`${styles.dot} ${styles['top-right']}`}></span>
        <span className={`${styles.dot} ${styles['middle-left']}`}></span>
        <span className={`${styles.dot} ${styles['middle-right']}`}></span>
        <span className={`${styles.dot} ${styles['bottom-left']}`}></span>
        <span className={`${styles.dot} ${styles['bottom-right']}`}></span>
    </>
);