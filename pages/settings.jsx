import React, { useCallback } from "react"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card"
import Link from "next/link"

import formatNumber from "@/formatNumber"
import { useAppContext } from "@/components/AppContext"
import Page, { PageHeader, PageContent } from "@/components/Page"

const SettingsPage = () => {
  const {
    reset,
    remove,
    state: { categories },
  } = useAppContext()
  const categoriesList = Object.entries(categories)
  const handleDeleteSavedData = useCallback(() => {
    const key = prompt(
      'Entrer le mot "SUPPRIMER" pour confirmer la suppression.',
    )

    if (key !== "SUPPRIMER") {
      return
    }

    reset()
  }, [reset])
  const handleDeleteCategory = useCallback(
    (e) => {
      const slug = Number(e.currentTarget.getAttribute("data-slug"))

      remove("categories", slug)
    },
    [remove],
  )

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
        {categoriesList.map(([slug, category]) => (
          <Card key={category.name}>
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              <Card.Text>Budget: {formatNumber(category.budget)}€</Card.Text>
              <Button
                variant="outline-danger"
                data-slug={slug}
                size="sm"
                onClick={handleDeleteCategory}
              >
                Supprimer
              </Button>
            </Card.Body>
          </Card>
        ))}
        <Alert variant="danger" className="mt-3">
          <h2 className="h4">Zone Danger</h2>
          <Button variant="danger" block onClick={handleDeleteSavedData}>
            Supprimer la sauvegarde
          </Button>
        </Alert>
      </PageContent>
    </Page>
  )
}
export default SettingsPage
