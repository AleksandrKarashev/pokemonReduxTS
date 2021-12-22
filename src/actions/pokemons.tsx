import { POKEMON_SET, POKES_SET } from '../constants';

export function setPokemon(poke: any[]) {//!
   return {
      type: POKEMON_SET,
      payload: poke
   }
}

export function setAllPokes(pokes: any[]) {//!
   return {
      type: POKES_SET,
      payload: pokes
   }
}





