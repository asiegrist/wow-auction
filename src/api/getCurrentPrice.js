import { getDailyData, getMeansData } from './extractSimpleData'

export default (recipe, simpleStats) => {
  // console.log('rec', recipe)

  const dailyData = simpleStats.daily[recipe.id] && getDailyData(simpleStats.daily[recipe.id])
  const meansData = simpleStats.means[recipe.id] && getMeansData(simpleStats.means[recipe.id])

  // console.log('dailyData', dailyData)
  // console.log('meansData', meansData)
  return {
    dayAverage: dailyData?.dayAverage,
    minBuyout: dailyData?.minBuyout,
    avg3: meansData?.avg3,
    avg7: meansData?.avg7,
    availHV: !!dailyData,
  }
}