import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"

import api from "@/services/api"
import Loader from "@/components/Loader"
import { formatCategoriesWithExpenditures } from "@/services/dataFormatter"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = (props) => {
  const router = useRouter()
  const [session, setSession] = useState("loading")
  const addExpenditure = async ({ amount, description, categoryId }) => {
    return api.post(`/categories/${categoryId}/expenditures`, {
      amount,
      description,
    })
  }
  const deleteExpenditure = async ({ id, categoryId }) => {
    return api.delete(`/categories/${categoryId}/expenditures/${id}`)
  }
  const addCategory = async ({ budget, name }) => {
    return api.post("/categories", {
      budget,
      name,
    })
  }
  const deleteCategory = async (id) => {
    return api.delete(`/categories/${id}`)
  }
  const fetchCategory = async (id) => {
    const { data } = await api.get(`/categories/${id}`)

    return formatCategoriesWithExpenditures(data)[0]
  }
  const fetchCategories = async () => {
    const { data } = await api.get("/categories")

    return formatCategoriesWithExpenditures(data)
  }
  const fetchExpenditures = async (categoryId) => {
    const { data } = await api.get(`/categories/${categoryId}`)

    return data
  }
  const signIn = async ({ email, password }) => {
    const { data } = await api.post("/sign-in", { email, password })

    setSession({ userId: data })
    router.push("/")
  }
  const signUp = async ({ email, password }) => {
    const { data } = await api.post("/sign-up", { email, password })

    setSession({ userId: data })
    router.push("/")
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { data: userId } = await api.get("/session")

        if (!["/sign-in", "/sign-up"].includes(router.pathname)) {
          if (!userId) {
            router.push("/sign-up")
            setSession({ userId: null })

            return
          }

          setSession({ userId })

          return
        } else if (userId) {
          router.push("/")
          setSession({ userId })

          return
        }
      } catch (err) {
        //
      }

      setSession({ userId: null })
    })()
  }, [router])

  if (
    session === "loading" ||
    (!session.userId && !["/sign-in", "/sign-up"].includes(router.pathname))
  ) {
    return <Loader />
  }

  return (
    <AppContext.Provider
      value={{
        session,
        addExpenditure,
        deleteExpenditure,
        addCategory,
        deleteCategory,
        fetchCategory,
        fetchCategories,
        fetchExpenditures,
        signIn,
        signUp,
      }}
      {...props}
    />
  )
}
