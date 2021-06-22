const put = (obj, path, value) => {
  const slices = path.split(".")
  const parentPath = slices.slice(0, -1)
  const [self] = slices.slice(-1)

  const parent = parentPath.reduce((found, key) => {
    if (key in found) {
      return found[key]
    }

    throw new Error(
      `No such path "${path}" for given object. ${JSON.stringify(obj)}`,
    )
  }, obj)

  parent[self] = value
}

export default put
