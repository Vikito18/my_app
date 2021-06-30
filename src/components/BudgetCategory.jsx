import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ProgressBar from "react-bootstrap/ProgressBar"
import Link from "next/link"

import formatNumber from "@/formatNumber"

const BudgetCategory = (props) => {
  const { name, budget, id, expenditures } = props
  const spent = Object.values(expenditures).reduce(
    (xs, { amount }) => xs + amount,
    0,
  )

  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          {name}
          <span>{formatNumber(budget)}€</span>
        </Card.Title>
        <Card.Text className="d-flex justify-content-between">
          <span className="text-info">Dépensé : {formatNumber(spent)}€</span>
          <span
            className={`text-${spent / budget >= 0.8 ? "danger" : "success"}`}
          >
            Restant : {formatNumber(budget - spent)}€
          </span>
        </Card.Text>
        <ProgressBar>
          <ProgressBar
            variant={spent / budget >= 0.8 ? "danger" : "success"}
            now={Math.round((spent / budget) * 100)}
          />
        </ProgressBar>
        <p className="d-flex justify-content-between">
          <Button
            variant="success"
            size="sm"
            className="mt-3"
            as={(props) => (
              <Link href={`/categories/${id}/add-expenditure`}>
                <a {...props}></a>
              </Link>
            )}
          >
            Ajouter une dépense
          </Button>
          <Button
            variant="link"
            size="sm"
            className="mt-3"
            as={(props) => (
              <Link href={`/categories/${id}/expenditures`}>
                <a {...props}></a>
              </Link>
            )}
          >
            Voir les dépenses
          </Button>
        </p>
      </Card.Body>
    </Card>
  )
}

export default BudgetCategory
