import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RootState, Pokemon } from "./types";
import * as pokemonActions from './src/actions/actions';


import PageIndividual from './src/pages/PageIndividual';
import PageMultiple from './src/pages/PageMultiple';

import Footer from './src/components/Footer';
import HeaderComponent from './src/components/HeaderComponent';

const image = { uri: "https://iili.io/7yJVa4.jpgttps://reactjs.org/logo-og.png" };

interface IMain {
   pokemon: Pokemon
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
   },
   image: {
      flex: 1,
   },
});

const mapStateToProps = (state: RootState) => ({
   pokemon: state.pokemon,
});

const ActionCreators = Object.assign(
   {},
   pokemonActions,
);
const mapDispatchToProps = (dispatch: any) => ({
   actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)

