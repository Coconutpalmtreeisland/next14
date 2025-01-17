import Links from './links/Links';
import styles from "./navbar.module.css";

import Link from 'next/link'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link href='/' className={styles.logo}>Logo</Link>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default NavBar