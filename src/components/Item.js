// // import useSWR from 'swr';
// import useGetDaily from '../utils/useGetDaily'
// import Money from './Money'
// import CraftingDetails from './CraftingDetails'

// import { getDailyData } from '../utils/extractSimpleData'
// // import items from '../../scripts/utils/getItems'
// // import spells from '../../data/utils/getSpells'

// const Item = ({ id }) => {
//   const item = items[id]

//   if (!item ) {
//     console.log('Not found', id)
//     return <div>{id}</div>
//   }

//   // const { data, error } = useSWR("/api/lua");
//   const { daily = {} } = useGetDaily()
//   console.log('item', daily[id])

//   const dailyData = daily[id] && getDailyData(daily[id])
//   console.log('dailyData', dailyData)


//   return <div>
//     {id} {item.name} => {item.itemClass} : {item.additional}  =>
//     <Money value={dailyData?.dayAverage} />
//     {/* <CraftingDetails id={id} /> */}
//   </div>
// }

// export default Item