import * as prototypes from './prototypes';

export const cars = (state = {Loading: true, errMess: null, cars: [] }, action) => {

   switch (action.type) {
      case prototypes.ADDCAR:
         return {...state, Loading: false,  errMess: null, cars: action.payload }

      case prototypes.CARFAILED:
         return { ...state, Loading: false,  errMess: action.payload, cars: [] };
      
      case prototypes.LOADINGCAR:
         return { ...state, Loading: true, errMess: null, cars: [] };
         
      default:
         return (state)
   }
}