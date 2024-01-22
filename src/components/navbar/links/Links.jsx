'use client';

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from './navLink/navLink';

const Links = () => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "Hompage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}{
                    session ? (
                        <>
                            {
                                isAdmin && (
                                    <NavLink item={{ title: 'Admin', path: '/admin' }} />
                                )
                            }
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{ title: 'Login', path: '/login' }} />
                    )
                }
            </div>
            {/* false면 true로, true면 false로 --> 클릭시 보이기 / 숨기기 */}
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Links