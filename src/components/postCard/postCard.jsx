import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/18844139/pexels-photo-18844139.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>As a developer who strives for continuous growth, I am always making an effort to keep up with the latest technological trends. Prioritizing user experience, I focus on enhancing the quality of the digital user experience by taking an aesthetical and functional approach to every project.</p>
                <Link className={styles.link} href='/blog/post'>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard