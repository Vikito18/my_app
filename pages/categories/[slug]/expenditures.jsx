import Button from "react-bootstrap/Button"
import ProgressBar from "react-bootstrap/ProgressBar"
import Link from "next/link"

import { useAppContext } from "@/components/AppContext"
import Page, { PageHeader, PageContent } from "@/components/Page"
import formatNumber from "@/formatNumber"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Expenditure from "@/components/Expenditure"

const ExpendituresByCategoryPage = (props) => {
  const {
    router: {
      query: { slug },
    },
  } = props
  const {
    state: {
      categories: { [slug]: category },
    },
  } = useAppContext()

  if (!category) {
    return null
  }

  const { name, budget, expenditures } = category
  const expendituresList = Object.entries(expenditures)
  const spent = expendituresList.reduce(
    (sum, [, { amount }]) => sum + amount,
    0,
  )

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
              <Link href={`/categories/${category.slug}/add-expenditure`}>
                <a {...props}>Ajouter une dépense</a>
              </Link>
            )}
            block
          />
        </p>
        <Row>
          {expendituresList.map(([date, expenditure]) => (
            <Col sm={12} lg key={date} className="my-2">
              <Expenditure {...expenditure} date={date} category={category} />
            </Col>
          ))}
        </Row>
      </PageContent>
    </Page>
  )
}

export default ExpendituresByCategoryPage
