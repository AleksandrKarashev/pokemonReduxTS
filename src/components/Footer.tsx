import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {

   return (
      <View style={styles.footer}>
         <Text style={styles.text}>Developer: Aleksandr Karashev</Text>
         <Text style={styles.text}>Email: atsbyy@gmail.com</Text>
         <Text style={styles.text}>Whatsapp: 5521998797313</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   footer: {
      padding: 10,
      flexDirection: 'column',
      backgroundColor: "rgba(8, 22, 131, 0.8)",
   },
   text: {
      textAlign: 'center',
      fontWeight: "bold",
      color: "yellow",
   }
});

export default Footer;