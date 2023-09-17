import { getPageData } from '../../../sanity';
import { useEffect, useState } from 'react';
import { ComponentMapper } from './components/component-mapper';

const Home = () => {
  const [pageData, setPageData] = useState([]);

  const fetchPageData = async () => {
    const pageData = await getPageData();
    return pageData.length > 0 && pageData?.[0]?.components;
  };

  useEffect(() => {
    fetchPageData().then(data => {
      setPageData(data);
    });
  }, []);

  return (
    <>
      {pageData.length > 0 &&
        pageData.map(data => <ComponentMapper props={data} />)}
    </>
  );
};

export default Home;
