import * as prototypes from './prototypes'

export const carname = (state = {errMess: null, carname: [] }, action) => {

   switch (action.type) {
      case prototypes.ADDCARNAME:
         return { ...state, errMess: null, carname: action.payload }

      case prototypes.FAILEDTOGETCARNAME:
         return { ...state, errMess: action.payload, carname: [] }
      default:
         return (state)
   }
}