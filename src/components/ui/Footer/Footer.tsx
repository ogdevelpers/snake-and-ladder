import styles from './footer.module.css'

interface FooterProps {
    variant?: 'default' | 'game';
}

export default function Footer({ variant = 'default' }: FooterProps) {
    const footerClass = variant === 'default' 
        ? `${styles.footer} ${styles.footerDefault}` 
        : `${styles.footer} ${styles.footerGame}`;

    return (
        <div className={styles.footerClass}>
            <div className={styles.footerContainer}>
                {/* Content can go here if needed */}
            </div>
        </div>
    )
}