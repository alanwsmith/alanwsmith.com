function ReadOnlyChecklist1({ data }) {
  function getThing(line, index) {
    const parts = line.split(',')
    // console.log(parts.length)
    if (!parts[0]) {
      return null
    } else {
      const lineType = parts[0]
      parts.shift()
      const lineText = parts.join(',')

      if (lineType === '0') {
        return (
          <li>
            <input type="checkbox" id={index} checked={false} readOnly />
            {lineText}
          </li>
        )
      } else if (lineType === '2') {
        return (
          <li>
            <input type="checkbox" id={index} checked={false} readOnly />
            <strike>{lineText}</strike>
          </li>
        )
      } else {
        return (
          <li>
            <input type="checkbox" id={index} checked={true} readOnly />
            {lineText}
          </li>
        )
      }
    }
  }

  const lines = data.split('\n')
  const output = lines.map((line, index) => getThing(line, index))
  return <ul>{output}</ul>
}

export default function Page() {
  const data = `0, This is the thing

0, another thing here { true }
1, a checked thing <a href="#">Link</a</>
0, this is ' and " and that is okey; 
1, this, has, more, commas
2, another unchecked thing with some words`

  return <ReadOnlyChecklist1 data={data} />
}
