import { getMeal } from "@/lib/meals";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata( { params }) {
    const meal = getMeal(params.slug);

    if (!meal) {
        notFound();
    }
    
    return {
        description: meal.summary,
        keywords: `food, community, great food, + ${meal.title}`,
        viewport: "width=device-width, initial-scale=1.0",
        title: meal.title
    }
}

export default async function MealDetails({params}) {
    const meal = await getMeal(params.slug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={meal.image} alt={meal.title} fill/>
                </div>
                <div className={styles.headerTex}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={styles.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={styles.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}>
                </p>
            </main>
        </>
    );
}