const prism = require('prismjs')
import { useEffect } from 'react'

export default function LayoutMain(props) {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <main className="pb-16 mx-auto container pt-4 px-6 max-w-screen-md">
          {props.content}
        </main>
      </div>
    </>
  )
}
