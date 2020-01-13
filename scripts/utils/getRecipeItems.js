console.log('formatRecipe')

const mapper = (recipes) => {
  const keys = Object.keys(recipes)

  return keys.reduce((recipeRef, recipeId) => {
    const recipe = recipes[recipeId]

    recipeRef[recipeId] = {
      id: recipeId,
      createdItemId: recipe[0],
      name: recipe[1]
    }

    return recipeRef
  }, {})
}

module.exports = mapper