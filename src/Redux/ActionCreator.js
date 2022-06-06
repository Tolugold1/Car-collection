import * as prototypes from './prototypes';
import {baseUrl} from '../Shared/URL';

export const fetchCARS = () => async (dispatch) => {
  dispatch(carLoading(true))
  return fetch(baseUrl + 'cars')
    .then(response => {
      if (response.ok) {
        return (response)
      } else {
        const error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error
      }
    },
    error => {
      const errMess = new Error(error.message);
      throw errMess;
    }
    )
    .then(response => response.json())
    .then(cars => dispatch(addcar(cars)))
    .catch(error => {dispatch(car_failed(error.message))})
    
}

export const addcar = (cars) => ({
   type: prototypes.ADDCAR,
   payload: cars
})

export const car_failed = (errMess) => ({
   type: prototypes.CARFAILED,
   payload: errMess
})

export const carLoading = () => ({
  type: prototypes.LOADINGCAR
})

export const fetchCarName = () => async (dispatch) => {
  dispatch(carnameLoading(true))
  return fetch(baseUrl + 'carname')
    .then(response => {
      if (response.ok) {
        return (response)
      } else {
        const error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error
      }
    },
    error => {
      const errMess = new Error(error.message);
      throw errMess;
    }
    )
    .then(response => response.json())
    .then(carname => dispatch(addCarName(carname)))
    .catch(error => {dispatch(carNameFailed(error.message))})
}

export const addCarName = (carname) => ({
  type: prototypes.ADDCARNAME,
  payload: carname
})

export const carNameFailed = (errMess)=> ({
  type: prototypes.FAILEDTOGETCARNAME,
  payload: errMess
})

export const carnameLoading = () => ({
  type: prototypes.LOADINGCARCOMPANYNAME
})