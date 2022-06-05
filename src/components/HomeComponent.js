import React from 'react';
import Company from './CompanyComponent';
import History from './HistoryComponent';
import Cars from './CarCollectionComponent'

const Home = (props) => {
  return(
    <div>
      <Company carname={props.carname} failedTogetCarName={props.failedTogetCarName} />
      <History />
      <Cars car={props.car}/>
    </div>
  )
}

export default Home;