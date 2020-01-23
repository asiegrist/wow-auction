import _ from 'lodash'
import itemRecipes from '../../../../data/generatedDB/itemRecipes.json';
import getSimpleStats from '../../../api/getSimpleStats'

import getCraftingPrice from '../../../api/getCraftingPrice'
import getCurrentPrice from '../../../api/getCurrentPrice'

export default async (req, res) => {
  const {
    query: { id },
  } = req

  const simpleStats = await getSimpleStats()
  const recipes = _.pickBy(itemRecipes, (recipe => recipe.prof == id))
  const sample = _.pickBy(recipes, ((value, key) => key < 5000))
  console.log(Object.keys(sample).length)

  const test = Object.values(recipes)
    .map(recipe => ({
      id: recipe.id,
      name: recipe.name,
      craft: getCraftingPrice(recipe, simpleStats),
      auction: getCurrentPrice(recipe, simpleStats)
    }))
    .map(recipe => {
      const min = recipe.auction.availHV ? recipe.auction.minBuyout - recipe.craft.min : recipe.auction.avg3 - recipe.craft.min
      const avg = recipe.auction.availHV ? recipe.auction.dayAverage - recipe.craft.avg : recipe.auction.avg3 - recipe.craft.avg
      
      return ({
      ...recipe,
      analysis: {
        min: min*.95,
        avg: avg*.95,
      }
    })
  })

  res.send(test)
}