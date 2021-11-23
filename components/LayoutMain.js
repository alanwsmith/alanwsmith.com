export default function LayoutMain(props) {
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
