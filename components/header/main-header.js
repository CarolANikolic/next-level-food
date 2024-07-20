'use client';
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/icons/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "../main-header-background/main-header-background";
import NavLink from "../nav-link/nav-link";
import MenuIcon from "../menu-icon/menu-icon";
import { useState } from "react";

export default function MainHeader() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <MainHeaderBackground/>
            <header className={styles.header}>
                <div className={styles.logoDiv}>
                    <Link href="/" className={styles.logoContainer}>
                        <div>
                            <Image
                                className={styles.logo}
                                src={logoImg}
                                alt="A plate full of food."
                                priority
                            />
                        </div>
                        NextLevel Food
                    </Link>
                </div> 

                <MenuIcon toggleMenu={{ menu, setMenu}}/>

                <nav className={`${styles.nav} ${menu && styles.showMenu}`}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
);
}