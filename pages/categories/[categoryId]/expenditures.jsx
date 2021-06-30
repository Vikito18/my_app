import Button from "react-bootstrap/Button"
import ProgressBar from "react-bootstrap/ProgressBar"
import Link from "next/link"

import { useAppContext } from "@/components/AppContext"
import Page, { PageHeader, PageContent } from "@/components/Page"
import formatNumber from "@/formatNumber"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Expenditure from "@/components/Expenditure"
import { useCallback, useEffect, useState } from "react"
import Loader from "@/components/Loader"

const ExpendituresByCategoryPage = (props) => {
  const {
    router: {
      query: { categoryId },
    },
  } = props
  const [category, setCategory] = useState(null)
  const { fetchCategory, deleteExpenditure } = useAppContext()
  const handleDeleteExpenditure = useCallback(
    async (id) => {
      await deleteExpenditure({ id, categoryId })
      setCategory(await fetchCategory(categoryId))
    },
    [deleteExpenditure, fetchCategory, categoryId],
  )

  useEffect(() => {
    ;(async () => {
      setCategory(await fetchCategory(categoryId))
    })()
  }, [fetchCategory, categoryId])

  if (!category) {
    return (
      <Page>
        <PageHeader noBack>Dashboard</PageHeader>
        <PageContent>
          <Loader />
        </PageContent>
      </Page>
    )
  }

  const { id, name, budget, expenditures } = category
  const spent = expenditures.reduce((sum, { amount }) => sum + amount, 0)

  return (
    <Page>
      <PageHeader>{name}</PageHeader>
      <PageContent>
        <h2>Budget: {formatNumber(budget)}€</h2>
        <ProgressBar>
          <ProgressBar
            variant={spent / budget >= 0.8 ? "danger" : "success"}
            now={Math.round((spent / budget) * 100)}
          />
        </ProgressBar>
        <p className="mt-4">
          <Button
            variant="success"
            as={(props) => (
              <Link href={`/categories/${id}/add-expenditure`}>
                <a {...props}>Ajouter une dépense</a>
              </Link>
            )}
            block
          />
        </p>
        <Row>
          {expenditures.map((expenditure) => (
            <Col sm={12} lg key={expenditure.id} className="my-2">
              <Expenditure
                {...expenditure}
                category={category}
                onDelete={handleDeleteExpenditure}
              />
            </Col>
          ))}
        </Row>
      </PageContent>
    </Page>
  )
}

export default ExpendituresByCategoryPage
