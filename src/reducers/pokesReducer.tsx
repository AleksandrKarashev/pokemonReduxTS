import { POKES_SET } from '../constants';

const initialState: any[] = []; //!

const pokesReducer = (state = initialState, action: any) => { //!
   switch (action.type) {
      case POKES_SET:
         return {
            ...state,
            allPokes: action.payload.slice()
         }
      default:
         return state;
   }
}

export default pokesReducer;