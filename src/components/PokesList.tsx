import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface IPokesList {
   filteredPokesCharacteristics: any[];
   setPokemon: React.Dispatch<React.SetStateAction<any>>;
}

const PokesList: React.FC<IPokesList> = ({
   filteredPokesCharacteristics, setPokemon
}) => {

   return (
      <ScrollView>
         <View style={styles.view}>
            {
               filteredPokesCharacteristics.map((poke: any) => {
                  return (
                     <View
                        key={Math.random()}
                        style={styles.toCenter}
                     >
                        <TouchableOpacity
                           style={styles.touchableOpacity}
                           onPress={() => setPokemon(poke)}
                        >
                           <Text style={styles.text}>{poke.name}</Text>

                           <Image
                              style={styles.tinyLogo}
                              source={{
                                 uri: `${poke.sprites.other.home.front_default}`,
                              }}
                           />
                        </TouchableOpacity>

                     </View>
                  )
               })
            }
         </View >
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   toCenter: {
      alignItems: "center",
      padding: 10,
   },
   tinyLogo: {
      width: 65,
      height: 65,
   },
   text: {
      marginBottom: 2,
      fontSize: 15,
      fontWeight: "bold",
      color: "rgb(12, 3, 38)",
   },
   touchableOpacity: {
      alignItems: "center",
      flexWrap: 'wrap',
   },
   view: {
      justifyContent: 'space-evenly',
      flexDirection: "row",
      flexWrap: 'wrap',
      marginBottom: 4,
      padding: 10,
      alignItems: 'center',
   }
});

export default PokesList;