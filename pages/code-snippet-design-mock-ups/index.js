import { useState } from 'react'
import HeaderMain from '../../components/HeaderMain'
import ContentWrapper from '../../components/ContentWrapper'
import Design1 from './designs/1/design'
import Design2 from './designs/2/design'
import Design3 from './designs/3/design'
import Design4 from './designs/4/design'
import Design5 from './designs/5/design'
import Design6 from './designs/6/design'
import Design7 from './designs/7/design'
import Design8 from './designs/8/design'
import Design9 from './designs/9/design'
import Design10 from './designs/10/design'
import Design11 from './designs/11/design'
import Design12 from './designs/12/design'
import Design13 from './designs/13/design'
import Design14 from './designs/14/design'
import Design15 from './designs/15/design'
import Design16 from './designs/16/design'
import Design17 from './designs/17/design'
import style from './Styles.module.css'

export default function Page() {
  const [activeDesign, setActiveDesign] = useState(1)

  const designs = [
    <div key="s0">placeholder</div>,
    <Design1 key="s1" />,
    <Design2 key="s2" />,
    <Design3 key="s3" />,
    <Design4 key="s4" />,
    <Design5 key="s5" />,
    <Design6 key="s6" />,
    <Design7 key="s7" />,
    <Design8 key="s8" />,
    <Design9 key="s9" />,
    <Design10 key="s10" />,
    <Design11 key="s11" />,
    <Design12 key="s12" />,
    <Design13 key="s13" />,
    <Design14 key="s14" />,
    <Design15 key="s15" />,
    <Design16 key="s16" />,
    <Design17 key="s17" />,
  ]

  const switchToSample = (designIndex) => {
    setActiveDesign(designIndex)
    console.log(designIndex)
  }

  return (
    <>
      <style jsx>
        {`
          h3 {
            margin-top: 20px;
          }
        `}
      </style>

      <HeaderMain />
      <ContentWrapper>
        <h1>Code Snippet Design Tests</h1>
        <p>
          I&apos;ve been playing around with the design of code snippets for my
          site. These are the samples I&apos;m of what I&apos;m working on.
          (They&apos;re not currently responsive. I&apos;ll be working on that.
          Also, the Copy buttons don&apos;t do anything since these are just
          mock-ups.)
        </p>

        <div className={style.buttonStrip}>
          <button onClick={() => switchToSample(1)}>1</button>
          <button onClick={() => switchToSample(2)}>2</button>
          <button onClick={() => switchToSample(3)}>3</button>
          <button onClick={() => switchToSample(4)}>4</button>
          <button onClick={() => switchToSample(5)}>5</button>
          <button onClick={() => switchToSample(6)}>6</button>
          <button onClick={() => switchToSample(7)}>7</button>
          <button onClick={() => switchToSample(8)}>8</button>
          <button onClick={() => switchToSample(9)}>9</button>
          <button onClick={() => switchToSample(10)}>10</button>
          <button onClick={() => switchToSample(11)}>11</button>
          <button onClick={() => switchToSample(12)}>12</button>
          <button onClick={() => switchToSample(13)}>13</button>
          <button onClick={() => switchToSample(14)}>14</button>
          <button onClick={() => switchToSample(15)}>15</button>
          <button onClick={() => switchToSample(16)}>16</button>
          <button onClick={() => switchToSample(17)}>17</button>
        </div>

        <h3>Design {activeDesign}</h3>
        {designs[activeDesign]}
      </ContentWrapper>
    </>
  )
}
