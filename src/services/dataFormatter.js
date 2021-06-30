export const formatCategoriesWithExpenditures = (data) =>
  data.reduce((categories, row) => {
    const category = categories.find(({ id }) => row.categoryId === id)

    if (category && row.expenditureId) {
      category.expenditures = [
        ...category.expenditures,
        {
          id: row.expenditureId,
          description: row.expenditureDescription,
          amount: row.expenditureAmount,
        },
      ]

      return categories
    }

    return [
      ...categories,
      {
        id: row.categoryId,
        name: row.categoryName,
        budget: row.categoryBudget,
        expenditures: row.expenditureId
          ? [
              {
                id: row.expenditureId,
                description: row.expenditureDescription,
                amount: row.expenditureAmount,
              },
            ]
          : [],
      },
    ]
  }, [])
