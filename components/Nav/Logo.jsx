import Link from "next/link"

export default function Logo() {
  return (
    <>
      <Link href="/">
        <a>
          <h1 className="app-logo">Giraffe 🦒</h1>
        </a>
      </Link>
    </>
  )
}
