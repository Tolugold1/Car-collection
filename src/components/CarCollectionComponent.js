import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../Shared/URL';
import Loading from './Loading'

const CarCard = ({item, carFailed, carLoading}) => {

  if (carLoading) {
    return(<div><Loading /></div>)
  } else if (carFailed) {
    return(<div>{carFailed}</div>)
  } else if (item) {
    return(
      <div className='row'>
        {item.cars.map((car) => {
          return(
            <div className='col-12 col-md-4' key={car._id} >
              <Link to={`/Home/${car._id}`}>
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
      <CarCard item={props.car} carFailed={props.carFailed} carLoading={props.carLoading}/>
    </div>
    
  )
}

export default Cars;