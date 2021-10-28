---
category: Development
date: '2020-10-17'
slug: /updating-youtubes-autoplay-to-fallback-to-mute
tags:
- Hugo
- JavaScript
title: Updating YouTube's Autoplay To Play Consistently With Mute If Necessary (Hugo
  Shortcode and Plain JavaScript)
type: post
---


### TL;DR

YouTube's autoplay doesn't always work unless you call it muted. I build some code which autoplays with sound when possible and falls back to muted when necessary. The code's down below. Here's an example (which probably doesn't have sound, but might):

`youtube: https://www.youtube.com/watch?v=FUQN7yJMc_4`

### The Full Story

YouTube offers an "autoplay" flag for embedded videos. At the name implies, it starts them up when a page is loaded. It's great. Except, it doesn't work.

Browsers have final say over what happens on a page. They generally squash autoplay if a video's sound is on. Something put in place to save us from constantly being bombarded by sound. Black boxed logic determines if a video will autoplay with sound on any given site. The answer is usually no.

YouTube also offers a "mute" flag. Setting it along with "autoplay" gets the video to play every time. But, of course, without sound. This is frustrating because you have to pick between sometimes starting with sound, or always starting without it. What I want is either:

1. autoplay with sound if the browser is cool with it, or
2. autoplay muted if the browser wouldn't let it play with sound

I'm a little surprised that this isn't how it works out of the box, but 🤷‍♂️ 

I was able to coax the behavior out of [YouTube's iframe API](https://developers.google.com/youtube/iframe_api_reference). It works by loading a video and trying to play it with sound. If the browser allows it, the state of the player moves to "playing". If the browser puts the kibosh on it, the state becomes either "unstarted" or "paused". The script checks this state. If it's not "playing", the script tells the player to mute itself and fires off the command to play again. So far, this has worked in every browser I've tested. 

My site is built on [Hugo](https://gohugo.io). I setup the following Shortcode (which I dropped in "SITE_ROOT/layouts/shortcodes/youtube_autoplay.html") to do the embeds. 

```javascript{numberLines: true}
{{- $id := .Get "id" | default (.Get 0) -}}
<div class="youtube_video">
  <div id="player"></div>
</div>

<script>
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: '{{ $id }}',
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

  function onPlayerReady(event) {
    {{ with .Get "start" }}event.target.seekTo({{ . }});{{ end }}                
    event.target.playVideo();
    jumpstart_player();
  }

  async function jumpstart_player() {
    for (let i = 0; i < 10; i++) {
      await sleep(500);
      if (player.getPlayerState() == 1) {
        break;
      }
      if (player.getPlayerState() == 2 || player.getPlayerState() == -1) {
        player.mute();
        player.playVideo();
        break;
      }
    }
  }
</script>
```


It's called with either:

```go
{{</* youtube_autoplay FUQN7yJMc_4 */>}}
```

or 

```go
{{</* youtube_autoplay id="FUQN7yJMc_4" start="42" */>}}
```

The last one provides the "start" option which kicks video off the specified number of seconds in.

Note that I wrapped the player's div inside one with a "youtube_video" class. This is how I apply the responsive code from the original Hugo Shortcode. The css is simply:


```css{numberLines: true}
iframe {
	display:block;
	margin: 0 auto;
}

.youtube_video {
	position: relative; 
	padding-bottom: 56.25%; 
	height: 0; 
	overflow: hidden;
	margin-bottom: 50px;
}

.youtube_video iframe {
	position: absolute; 
	top: 0; 
	left: 0; 
	width: 100%; 
	height: 100%; 
	border:0;
}
```


Here's a plain JavaScript version as well:

```javascript{numberLines: true}
<div id="player"></div>

<script>
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'DIHhUYzuMVc',
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

  function onPlayerReady(event) {
    // event.target.seekTo(42);
    event.target.playVideo();
    jumpstart_player();
  }

  async function jumpstart_player() {
    for (let i = 0; i < 10; i++) {
      await sleep(500);
      if (player.getPlayerState() == 1) {
        break;
      }
      if (player.getPlayerState() == 2 || player.getPlayerState() == -1) {
        player.mute();
        player.playVideo();
        break;
      }
    }
  }
</script>
```

I'll leave styling the div, setting the videoId on line 19, and setting up seekTo (aka start) as an exercise for the reader.