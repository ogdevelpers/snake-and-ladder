import styles from './logo.module.css'

export default function Logo({src}:{src?:string}) {
 return (
    <div className={styles.logo}>
        <img src={src || "/logo_cvent.svg"} alt="Cvent" className={styles.logoImg}/>
    </div>
  )
}
