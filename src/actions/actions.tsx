import { TypeKeys } from "../constants";

import { ActionTypes } from "./actionTypes";

export const setPokemon = (payload: null | any[]): ActionTypes => ({
   type: TypeKeys.POKEMON_SET, payload,
});

export const setAllPokes = (payload: any[]): ActionTypes => ({
   type: TypeKeys.POKES_SET, payload,
});
