import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Coconut Palmtree Island</h1>
      <p className={styles.desc}>
        I believe that I can accomplish anything with effort. I am always striving to become a front-end developer who learns and works diligently in everything.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>About More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brand} />
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
    </div>
  </div>
}

export default Home