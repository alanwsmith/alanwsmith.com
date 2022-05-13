export default function ContentWrapper({ children }) {
  return (
    <div className="max-w-screen-md mx-auto mt-4 mb-20">
      <div>{children}</div>
    </div>
  )
}
