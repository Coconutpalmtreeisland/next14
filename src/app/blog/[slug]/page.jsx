import styles from './singlePost.module.css'
import Image from 'next/image'

const SinglePostPage = ({ params }) => {
    console.log(params);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src='https://images.pexels.com/photos/18844139/pexels-photo-18844139.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                    alt=''
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        src='https://images.pexels.com/photos/18844139/pexels-photo-18844139.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                        alt=''
                        width={50}
                        height={50}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Incredorable</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    As a developer who strives for continuous growth, I am always making an effort to keep up with the latest technological trends. Prioritizing user experience, I focus on enhancing the quality of the digital user experience by taking an aesthetical and functional approach to every project.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage