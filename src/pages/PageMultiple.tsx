import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Pokes, RootState, ActionTypes } from "../../types";
import * as pokemonActions from '../actions/actions';

import Filter from '../components/Filter';
import PokesList from "../components/PokesList"

const limit = 50;

interface IPageMultiple {
   allPokes: Pokes,
   actions: any,
}

export type FilterNames = (text: string) => void;

const PageMultiple: React.FC<IPageMultiple> = ({
   actions, allPokes
}) => {

   const [filteredPokesCharacteristics, setFilteredPokesCharacteristics] = useState<any[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const setDefaultAllPokes = useCallback(() => {
      setIsLoading(true)
      let requests = Array.from({ length: limit }, (_, i) => i + 1)
         .map(x => fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`));

      Promise.all(requests)
         .then(responses => Promise.all(responses.map(res => res.json())))
         .then(ps => {
            actions.setAllPokes(ps)
            setFilteredPokesCharacteristics(ps)
         })
         .catch((err) => console.log(err.message));
      setIsLoading(false)
   }, [])

   useEffect(() => {
      setDefaultAllPokes()
   }, [])

   const filterNames: FilterNames = (text: string): void => {
      text = text.trim().toLowerCase();
      if (!text.length) {
         setFilteredPokesCharacteristics(allPokes)
         return;
      }
      setFilteredPokesCharacteristics(allPokes.filter((poke: any) => poke.name.indexOf(text) > -1))
   }

   return (
      <View>
         <Filter
            filterNames={filterNames}
         />
         {
            isLoading ?
               <ActivityIndicator
                  size="large"
                  color="yellow"
               /> :
               <PokesList
                  filteredPokesCharacteristics={filteredPokesCharacteristics}
                  setPokemon={actions.setPokemon}
               />
         }
      </View>
   );
}

const mapStateToProps = (state: RootState) => ({
   allPokes: state.pokes.allPokes,
});

const ActionCreators = Object.assign(
   {},
   pokemonActions,
);
const mapDispatchToProps = (dispatch: any) => ({
   actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageMultiple)