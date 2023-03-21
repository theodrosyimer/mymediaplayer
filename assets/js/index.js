const supportsVideo = !!document.createElement("video").canPlayType
if (supportsVideo) {
  console.log('video element supported!')
}
