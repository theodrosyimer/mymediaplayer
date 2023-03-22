import { appendChildren, batchCreateElement, createElement } from "./utils.js"

const video = createElement({
  tag: 'video',
  options: {
    id: 'video',
    controls: '',
    preload: 'metadata',
    poster: 'assets/videos/how-to-google-it-like-a-senior-developer/poster.png',
  }
})

const source = createElement({
  tag: 'source',
  options: {
    type: 'video/mp4',
    src: 'assets/videos/how-to-google-it-like-a-senior-developer/how-to-google-it-like-a-senior-developer.mp4'
  }
})

const videoLink = createElement({
  tag: 'a',
  options: {
    text: 'Download MP4',
    href: 'assets/videos/how-to-google-it-like-a-senior-developer/how-to-google-it-like-a-senior-developer.mp4',
  }
})

const videoControls = createElement({
  tag: 'div',
  options: {
    id: 'video-controls',
    class: ['controls', 'grid'],
  }
})

const soundControls = createElement({
  tag: 'div',
  options: {
    id: 'sound-controls',
    class: ['sound-controls', 'flex', 'test']
  }
})

const soundControlsButtonsObject = [
  {
    tag: 'button',
    options: {
      id: 'mute',
      class: ['button', 'icon', 'fa-mute'],
      // text: 'Mute/Unmute'
    }
  },
  {
    tag: 'button',
    options: {
      id: 'volume-decrement',
      class: ['button', 'icon', 'fa-vol-dec'],
      // text: '↓'
    }
  },
  {
    tag: 'input',
    options: {
      id: 'volume-control',
      type: 'range',
      min: '0',
      max: '100',
      step: '1',
      // class: [],
      // text: '↓'
    }
  },
  {
    tag: 'button',
    options: {
      id: 'volume-increment',
      class: ['button', 'icon', 'fa-vol-inc'],
      // text: '↑'
    }
  }
]

const soundControlsButtons = batchCreateElement(soundControlsButtonsObject, createElement)

const mainControls = createElement({
  tag: 'div',
  options: {
    class: ['main-controls', 'flex']
  }
})

const mainControlsButtonsObject = [
  {
    tag: 'button',
    options: {
      id: 'backward',
      class: ['button', 'icon', 'fa-backward'],
      // text: '←'
    }
  },
  {
    tag: 'button',
    options: {
      id: 'playpause',
      class: ['button', 'icon', 'fa-play'],
      // text: 'Play/Pause'
    }
  },
  {
    tag: 'button',
    options: {
      id: 'forward',
      class: ['button', 'icon', 'fa-forward'],
      // text: '→'
    }
  }
]

const mainControlsButtons = batchCreateElement(mainControlsButtonsObject, createElement)

const screenControls = createElement({
  tag: 'div',
  options: {
    id: 'screen-controls',
    class: ['screen-controls'],
  }
})

const screenControlsButtons = createElement({
  tag: 'button',
  options: {
    id: 'fullscreen',
    class: ['button', 'icon', 'fa-fullscreen'],
    // text: 'Fullscreen'
  }
})

const progress = createElement({
  tag: 'div',
  options: {
    class: 'progress'
  }
})


const progressBar = createElement({
  tag: 'progress',
  options: {
    id: 'progress',
    value: '0',
    min: '0'
  }
})

const spanProgressBar = createElement({
  tag: 'span',
  options: {
    id: 'progress-bar'
  }
})

export function initUI() {
  const videoContainer = document.querySelector("#video-container")

  appendChildren(videoContainer, [video, videoControls])
  appendChildren(video, [source, videoLink])
  appendChildren(videoControls, [soundControls, mainControls, screenControls, progress])
  appendChildren(soundControls, soundControlsButtons)
  appendChildren(mainControls, mainControlsButtons)
  appendChildren(screenControls, [screenControlsButtons])
  appendChildren(progress, [progressBar])
  appendChildren(progressBar, [spanProgressBar])
}
