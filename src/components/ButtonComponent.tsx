import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IButtonComponent {
   execFunction(text?: any): void
}

const ButtonComponent: React.FC<IButtonComponent> = ({
   execFunction, children
}) => {
   return (
      <TouchableOpacity
         style={styles.button}
         onPress={execFunction}
      >
         <Text
            style={styles.textButton}
         >{children}
         </Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   button: {
      margin: 20,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "blue",
      backgroundColor: "#00BFFF",
   },
   textButton: {
      textAlign: 'center',
      fontSize: 20,
      letterSpacing: 3,
      fontWeight: "bold",
      color: "darkblue",
   },
})

export default ButtonComponent;