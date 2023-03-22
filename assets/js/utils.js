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
