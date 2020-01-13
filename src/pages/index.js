// This is the Link API
// import Link from 'next/link';
// import 'semantic-ui-css/semantic.min.css'

import Item from '../components/Item'
import useSWR from 'swr';
import useGetDaily from '../utils/useGetDaily'
import { Flag, Segment } from 'semantic-ui-react'

const Index = () => {
  // const { data, error } = useSWR("/api/lua");
  // const data = useGetDaily()
// console.log('data', data)
//   if (!data) return <div>Loading...</div>

//   const { daily } = data

  return (
      <div className="test">
        <p>Hello Next.js</p>
        <Flag name='ae' />
        {/* {
      Object.keys(daily).map(itemId => <Item key={itemId} id={itemId} daily={getDailyData(daily[itemId])}/>)
    } */}
        {/* <Item id={118} daily={daily}></Item> */}
        {/* <Item id={14046}></Item>
        <Item id={14047}></Item>
        <Item id={14048}></Item> */}
      </div>
  );
}


export default Index;