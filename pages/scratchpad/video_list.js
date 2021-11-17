export const data = `
0
11
2020
Understanding the V8 JavaScript Engine
https://www.youtube.com/watch?v=xckH5s3UuX4

---
0
40
2020
Building Your Own Design System with CSS Variables, talk by Scott Tolinski
https://www.youtube.com/watch?v=LwYZTKxj-do

---
0
55
2020
using curl better - with curl creator Daniel Stenberg
https://www.youtube.com/watch?v=I6id1Y0YuNk

---
0
25
2020
Everything You Know About MongoDB is Wrong!
https://www.youtube.com/watch?v=l2J2_3eS_DA

---
0
30
2020
How to AVOID Becoming a 10x Engineer - Talk by Ivana Kellyerova
https://www.youtube.com/watch?v=2uoKT-g0oLs

---
0
55
2020
Functional Programming with JavaScript - talk by Simon Painter
https://www.youtube.com/watch?v=ZBf0j-w6uwA

---
0
39
2018
Object Oriented Programming is not what I thought - Talk by Anjana Vakil
https://www.youtube.com/watch?v=TbP2B1ijWr8

---
0
25
2019
The Basics of Social Engineering (aka How I Break into Casinos and Airports)
https://www.youtube.com/watch?v=jfXwdH-fkLE

---
1
22
2020
Level Up With the Fundamentals of Web Development
https://www.youtube.com/watch?v=3xq96I9IUXw

---
0
15
2012
Juice it or lose it - a talk by Martin Jonasson & Petri Purho
https://www.youtube.com/watch?v=Fy0aCDmgnxg

---
0
55
2009
The Myth of the Genius Programmer
https://www.youtube.com/watch?v=0SARbwvhupQ

`

function processItem(item) {
  const details = item.split('\n')
  return details[4]
}

export function VideoList({ data }) {
  const items = data.split('---')
  const listItems = items.map((item) => <li>{processItem(item)}</li>)
  //return <div>{items.length}</div>
  return <ul>{listItems}</ul>
}

export default function Page() {
  return <VideoList data={data} />
}
