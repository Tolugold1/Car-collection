import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../Shared/URL';

const CarCard = ({item, carFailed}) => {
  if (carFailed) {
    return(<div>{carFailed}</div>)
  } else if (item) {
    return(
      <div className='row'>
        {item.cars.map((car) => {
          return(
            <div className='col-12 col-md-4' key={car.id} >
              <Link to={`/Home/${car.id}`}>
                <div>
                  <Card className='cardimage' >
                    <CardImg width='100%' src={ baseUrl + car.image } alt='cars'></CardImg>
                  </Card>
                </div>
              </Link>
            </div>
          )
        })
      }
      </div>
    )
  } else {
    return(<div></div>)
  }
}

const Cars = (props) => {
  
  return(
    <div className='container carcollections' id="cars">
      <CarCard item={props.car} carFailed={props.carFailed}/>
    </div>
    
  )
}

export default Cars;