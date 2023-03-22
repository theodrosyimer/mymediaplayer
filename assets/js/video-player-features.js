import { createBatchFn } from "./utils.js"

const NAVIGATION_TIME = 3
const VOLUME_RATIO = 0.1
const videoContainer = document.querySelector("#video-container")

let features = [
  {
    name: 'video',
    event: 'click',
    element: () => document.querySelector("#video"),
    action: () => {
      if (video.paused || video.ended) {
        video.play()
      } else {
        video.pause()
      }
    }
  },
  {
    name: 'video',
    event: 'timeupdate',
    element: () => document.querySelector("#video"),
    action: () => {
      if (!document.querySelector("#progress").getAttribute("max"))
        document.querySelector("#progress").setAttribute("max", video.duration)
      document.querySelector("#progress").value = video.currentTime
      document.querySelector("#progress-bar").style.width = `${Math.floor(
        (video.currentTime * 100) / video.duration
      )}%`
    }
  },
  {
    name: 'playpause',
    event: 'click',
    element: () => document.querySelector("#playpause")
    ,
    action: () => {
      if (video.paused || video.ended) {
        video.play()
        document.querySelector("#playpause").classList.remove('fa-play')
        document.querySelector("#playpause").classList.add('fa-pause')
      } else {
        video.pause()
        document.querySelector("#playpause").classList.remove('fa-pause')
        document.querySelector("#playpause").classList.add('fa-play')
      }
    }
  },
  {
    name: 'backward',
    event: 'click',
    element: () => document.querySelector("#backward"),
    action: () => {
      video.currentTime = video.currentTime - NAVIGATION_TIME
    }
  },
  {
    name: 'forward',
    event: 'click',
    element: () => document.querySelector("#forward"),
    action: () => {
      video.currentTime = video.currentTime + NAVIGATION_TIME
    }
  },
  {
    name: 'volumeIncrement',
    event: 'click',
    element: () => document.querySelector("#volume-increment"),
    action: () => {
      if (video.volume < 1) {
        video.volume = video.volume + VOLUME_RATIO
      }
    }
  },
  {
    name: 'volumeDecrement',
    event: 'click',
    element: () => document.querySelector("#volume-decrement"),
    action: () => {
      if (video.volume > 0.1) {
        video.volume = video.volume - VOLUME_RATIO
      }
    }
  },
  {
    name: 'mute',
    event: 'click',
    element: () => document.querySelector("#mute"),
    action: () => {
      video.muted = !video.muted
    }
  },
  {
    name: 'fullscreen',
    event: 'click',
    element: () => document.querySelector("#fullscreen"),
    action: () => {
      handleFullscreen()
    }
  },
  {
    name: 'skipAhead',
    event: 'click',
    element: () => document.querySelector("#progress"),
    action: (e) => {
      const rect = document.querySelector("#progress").getBoundingClientRect()
      const pos = (e.pageX - rect.left) / document.querySelector("#progress").offsetWidth
      video.currentTime = pos * video.duration
    }
  },
  {
    name: 'volume-control',
    event: 'input',
    element: () => document.querySelector("#volume-control"),
    action: (e) => {
      const video = document.querySelector("#video")
      video.volume = e.target.value / 100
    }
  }
]

export const initVideoPlayerFeatures = createBatchFn(features, initFeature)

function initFeature({ element, event, action }) {
  element().addEventListener(event, action)
}

function setFullscreenData(state) {
  videoContainer.setAttribute('data-fullscreen', !!state)
}

function isFullScreen() {
  return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
}

function handleFullscreen() {
  // If fullscreen mode is active...
  if (isFullScreen()) {
    // ...exit fullscreen mode
    // (Note: this can only be called on document)
    if (document.exitFullscreen) document.exitFullscreen()
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen()
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen()
    else if (document.msExitFullscreen) document.msExitFullscreen()
    setFullscreenData(false)
  }
  else {
    // ...otherwise enter fullscreen mode
    // (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)
    if (videoContainer.requestFullscreen) videoContainer.requestFullscreen()
    else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen()
    else if (videoContainer.webkitRequestFullScreen) {
      // Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and
      // ensures that our custom controls are visible:
      // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
      // figure[data-fullscreen=true] .controls { z-index:2147483647; }
      video.webkitRequestFullScreen()
    }
    else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen()
    setFullscreenData(true)
  }
}

