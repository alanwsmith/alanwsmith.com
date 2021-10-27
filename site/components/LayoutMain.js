import Link from 'next/link'

export default (props) => (
  <div class="bg-gray-700 min-h-screen">
    <nav class="mx-auto text-blue-200 container p-6 max-w-screen-md">
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
    <main class="mx-auto text-blue-200 container p-6 max-w-screen-md">
      {props.content}
    </main>
  </div>
)
