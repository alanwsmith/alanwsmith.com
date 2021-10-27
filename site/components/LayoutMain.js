import Link from 'next/link'

export default function LayoutMain(props) {
  return (
    <div className="bg-gray-800 min-h-screen">
      <nav
        className="
    m-0 mx-auto 
    text-blue-200 container 
    pt-2 
    px-6 max-w-screen-md
    "
      >
        <div className="border-b border-gray-400 max-w-prose">
          <div className="pb-2 text-gray-500">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        </div>
      </nav>
      <main className="pb-16 mx-auto container pt-4 px-6 max-w-screen-md">
        {props.content}
      </main>
    </div>
  )
}
