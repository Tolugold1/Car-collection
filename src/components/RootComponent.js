import React from 'react';
import Headroom from 'react-headroom';
import Header from './HeadComponent';
import HeaderNav from './HeaderNavComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARS } from '../Shared/carCollections';
import GalleryDisplay from './IndividualGallery';
import Cars from './CarCollectionComponent';

class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = { Car: CARS}
  }

  render() {

    const CarGallery = ({match}) => {
      return(
        <GalleryDisplay selectedCar={this.state.Car.filter((carImage) => carImage.id === parseInt(match.params.carId, 10))[0]}/>
      )
    }

    return(
      <div>
        <Headroom>
          <HeaderNav />
        </Headroom>
        <Header />
        <Switch>
          <Route exact path='/Home' component={() => <Home />}/>
          <Route path='/Home/:carId' component={CarGallery}/>
          <Route path='/Cars' component={() => <Cars />} />
          <Route path='/Cars/:carId' component={CarGallery}/>
          <Redirect exact to='/Home' />
        </Switch>
      </div>
    )
  }
}

export default Root;