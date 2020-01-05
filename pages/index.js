// This is the Link API
import Link from 'next/link';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Index = () => {
  const { data, error } = useSWR('/api/lua', fetcher);
  console.log(data)

  return (
  <div>
    <p>Hello Next.js</p>
  </div>
);
}


export default Index;