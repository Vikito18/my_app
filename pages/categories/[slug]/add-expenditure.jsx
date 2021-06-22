import Button from "react-bootstrap/Button"
import { Formik } from "formik"
import * as Yup from "yup"

import { useAppContext } from "@/components/AppContext"
import FormField from "@/components/FormField"
import Page from "@/components/Page"
import { PageHeader } from "@/components/Page"
import { PageContent } from "@/components/Page"
import { useCallback } from "react"

const validationSchema = Yup.object({
  description: Yup.string().required().label("Description"),
  amount: Yup.number().positive().required().label("Montant"),
})
const initialValues = {
  amount: "",
  description: "",
}

const AddExpenditurePage = (props) => {
  const {
    router: {
      query: { slug },
    },
  } = props
  const {
    update,
    state: {
      categories: { [slug]: category },
    },
  } = useAppContext()
  const handleFormSubmit = useCallback(
    ({ amount, description }) => {
      update(
        {
          categories: {
            [slug]: {
              ...category,
              expenditures: {
                [new Date().toISOString()]: { amount, description },
              },
            },
          },
        },
        true,
      )
      history.back()
    },
    [update, category, slug],
  )

  return (
    <Page>
      <PageHeader>Ajouter une dépense</PageHeader>
      <PageContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, submitting, isValid }) => (
            <form onSubmit={handleSubmit}>
              <FormField
                label="Description"
                name="description"
                type="text"
                placeholder="e.g Papier toilette"
              />
              <FormField
                label="Montant"
                name="amount"
                type="number"
                min="1"
                placeholder="0"
              />
              <Button
                block
                className="mt-3"
                variant="success"
                disabled={submitting || !isValid}
                type="submit"
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

export default AddExpenditurePage
