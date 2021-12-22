import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';

interface IFilter {
   filterNames(text: string): void
}

const Filter: React.FC<IFilter> = ({
   filterNames
}) => {

   const [text, setText] = useState("");

   return (
      <View>
         <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder={"type name of a pokemon e touch the filter"}
         />
         <ButtonComponent
            execFunction={() => filterNames(text)}
         >FILTER
         </ButtonComponent>
      </View>
   )
}

const styles = StyleSheet.create({
   input: {
      height: 40,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "yellow",
      backgroundColor: "#ffff99",
   },
});

export default Filter;