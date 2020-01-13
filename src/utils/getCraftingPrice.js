import { getDailyData } from './extractSimpleData'
import items from '../../scripts/utils/getItems'

export default (recipe, dailyData) => {
  console.log('rec', recipe)

  return recipe.reagents.reduce((totals, reagentId, index) => {
    console.log('reagentId', reagentId)
    const count = recipe.reagentsCount[index]
    const reagentData = dailyData[reagentId] && getDailyData(dailyData[reagentId])
    const reagent = {
      name: reagentData.name
    }
    console.log('reagentData', reagentData, items[reagentId])
    console.log('data', items[3371], items[3372], items[8925])

    return {
      reagents,
      min: totals.min || 0 + count * reagentData.minBuyout,
      avg: totals.avg || 0 + count * reagentData.dayAverage,
    }
  }, {})
}