import Link from "next/link";
import styles from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
    description: "Discover delicious food recipes shared by our community of food lovers.",
    keywords: "food, community, great food, shared food",
    viewport: "width=device-width, initial-scale=1.0",
    title: "All Meals"
}

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>
}

export default async function MealsPage() {
    return (
        <>
        <header className={styles.header}>
            <h1>
                Delicious meals, created {' '}
                <span className={styles.highlight}>by you</span>
            </h1>
            <p>
                Choose your favotite recipe and cook it yoursef. It is easy and fun!
            </p>
            <p className={styles.cta}>
                <Link href="/meals/share">
                    Share your favorite recipe
                </Link>
            </p>
        </header>
        <main className={styles.main}>
            <Suspense fallback={<p className={styles.loading}>Loading Meals</p>}>
                <Meals/>
            </Suspense>
            
        </main>
        </>
    );
}