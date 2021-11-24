import Image from 'next/image'

import black_widow_20051026_230734a1 from '../_images/black_widow_20051026_230734a1.jpg'
import mile_200000_20080402_snaps_0039 from '../_images/mile_200000_20080402_snaps_0039.jpg'

const imgMap = {
  black_widow_20051026_230734a1: black_widow_20051026_230734a1,
  mile_200000_20080402_snaps_0039: mile_200000_20080402_snaps_0039,
}

export default function Img({ src, alt = 'image alt text unavailable' }) {
  return <Image src={imgMap[src]} alt={alt} />
}
