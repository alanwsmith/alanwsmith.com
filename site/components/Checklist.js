export default function Checklist({ data }) {
  const theList = data.map((heading) => (
    <>
      <h3>{heading.title}</h3>
      <ul>
        {heading.items.map((item) => (
          <li key={item}>
            <input type="checkbox" id={item} />
            <label for={item}>&nbsp;&nbsp;{item}</label>
          </li>
        ))}
      </ul>
    </>
  ))
  return <div>{theList}</div>
}
