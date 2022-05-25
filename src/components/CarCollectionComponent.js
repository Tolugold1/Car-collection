import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { CARS } from '../Shared/carCollections';
import { Link } from 'react-router-dom';

const Car = CARS.map((car) => {
  return(
    <div className=' col-12 col-md-4' key={car.id}>
      <Link to={`/Home/${car.id}`}>
        <div className='container'>
          <Card className='cardimage' >
            <CardImg width='100%' src={ car.image } alt='cars'></CardImg>
          </Card>
        </div>
      </Link>
    </div>
  )
})

const Cars = () => {
  return(
    <div className='container carcollections'>
      <div className='row'>
        { Car }
      </div>
      </div>
    
  )
}

export default Cars;