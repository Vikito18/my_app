import { useCallback } from "react"
import Button from "react-bootstrap/Button"
import { Formik } from "formik"
import * as Yup from "yup"

import Page, { PageContent, PageHeader } from "@/components/Page"
import FormField from "@/components/FormField"
import { useAppContext } from "@/components/AppContext"

const validationSchema = Yup.object({
  name: Yup.string().max(50).required().label("Nom"),
  budget: Yup.number().integer().min(1).required().label("Budget"),
})

const initialValues = { name: "", budget: "" }

const AddCategory = () => {
  const { addCategory } = useAppContext()
  const handleFormSubmit = useCallback(
    async ({ name, budget }) => {
      await addCategory({ name, budget })

      history.back()
    },
    [addCategory],
  )

  return (
    <Page>
      <PageHeader>Ajouter catégorie</PageHeader>
      <PageContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, submitting, isValid }) => (
            <form onSubmit={handleSubmit}>
              <FormField
                name="name"
                type="text"
                placeholder="e.g Vacances"
                label="Nom"
              />
              <FormField
                name="budget"
                type="number"
                min={0}
                placeholder="0"
                label="Budget"
              />
              <Button
                variant="primary"
                type="submit"
                disabled={submitting || !isValid}
              >
                Ajouter
              </Button>
            </form>
          )}
        </Formik>
      </PageContent>
    </Page>
  )
}

export default AddCategory
