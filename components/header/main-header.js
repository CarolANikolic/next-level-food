import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/icons/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "../main-header-background/main-header-background";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground/>
            <header className={styles.header}>
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

        <nav className={styles.nav}>
            <ul>
            <li>
                <Link href="/meals" className={styles.navAnchor}>Browse Meals</Link>
            </li>
            <li>
                <Link href="/community" className={styles.navAnchor}>Foodies Community</Link>
            </li>
            </ul>
        </nav>
    </header>
        </>
);
}