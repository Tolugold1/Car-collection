import React from 'react';
import Company from './CompanyComponent';
import History from './HistoryComponent';
import Cars from './CarCollectionComponent';
import Developer from './developerDetails';

const Home = (props) => {
  return(
    <div>
      <Company carname={props.carname} failedTogetCarName={props.failedTogetCarName} />
      <History />
      <Cars car={props.car}/>
      <Developer />
    </div>
  )
}

export default Home;