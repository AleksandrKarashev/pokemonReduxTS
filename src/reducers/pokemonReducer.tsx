// import { TypeKeys } from '../constants';

// const initialState: null = null;

// const pokemonReducer = (state = initialState, action: any) => {
//    switch (action.type) {
//       case TypeKeys.POKEMON_SET:
//          return action.payload === null ? null : { ...action.payload };
//       default:
//          return state;
//    }
// }
// export default pokemonReducer;

import { TypeKeys } from '../constants';

import { Actions } from '../actions/pokemons';

const initialState: null = null;

const pokemonReducer = (state = initialState, action: Actions) => {
   switch (action.type) {
      case TypeKeys.POKEMON_SET:
         return action.payload === null ? null : { ...action.payload };
      default:
         return state;
   }
}
export default pokemonReducer;