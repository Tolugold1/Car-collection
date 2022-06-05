import * as prototypes from './prototypes';

export const cars = (state = { errMess: null, cars: [] }, action) => {

   switch (action.type) {
      case prototypes.ADDCAR:
         return {...state, errMess: null, cars: action.payload }

      case prototypes.CARFAILED:
         return { ...state, errMess: action.payload, cars: [] };
         
      default:
         return (state)
   }
}