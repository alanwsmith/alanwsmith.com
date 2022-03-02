import Link from 'next/link'

// This is the main global nav header for the site.
// The goal is to use it (or a similar one) instead of 
// hard coding header stuff in each file


export default function HeaderV1() {
  return (
    <header className="mx-auto max-w-screen-md mt-4">
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  )
}
