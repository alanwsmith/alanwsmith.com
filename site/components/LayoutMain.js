import Link from 'next/link'

export default function LayoutMain(props) {
  return (
    <div className="bg-gray-700 min-h-screen">
      <nav className="mx-auto text-blue-200 container p-6 max-w-screen-md">
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      <main className="mx-auto text-blue-200 container p-6 max-w-screen-md">
        {props.content}
      </main>
    </div>
  )
}
