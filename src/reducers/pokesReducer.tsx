import { TypeKeys } from '../constants';

import { Actions } from '../actions/pokemons';

const initialState: any[] = []; //!

const pokesReducer = (state = initialState, action: Actions) => { //!
   switch (action.type) {
      case TypeKeys.POKES_SET:
         return {
            ...state,
            allPokes: action.payload.slice()
         }
      default:
         return state;
   }
}

export default pokesReducer;