import Link from 'next/link'

export default function LayoutMain(props) {
  return (
    <div className="bg-gray-700 min-h-screen">
      <nav
        className="
    m-0 mx-auto 
    text-blue-200 container 
    pt-2 
    px-6 max-w-screen-md
    "
      >
        <div className="border-b border-gray-400">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </nav>
      <main className="mx-auto text-blue-200 container pt-4 px-6 max-w-screen-md">
        {props.content}
      </main>
    </div>
  )
}
