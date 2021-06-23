import React from "react"
import Button from "react-bootstrap/Button"
import ProgressBar from "react-bootstrap/ProgressBar"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Link from "next/link"

import formatNumber from "@/formatNumber"
import { useAppContext } from "@/components/AppContext"
import Page, { PageContent, PageHeader } from "@/components/Page"
import BudgetCategory from "@/components/BudgetCategory"

const DashboardPage = () => {
  const {
    state: { categories },
  } = useAppContext()

  const categoriesList = Object.values(categories)
  const spent = categoriesList
    .flatMap(({ expenditures }) => Object.values(expenditures))
    .reduce((sum, { amount }) => sum + amount, 0)
  const budget = categoriesList.reduce((sum, { budget }) => sum + budget, 0)

  return (
    <Page>
      <PageHeader noBack>Dashboard</PageHeader>
      <PageContent>
        {!categoriesList.length && (
          <p>
            <Button
              as={(props) => (
                <Link href="/add-category">
                  <a {...props}>Ajouter une catégorie</a>
                </Link>
              )}
              block
            />
          </p>
        )}
        <h2 className="h4 text-center d-flex justify-content-between">
          <span>💰 {formatNumber(budget)}€</span>
          <span>⬇ {formatNumber(spent)}€ </span>
          <span>⬆ {formatNumber(budget - spent)}€</span>
        </h2>
        <ProgressBar className="mt-2 mb-2">
          <ProgressBar
            variant={spent / budget >= 0.8 ? "danger" : "success"}
            now={Math.round((spent / budget) * 100)}
          />
        </ProgressBar>
        <Row>
          {categoriesList.map((category) => (
            <Col sm={12} lg key={category.name} className="my-2">
              <BudgetCategory {...category} />
            </Col>
          ))}
        </Row>
      </PageContent>
    </Page>
  )
}

export default DashboardPage
