import { TypeKeys } from "../constants";

interface SetPokemon {
   type: TypeKeys.POKEMON_SET,
   payload: null | any[]
}

interface SetAllPokes {
   type: TypeKeys.POKES_SET,
   payload: any[]
}

export type ActionTypes =
   | SetPokemon
   | SetAllPokes;

