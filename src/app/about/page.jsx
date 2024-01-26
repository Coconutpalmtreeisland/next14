import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
    // console.log('lets check where its works')
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>About CPL</h2>
                    <h1 className={styles.title}>
                        As a developer who strives for continuous growth
                    </h1>
                    <p className={styles.desc}>
                        I am always making an effort to keep up with the latest technological trends. Prioritizing user experience, I focus on enhancing the quality of the digital user experience by taking an aesthetical and functional approach to every project.
                    </p>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h1>6</h1>
                            <p>Months of learning coding</p>
                        </div>
                        <div className={styles.box}>
                            <h1>6</h1>
                            <p>Months of learning coding</p>
                        </div>
                        <div className={styles.box}>
                            <h1>6</h1>
                            <p>Months of learning coding</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src='/about.png'
                        alt='About Image'
                        fill
                        className={styles.img}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPage