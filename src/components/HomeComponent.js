import React from 'react';

import Company from './CompanyComponent';
import History from './HistoryComponent';
import Cars from './CarCollectionComponent'

const Home = () => {
  return(
    <div>
      <Company />
      <History />
      <Cars />
    </div>
  )
}

export default Home;