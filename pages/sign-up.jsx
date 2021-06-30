import Button from "react-bootstrap/Button"
import { Formik } from "formik"
import * as Yup from "yup"

import Page, { PageHeader, PageContent } from "@/components/Page"
import FormField from "@/components/FormField"
import Link from "next/link"
import { useAppContext } from "@/components/AppContext"

const initialValues = { email: "", password: "" }
const validationSchema = Yup.object({
  email: Yup.string().email().label("E-mail").required(),
  password: Yup.string().min(8).max(255).label("Mot de passe"),
})

const SignUpPage = () => {
  const { signUp } = useAppContext()
  const handleFormSubmit = async ({ email, password }) => {
    await signUp({ email, password })
  }

  return (
    <Page>
      <PageHeader>S'inscrire</PageHeader>
      <PageContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, submitting, isValid }) => (
            <form onSubmit={handleSubmit}>
              <FormField label="E-mail" name="email" type="email" />
              <FormField label="Mot de passe" name="password" type="password" />
              <Button
                block
                className="mt-3"
                variant="success"
                disabled={submitting || !isValid}
                type="submit"
              >
                S'inscrire
              </Button>
            </form>
          )}
        </Formik>
        <p className="mt-4 d-flex justify-content-center">
          <Link href="/sign-in">Se connecter</Link>
        </p>
      </PageContent>
    </Page>
  )
}

export default SignUpPage
