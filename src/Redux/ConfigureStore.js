import { applyMiddleware, combineReducers, createStore} from 'redux';
import { cars } from './fetchCar';
import { carname } from './fetchCarCompanyName'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configStore = () => {
   const store = createStore(combineReducers({
      cars, carname
   }), applyMiddleware(thunk, logger ));

   return (store)
}