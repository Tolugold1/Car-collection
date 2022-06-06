import * as prototypes from './prototypes'

export const carname = (state = {Loading: true, errMess: null, carname: [] }, action) => {

   switch (action.type) {
      case prototypes.ADDCARNAME:
         return { ...state, Loading: false, errMess: null, carname: action.payload }

      case prototypes.FAILEDTOGETCARNAME:
         return { ...state, Loading: false, errMess: action.payload, carname: [] }
      
      case prototypes.LOADINGCARCOMPANYNAME:
         return { ...state, Loading: true, errMess: null, cars: [] };

      default:
         return (state)
   }
}