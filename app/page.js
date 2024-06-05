import Link from "next/link"

function Home() {
  return (
    <main>
      <div>
        <h1>
          Hello World!
        </h1>
      </div>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">Share Meal</Link></p>
      <p><Link href="/community">Community</Link></p>
    </main>
  )
}

export default Home