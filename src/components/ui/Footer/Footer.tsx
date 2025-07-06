import styles from './footer.module.css'

interface FooterProps {
    variant?: 'default' | 'game';
}

export default function Footer({ variant = 'default' }: FooterProps) {
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