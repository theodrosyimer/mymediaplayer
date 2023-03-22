function batch(input, action) {
  let items = input

  if (!Array.isArray(input)) {
    items = [input]
  }

  items.forEach((item) => action(item))
}

export function createBatchFn(input, action) {
  return () => batch(input, action)
}

export function batchCreateElement(elements, createElement) {
  let createdElements = []

  elements.forEach(element => createdElements.push(createElement(element)))

  return createdElements
}

export const createElement = ({ tag, options = {} }) => {
  const element = document.createElement(tag)
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      if (Array.isArray(value)) {
        element.classList.add(...value)

      } else { element.classList.add(value) }
    }

    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
    }
    if (key === 'text') {
      element.textContent = value
    }
    if (!['class', 'text', 'dataset'].includes(key)) {
      element.setAttribute(key, value)
    }
  })
  return element
}

export const appendChildren = (parent, children) => {
  children.forEach(child => parent.appendChild(child))
}
