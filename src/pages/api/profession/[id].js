import recipes from '../../../../data/generatedDB/itemRecipes.json';
import _ from 'lodash'

export default (req, res) => {
  const {
    query: { id },
  } = req


  const d = _.pickBy(recipes, (val => val.prof == id))

  res.send(d)
}