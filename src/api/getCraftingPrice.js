import { getDailyData, getMeansData } from './extractSimpleData'
import items from '../../data/generatedDB/items.json'

export default (recipe, simpleStats) => {
  //  console.log('rec', recipe)

  return recipe.reagents.reduce((totals, reagentId, index) => {
    // console.log('reagentId', reagentId)
    const count = recipe.reagentsCount[index]

    const item = items[reagentId]
    let buyable, dailyData, meansData
    if (item.itemClass == 'Trade Goods' && item.additional == 'Other') {
      buyable = item.buy;
    } else {
      dailyData = simpleStats.daily[reagentId] && getDailyData(simpleStats.daily[reagentId])
      meansData = simpleStats.means[reagentId] && getMeansData(simpleStats.means[reagentId])
    }

    // console.log('reagentData', item)
    const reagent = {
      id: reagentId,
      name: item.name,
      quantity: item.quantity,
      min: buyable ? buyable : dailyData?.minBuyout || meansData?.avg7,
      avg: buyable ? buyable : dailyData?.dayAverage || meansData?.avg7,
      availHV: !!dailyData,
      buyable: !!buyable
    }

    return {
      min: totals.min + count * reagent.min,
      avg: totals.avg + count * reagent.avg,
      reagents: [
        reagent,
        ...totals.reagents
      ]
    }
  }, {
    min: 0,
    avg: 0,
    reagents: []
  })
}