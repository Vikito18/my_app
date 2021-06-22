import React, { useCallback } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

import formatNumber from "@/formatNumber"
import { useAppContext } from "@/components/AppContext"

const Expenditure = (props) => {
  const { description, amount, date, category } = props
  const { remove } = useAppContext()
  const handleDelete = useCallback(() => {
    remove(`categories.${category.slug}.expenditures`, date)
  }, [remove, date, category])

  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          {description}
          <span>{formatNumber(amount)}€</span>
        </Card.Title>
        <Card.Text className="d-flex justify-content-between align-items-center">
          <Button
            variant="link text-danger"
            size="sm p-0"
            onClick={handleDelete}
          >
            Supprimer
          </Button>
          <span className="small text-muted mr-1">
            {formatNumber(Math.round((amount / category.budget) * 10000) / 100)}
            %
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Expenditure
