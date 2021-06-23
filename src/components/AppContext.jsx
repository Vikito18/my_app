import { createContext, useContext, useEffect, useState } from "react"
import deepmerge from "deepmerge"
import grab from "@/grab"
import put from "@/put"

const initialState = {
  categories: {},
}

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const doNotMergeArray = (a, b) => b

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const update = (newState, mergeArray) =>
    setState((prevState) => {
      const savedState = deepmerge(
        prevState,
        newState,
        mergeArray
          ? null
          : {
              arrayMerge: doNotMergeArray,
            },
      )

      localStorage.setItem("appContext", JSON.stringify(savedState))

      return savedState
    })
  const remove = (target, keyToRemove) =>
    setState((prevState) => {
      // eslint-disable-next-line no-unused-vars
      const { [keyToRemove]: _, ...parent } = grab(prevState, target)

      put(prevState, target, parent)

      localStorage.setItem("appContext", JSON.stringify(prevState))

      return { ...prevState }
    })
  const reset = () => setState(initialState)

  useEffect(() => {
    const rawStore = localStorage.getItem("appContext")

    if (!rawStore) {
      update(initialState)
    }

    setState(JSON.parse(rawStore))
  }, [])

  return (
    <AppContext.Provider
      value={{
        state,
        update,
        remove,
        reset,
      }}
      {...props}
    />
  )
}
