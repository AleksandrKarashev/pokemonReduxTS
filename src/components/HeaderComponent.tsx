import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = () => {

   return (
      <View style={styles.header}>
         <Text style={styles.text}>Pokemon Redux TS</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      paddingTop: 20,
      paddingBottom: 10,
   },
   text: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 25,
      fontWeight: "bold",
      color: "yellow",
   }
});

export default HeaderComponent;