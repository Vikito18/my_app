import { fr } from "yup-locales"
import { setLocale } from "yup"

import "@/index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { AppContextProvider } from "@/components/AppContext"

setLocale(fr)

const App = ({ Component, pageProps, ...props }) => (
  <AppContextProvider>
    <Component {...pageProps} {...props} />
  </AppContextProvider>
)

export default App
