const NAVIGATION_TIME = 3
const VOLUME_RATIO = 0.1

const supportsVideo = !!document.createElement("video").canPlayType
if (supportsVideo) {
  console.log('video element supported!')

  const videoContainer = document.querySelector("#video-container")
  const video = document.querySelector("#video")
  const videoControls = document.querySelector("#video-controls")

  // Hide the default controls
  video.controls = false

  // Display the user defined video controls
  videoControls.style.display = "grid"

  const playpause = document.querySelector("#playpause")
  const backward = document.querySelector("#backward")
  const forward = document.querySelector("#forward")
  const volumeIncrement = document.querySelector("#volume-increment")
  const volumeDecrement = document.querySelector("#volume-decrement")
  const mute = document.querySelector("#mute")
  const progress = document.querySelector("#progress")
  const progressBar = document.querySelector("#progress-bar")
  const fullscreen = document.querySelector("#fullscreen")

  video.addEventListener('click', () => {
    if (video.paused || video.ended) {
      video.play()
    } else {
      video.pause()
    }
  })

  playpause.addEventListener('click', () => {
    if (video.paused || video.ended) {
      video.play()
    } else {
      video.pause()
    }
  })

  backward.addEventListener('click', () => {
    video.currentTime = video.currentTime - NAVIGATION_TIME
  })
  forward.addEventListener('click', () => {
    video.currentTime = video.currentTime + NAVIGATION_TIME
  })

  volumeIncrement.addEventListener('click', () => {
    if (video.volume < 1) {
      video.volume = video.volume + VOLUME_RATIO
    }
  })

  volumeDecrement.addEventListener('click', () => {
    if (video.volume > 0) {
      video.volume = video.volume - VOLUME_RATIO
    }
  })

  mute.addEventListener('click', () => {
    video.muted = !video.muted
  })

}
