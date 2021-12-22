import { ActionTypes, TypeKeys, Pokemon, Pokes } from "../../types";

export const setPokemon = (payload: Pokemon): ActionTypes => ({
   type: TypeKeys.POKEMON_SET, payload,
});

export const setAllPokes = (payload: Pokes): ActionTypes => ({
   type: TypeKeys.POKES_SET, payload,
});
