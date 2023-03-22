const NAVIGATION_TIME = 3
const VOLUME_RATIO = 0.1
const VOLUME_START = 0.5

const supportsVideo = !!document.createElement("video").canPlayType

if (supportsVideo) {
  console.log('video element supported!')

  const { createBatchFn } = await import('../js/utils.js')

  const videoContainer = document.querySelector("#video-container")
  const video = document.querySelector("#video")
  const videoControls = document.querySelector("#video-controls")

  // Hide the default controls
  video.controls = false

  // Start Volume
  video.volume = VOLUME_START

  // Display the user defined video controls
  videoControls.style.display = "grid"

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
      name: 'playpause',
      event: 'click',
      element: () => document.querySelector("#playpause"),
      action: () => {
        if (video.paused || video.ended) {
          video.play()
        } else {
          video.pause()
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
  ]

  const initVideoPlayerFeatures = createBatchFn(features, initFeature)

  initVideoPlayerFeatures() // ?
}

function initFeature({ element, event, action }) {
  element().addEventListener(event, action)
}
