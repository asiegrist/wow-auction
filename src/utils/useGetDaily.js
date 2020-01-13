import { useState, useEffect } from 'react';
import axios from 'axios'

let dailyData = {};
// The hook is just a simple function which we can export
export default () => {
  const [daily, setDaily] = useState()

  useEffect(() => {
    console.log('useEffect')
    const fetchData = async () => {
      const result = await axios('/api/lua');
      dailyData = result.data.RealmData.Finkle;
      setDaily(result.data.RealmData.Finkle);
    };

    fetchData();
  }, []);

  return dailyData;
}