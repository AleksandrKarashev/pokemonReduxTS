import { TypeKeys, ActionTypes } from '../../types';

const initialState: null = null;

const pokemonReducer = (state = initialState, action: ActionTypes) => {
   switch (action.type) {
      case TypeKeys.POKEMON_SET:
         return action.payload === null ? null : { ...action.payload };
      default:
         return state;
   }
}
export default pokemonReducer;