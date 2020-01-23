import Item from '../components/Item'
import Money from '../components/Money'
import { useState, useEffect } from 'react';
import axios from 'axios'

import MaterialTable from 'material-table';

const AlchemyKnown = [118, 858, 2454, 5997, 3382, 2458, 5631, 4596, 2456, 2455, 3383, 5996,
  6372, 929, 3384, 3385, 3388, 3389, 6373, 3390, 5634, 3391, 1710, 3827, 6049, 3823, 3824,
  5633, 3825, 3826, 8949, 6050, 6052, 8951, 10592, 6149, 8956, 12190, 3928, 9144, 18294,
  9154, 9155, 9179, 9206, 9187, 9224, 9264, 9233, 13442, 13443, 13445, 13446, 13455, 13452,
  13423, 6370, 6371, 9210]

const Index = () => {
  const [data, setData] = useState()

  useEffect(() => {
    console.log('useEffect')
    const fetchData = async () => {
      const result = await axios('/api/stats/alchemy');
      console.log('result', result)
      setData(result.data);
    };

    fetchData();
  }, []);

  console.log('data', data)

  return (
    <MaterialTable
      title="Alchemy Stats"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'auction.minBuyout', field: 'auction.minBuyout', render: item => <Money value={item.auction.minBuyout} /> },
        { title: 'auction.dayAverage', field: 'auction.dayAverage', render: item => <Money value={item.auction.dayAverage} /> },
        { title: 'craft.min', field: 'craft.min', render: item => <Money value={item.craft.min} /> },
        { title: 'craft.avg', field: 'craft.avg', render: item => <Money value={item.craft.avg} /> },
        { title: 'analysis.min', field: 'analysis.min', defaultSort: 'desc', render: item => <Money value={item.analysis.min} /> },
        { title: 'analysis.avg', field: 'analysis.avg', render: item => <Money value={item.analysis.avg} /> },
      ]}
      data={data}
      options={{ pageSize: 10 }}
      detailPanel={item => {
        return item.craft.reagents.map(reagent =>
          <div key={reagent.id}>
          {
            reagent.availHV && <img src="icon/hv.jpg" />
          }
            <span>{reagent.name}</span>
            <span>{reagent.quantity}</span>
            <span>{reagent.name}</span>
          </div>
        )
      }
      }
    />
  );
}


export default Index;