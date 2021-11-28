import Image from 'next/image'

import acme_bag_2008_05 from '../_images/acme_bag_2008_05.jpg'
import bama_schedule_sp_20090821_misc_112136 from '../_images/bama_schedule_sp_20090821_misc_112136.png'
import black_widow_20051026_230734a1 from '../_images/black_widow_20051026_230734a1.jpg'
import broken_sunpak_tripod_20090829_misc_110949 from '../_images/broken_sunpak_tripod_20090829_misc_110949.jpg'
import command_line_ls_2009_04 from '../_images/command_line_ls_2009_04.png'
import euthanasia_20080629_snapshots_0003 from '../_images/euthanasia_20080629_snapshots_0003.jpg'
import fire_eyes_1 from '../_images/fire_eyes_1.jpg'
import iphone_3gs_test_photo_2009_06 from '../_images/iphone_3gs_test_photo_2009_06.jpg'
import mile_200000_20080402_snaps_0039 from '../_images/mile_200000_20080402_snaps_0039.jpg'
import movies_cropped_2006_02 from '../_images/movies_cropped_2006_02.jpg'
import play_button_2009_01 from '../_images/play_button_2009_01.gif'
import sunset_in_key_weat_20060211_191750a from '../_images/sunset_in_key_weat_20060211_191750a.jpg'
import superfad_reel_grab_2009_01 from '../_images/superfad_reel_grab_2009_01.png'
import vivitar_285_hack_20060710_212242_01 from '../_images/vivitar_285_hack_20060710_212242_01.jpg'
import vivitar_285_hack_2_20060710_212406_01 from '../_images/vivitar_285_hack_2_20060710_212406_01.jpg'
import wedding_dance_20080301_0965 from '../_images/wedding_dance_20080301_0965.jpg'
import wireless_flash_mod_20060430_234118a from '../_images/wireless_flash_mod_20060430_234118a.jpg'
import wobble_wedge_2009_02 from '../_images/wobble_wedge_2009_02.jpg'
import youtube_logo_2009_01 from '../_images/youtube_logo_2009_01.gif'

const imgMap = {
  acme_bag_2008_05: acme_bag_2008_05,
  bama_schedule_sp_20090821_misc_112136: bama_schedule_sp_20090821_misc_112136,
  black_widow_20051026_230734a1: black_widow_20051026_230734a1,
  broken_sunpak_tripod_20090829_misc_110949: broken_sunpak_tripod_20090829_misc_110949,
  command_line_ls_2009_04: command_line_ls_2009_04,
  euthanasia_20080629_snapshots_0003: euthanasia_20080629_snapshots_0003,
  fire_eyes_1: fire_eyes_1,
  iphone_3gs_test_photo_2009_06: iphone_3gs_test_photo_2009_06,
  mile_200000_20080402_snaps_0039: mile_200000_20080402_snaps_0039,
  movies_cropped_2006_02: movies_cropped_2006_02,
  play_button_2009_01: play_button_2009_01,
  sunset_in_key_weat_20060211_191750a: sunset_in_key_weat_20060211_191750a,
  superfad_reel_grab_2009_01: superfad_reel_grab_2009_01,
  vivitar_285_hack_20060710_212242_01: vivitar_285_hack_20060710_212242_01,
  vivitar_285_hack_2_20060710_212406_01: vivitar_285_hack_2_20060710_212406_01,
  wedding_dance_20080301_0965: wedding_dance_20080301_0965,
  wireless_flash_mod_20060430_234118a: wireless_flash_mod_20060430_234118a,
  wobble_wedge_2009_02: wobble_wedge_2009_02,
  youtube_logo_2009_01: youtube_logo_2009_01,
}

export default function Img({ src, alt = 'image alt text unavailable' }) { 
 return <Image src={imgMap[src]} alt={alt} /> 
}