import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/icons/icon.png";

export default function MainHeader() {
    return (
        <header>
            <Link href="/">
                <Image 
                src={logoImg.src} 
                alt="A plate full of food."
                width={50} height={50} />
                NextLevel Food
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}