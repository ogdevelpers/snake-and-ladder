import styles from './footer.module.css'

interface FooterProps {
    variant?: 'default' | 'game' | 'choice';
}

export default function Footer({ variant = 'default' }: FooterProps) {
    const imgSrc= variant === 'game' ? '/footer/game_footer.png' :
     variant==='choice'?  '/footer/landing_footer.png' :
      '/footer/landing_footer.png';

    return (
    <div className={styles.footer}>
      {/* Your existing footer content here */}
      
      {/* Decorative image at the bottom */}
      <img
        src="/footer/landing_footer.png"
        alt="Bottom Decoration"
        className={styles.footerBottomImage}
      />
    </div>
  );
}