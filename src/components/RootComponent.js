import React from 'react';
import Headroom from 'react-headroom';
import Header from './HeadComponent';
import HeaderNav from './HeaderNavComponent'
import Home from './HomeComponent';
import Footer from './footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import GalleryDisplay from './IndividualGallery';
import Cars from './CarCollectionComponent';
import { fetchCARS, fetchCarName } from '../Redux/ActionCreator';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    cars: state.cars,
    carname: state.carname
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchCARS: () => dispatch(fetchCARS()),
  fetchCarName: () => dispatch(fetchCarName())
});


class Root extends React.Component {

  componentDidMount() {
    this.props.fetchCARS();
    this.props.fetchCarName();
  }
  
  render() {
  
    const CarGallery = ({match}) => {
      return(
        <GalleryDisplay selectedCar={this.props.cars.cars.filter((carImage) => carImage._id === match.params.carId)[0]}
        loading = {this.props.cars.Loading}
        carFailed = {this.props.cars.errMess}
        />
      )
    }

    return(
      <div>
        <Headroom>
          <HeaderNav />
        </Headroom>
        <Header />
          <Switch>
            <Route exact path='/Home' component={() => <Home car={this.props.cars} carFailed={this.props.cars.errMess} carname={this.props.carname} failedTogetCarName = {this.props.carname.errMess} carLoading={this.props.cars.Loading} carnameLoading={this.props.carname.Loading}/>}/>
            <Route path='/Home/:carId' component={CarGallery}/>
            <Route path='/Cars' component={() => <Cars car={this.props.cars} carFailed = {this.props.cars.errMess} carLoading={this.props.cars.Loading}/>} />
            <Route path='/Cars/:carId' component={CarGallery}/>
            <Redirect exact to='/Home' />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));