import useSWR from 'swr';
import Money from './Money'
// import { getDailyData } from '../utils/extractSimpleData'

// import recipes from '../../data/utils/getItemRecipes'
// import getCraftingDetails from '../utils/getCraftingPrice'

const CraftingDetails = ({ id }) => {
  if (!recipes[id]) {
    return null;
  }

  const { data, error } = useSWR("/api/lua");
  const { daily } = data?.RealmData?.Finkle

  const recipe = recipes[id]
  // const craftingPrices = getCraftingDetails(recipe, daily)
  // const craftingRegeants = getCrafting
  console.log('craftingPrices')

  return (
    <div>
      {craftingPrices && <span>craft Min :  <Money value={craftingPrices.min} />
        craft avg: <Money value={craftingPrices.avg} /></span>}
        {}
    </div>

  )
}

export default CraftingDetails