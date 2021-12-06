import Image from 'next/image'

import acme_bag_2008_05 from '../_images/acme_bag_2008_05.jpg'
import bama_schedule_sp_20090821_misc_112136 from '../_images/bama_schedule_sp_20090821_misc_112136.png'
import black_widow_20051026_230734a1 from '../_images/black_widow_20051026_230734a1.jpg'
import bottle_of_change_20060313_150636a from '../_images/bottle_of_change_20060313_150636a.jpg'
import broken_sunpak_tripod_20090829_misc_110949 from '../_images/broken_sunpak_tripod_20090829_misc_110949.jpg'
import cfl_bulb_2008_05 from '../_images/cfl_bulb_2008_05.jpg'
import command_line_ls_2009_04 from '../_images/command_line_ls_2009_04.png'
import dot_matrix_sky_writing from '../_images/dot_matrix_sky_writing.jpg'
import euthanasia_20080629_snapshots_0003 from '../_images/euthanasia_20080629_snapshots_0003.jpg'
import fire_escape_plaque_img_0306 from '../_images/fire_escape_plaque_img_0306.jpg'
import fire_eyes_1 from '../_images/fire_eyes_1.jpg'
import glock_20060923_114208_01 from '../_images/glock_20060923_114208_01.jpg'
import home_and_garden_skull_2009_03 from '../_images/home_and_garden_skull_2009_03.png'
import iphone_3gs_test_photo_2009_06 from '../_images/iphone_3gs_test_photo_2009_06.jpg'
import kexp_song_of_the_day_2009_06 from '../_images/kexp_song_of_the_day_2009_06.jpg'
import last_sunday_at_reimers_img_0289 from '../_images/last_sunday_at_reimers_img_0289.jpg'
import last_sunday_at_reimers_img_0293 from '../_images/last_sunday_at_reimers_img_0293.jpg'
import mile_200000_20080402_snaps_0039 from '../_images/mile_200000_20080402_snaps_0039.jpg'
import movies_cropped_2006_02 from '../_images/movies_cropped_2006_02.jpg'
import play_button_2009_01 from '../_images/play_button_2009_01.gif'
import sunset_in_key_weat_20060211_191750a from '../_images/sunset_in_key_weat_20060211_191750a.jpg'
import superfad_reel_grab_2009_01 from '../_images/superfad_reel_grab_2009_01.png'
import target_with_bullet_holes_20060923_124436_01 from '../_images/target_with_bullet_holes_20060923_124436_01.jpg'
import unprocessed_file_20060125_010408a from '../_images/unprocessed_file_20060125_010408a.jpg'
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
  bottle_of_change_20060313_150636a: bottle_of_change_20060313_150636a,
  broken_sunpak_tripod_20090829_misc_110949: broken_sunpak_tripod_20090829_misc_110949,
  cfl_bulb_2008_05: cfl_bulb_2008_05,
  command_line_ls_2009_04: command_line_ls_2009_04,
  dot_matrix_sky_writing: dot_matrix_sky_writing,
  euthanasia_20080629_snapshots_0003: euthanasia_20080629_snapshots_0003,
  fire_escape_plaque_img_0306: fire_escape_plaque_img_0306,
  fire_eyes_1: fire_eyes_1,
  glock_20060923_114208_01: glock_20060923_114208_01,
  home_and_garden_skull_2009_03: home_and_garden_skull_2009_03,
  iphone_3gs_test_photo_2009_06: iphone_3gs_test_photo_2009_06,
  kexp_song_of_the_day_2009_06: kexp_song_of_the_day_2009_06,
  last_sunday_at_reimers_img_0289: last_sunday_at_reimers_img_0289,
  last_sunday_at_reimers_img_0293: last_sunday_at_reimers_img_0293,
  mile_200000_20080402_snaps_0039: mile_200000_20080402_snaps_0039,
  movies_cropped_2006_02: movies_cropped_2006_02,
  play_button_2009_01: play_button_2009_01,
  sunset_in_key_weat_20060211_191750a: sunset_in_key_weat_20060211_191750a,
  superfad_reel_grab_2009_01: superfad_reel_grab_2009_01,
  target_with_bullet_holes_20060923_124436_01: target_with_bullet_holes_20060923_124436_01,
  unprocessed_file_20060125_010408a: unprocessed_file_20060125_010408a,
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