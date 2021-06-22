const grab = (obj, path) =>
  path.split(".").reduce((found, key) => {
    if (key in found) {
      return found[key]
    }

    throw new Error(
      `No such path "${path}" for given object. ${JSON.stringify(obj)}`,
    )
  }, obj)

export default grab
