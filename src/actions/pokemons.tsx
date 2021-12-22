///import { POKEMON_SET, POKES_SET } from '../constants';
import { TypeKeys } from "../constants";
// export function setPokemon(poke: null | any[]) {//!
//    return {
//       type: TypeKeys.POKEMON_SET,
//       payload: poke
//    }
// }

// export function setAllPokes(pokes: any[]) {//!
//    return {
//       type: TypeKeys.POKES_SET,
//       payload: pokes
//    }
// }

import { Action } from 'redux';


interface SetPokemon {
   type: TypeKeys.POKEMON_SET,
   payload: null | any[]
}

interface SetAllPokes {
   type: TypeKeys.POKES_SET,
   payload: any[]
}

export type Actions =
   | SetPokemon
   | SetAllPokes;

export const setPokemon = (payload: null | any[]): SetPokemon => ({
   type: TypeKeys.POKEMON_SET, payload,
});

export const setAllPokes = (payload: any[]): SetAllPokes => ({
   type: TypeKeys.POKES_SET, payload,
});

