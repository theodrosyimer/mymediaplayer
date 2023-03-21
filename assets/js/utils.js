export function batch(input, oneOrMoreFunction) {
  let fns = oneOrMoreFunction

  if (!Array.isArray(oneOrMoreFunction)) {
    fns = [oneOrMoreFunction]
  }

  fns.forEach((fn) => fn(input))
}

export function createBatchFunction(input, oneOrMoreFunction) {
  return () => batch(input, oneOrMoreFunction)
}
