import React, { useCallback, useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Link from "next/link"

import formatNumber from "@/formatNumber"
import { useAppContext } from "@/components/AppContext"
import Page, { PageHeader, PageContent } from "@/components/Page"
import Loader from "@/components/Loader"

const SettingsPage = () => {
  const [categories, setCategories] = useState(null)
  const { fetchCategories, deleteCategory } = useAppContext()

  useEffect(() => {
    ;(async () => {
      setCategories(await fetchCategories())
    })()
  }, [fetchCategories])

  const handleDeleteCategory = useCallback(
    async (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"))

      await deleteCategory(id)
      setCategories(await fetchCategories())
    },
    [deleteCategory, fetchCategories],
  )

  if (!categories) {
    return (
      <Page>
        <PageHeader>Paramètres</PageHeader>
        <PageContent>
          <Loader />
        </PageContent>
      </Page>
    )
  }

  return (
    <Page>
      <PageHeader>Paramètres</PageHeader>
      <PageContent>
        <h2 className="h4">Catégories</h2>
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
        {categories.map(({ id, name, budget }) => (
          <Card key={id}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>Budget: {formatNumber(budget)}€</Card.Text>
              <Button
                variant="outline-danger"
                data-id={id}
                size="sm"
                onClick={handleDeleteCategory}
              >
                Supprimer
              </Button>
            </Card.Body>
          </Card>
        ))}
      </PageContent>
    </Page>
  )
}
export default SettingsPage
