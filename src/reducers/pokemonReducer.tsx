import { POKEMON_SET } from '../constants';

const initialState = null;
const pokemonReducer = (state = initialState, action) => {
   switch (action.type) {
      case POKEMON_SET:
         return action.payload === null ? null : { ...action.payload };
      default:
         return state;
   }
}
export default pokemonReducer;