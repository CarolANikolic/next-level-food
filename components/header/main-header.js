import Link from "next/link";
import logoImg from "@/public/images/icons/logo.png";
import styles from "./main-header.module.css";

export default function MainHeader() {
    return (
        <header className={styles.header}>
        <Link href="/" className={styles.logoContainer}>
            <div>
            <img
                className={styles.logo}
                src={logoImg.src}
                alt="A plate full of food."
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
);
}