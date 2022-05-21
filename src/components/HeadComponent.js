import React, { useState } from 'react';
import { Jumbotron } from 'reactstrap';
import { CARCARD } from '../Shared/HomeCarCard';

const Header = () => {
  const [state] = useState(CARCARD)
  return(
    <div>
      <Jumbotron className='jumbotron'>
        <div className='row innerdiv'>
          <div className='col-12'>
            <h1 className='innertext'>{state.name}</h1>
          </div>
          <div className='col-12'>
            <h3 className='innertext1 d-flex justify-content-end'>{state.year}</h3>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}

export default Header;