import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonActions from '../actions/pokemons';

import Filter from '../components/Filter';
import PokesList from "../components/PokesList"

const limit = 50;

const PageMultiple = (props: any) => {//!

   const [filteredPokesCharacteristics, setFilteredPokesCharacteristics] = useState<any[]>([]);//!
   const [isLoading, setIsLoading] = useState(false);

   const setDefaultAllPokes = useCallback(() => {
      setIsLoading(true)
      let requests = Array.from({ length: limit }, (_, i) => i + 1)
         .map(x => fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`));

      Promise.all(requests)
         .then(responses => Promise.all(responses.map(res => res.json())))
         .then(ps => {
            props.actions.setAllPokes(ps)
            setFilteredPokesCharacteristics(ps)
         })
         .catch((err) => console.log(err.message));
      setIsLoading(false)
   }, [])

   useEffect(() => {
      setDefaultAllPokes()
   }, [])

   const filterNames = (text: any) => {//!
      text = text.trim().toLowerCase();
      if (!text.length) {
         setFilteredPokesCharacteristics(props.allPokes)
         return;
      }
      setFilteredPokesCharacteristics(props.allPokes.filter((poke: any) => poke.name.indexOf(text) > -1)) //!
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
                  setPokemon={props.actions.setPokemon}
               />
         }
      </View>
   );
}

const mapStateToProps = (state: any) => ({ //!
   allPokes: state.pokes.allPokes,
   filteredPokes: state.pokes.filteredPokes
});

const ActionCreators = Object.assign(
   {},
   pokemonActions,
);
const mapDispatchToProps = (dispatch: any) => ({//!
   actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageMultiple)