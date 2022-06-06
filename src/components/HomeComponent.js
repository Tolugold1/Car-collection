import React from 'react';
import Company from './CompanyComponent';
import History from './HistoryComponent';
import Cars from './CarCollectionComponent';
import Developer from './developerDetails';

const Home = (props) => {
  return(
    <div>
      <Company carname={props.carname} failedTogetCarName={props.failedTogetCarName} carnameLoading={props.carnameLoading}/>
      <History />
      <Cars car={props.car} carFailed={props.carFailed} carLoading={props.carLoading}/>
      <Developer />
    </div>
  )
}

export default Home;