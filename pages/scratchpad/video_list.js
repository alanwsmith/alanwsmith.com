export const data = `
Understanding the V8 JavaScript Engine
0,11,2020,xckH5s3UuX4
---
Building Your Own Design System with CSS Variables, talk by Scott Tolinski
0,40,2020,LwYZTKxj-do
---
using curl better - with curl creator Daniel Stenberg
0,55,2020,I6id1Y0YuNk
---
Everything You Know About MongoDB is Wrong!
0,25,2020,l2J2_3eS_DA
---
How to AVOID Becoming a 10x Engineer - Talk by Ivana Kellyerova
0,30,2020,2uoKT-g0oLs
---
Functional Programming with JavaScript - talk by Simon Painter
0,55,2020,ZBf0j-w6uwA
---
Object Oriented Programming is not what I thought - Talk by Anjana Vakil
0,39,2018,TbP2B1ijWr8
---
The Basics of Social Engineering (aka How I Break into Casinos and Airports)
0,25,2019,jfXwdH-fkLE
---
Level Up With the Fundamentals of Web Development
0,22,2020,3xq96I9IUXw
---
Juice it or lose it - a talk by Martin Jonasson & Petri Purho
0,15,2012,Fy0aCDmgnxg
---
The Myth of the Genius Programmer
0,55,2009,0SARbwvhupQ
---
John Cleese on Creativity In Management
0,37,?,Pb5oIIPO62g
---
The computer revolution hasnt happened yet - Alan Kay at OOPSLA 1997
0,60,1997,oKg1hTOQXoY
---
Linus Torvalds on git
0,70,2007,4XpnKHJAok8
---
Mindfulness with Jon Kabat-Zinn
0,70,2007,3nwwKbM_vJc
---
All the Little Things by Sandi Metz
0,40,2014,8bZh5LMaSmE
`

function processItem(item) {
  const lines = item.split('\n')
  const details = lines[2].split(',')
  return (
    <li>
      <input
        type="checkbox"
        checked={details[0] === '0' ? false : true}
        readOnly
      />{' '}
      <a href={`https://youtu.be/${details[3]}`} target="_blank">
        {lines[1]}
      </a>
      <br />({details[1]}min. {details[2] === '?' ? '' : `- ${details[2]}`})
    </li>
  )
}

export function VideoList({ data }) {
  const items = data.split('---')
  const listItems = items.map((item) => processItem(item))
  return <ul>{listItems}</ul>
}

export default function Page() {
  return <VideoList data={data} />
}
