import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonActions from './src/actions/pokemons';

import PageIndividual from './src/pages/PageIndividual';
import PageMultiple from './src/pages/PageMultiple';

import Footer from './src/components/Footer';
import HeaderComponent from './src/components/HeaderComponent';

const image = { uri: "https://iili.io/7yJVa4.jpgttps://reactjs.org/logo-og.png" };

// interface IPageIndividual {
//    pokemon: null | any;
//    setPokemon: React.Dispatch<React.SetStateAction<any>>;
// }

// const PageIndividual: React.FC<IPageIndividual> = ({
//    pokemon, setPokemon
// }) => {

interface IMain {
   pokemon: null | any;
}

const Main: React.FC<IMain> = ({
   pokemon
}) => {
   return (
      <View style={styles.container}>
         <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{ opacity: 0.4 }}>
            <HeaderComponent />
            {
               (pokemon) ?
                  <PageIndividual /> :
                  <PageMultiple />
            }
         </ImageBackground>
         <Footer />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      // backgroundColor: "rgba(0, 0, 255, 0.5)",
   },
   image: {
      flex: 1,
      // justifyContent: 'center',
      // backgroundColor: "rgba(0, 0, 255, 0.5)",
      // // backgroundColor: "red"
   },
});

const mapStateToProps = (state: any) => ({ //!
   pokemon: state.pokemon,
});

const ActionCreators = Object.assign(
   {},
   pokemonActions,
);
const mapDispatchToProps = (dispatch: any) => ({//!
   actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)

