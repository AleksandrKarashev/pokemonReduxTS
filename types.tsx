export enum TypeKeys {
   POKEMON_SET = "POKEMON_SET",
   POKES_SET = "POKES_SET",
}

export type Pokemon = null | any;
export type Pokes = any;

interface SetPokemon {
   type: TypeKeys.POKEMON_SET,
   payload: Pokemon
}

interface SetAllPokes {
   type: TypeKeys.POKES_SET,
   payload: Pokes
}

export type ActionTypes =
   | SetPokemon
   | SetAllPokes;

export interface RootState {
   pokemon: Pokemon;
   pokes: Pokes;
}