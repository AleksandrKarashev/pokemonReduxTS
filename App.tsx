import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import Main from './Main';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore()

const App = () => (
   <Provider store={store}>
      <StatusBar barStyle="dark-content" hidden />
      <SafeAreaView style={styles.safeAreaView}>
         <Main />
      </SafeAreaView>
   </Provider>
)

const styles = StyleSheet.create({
   safeAreaView: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "rgba(0, 0, 255, 0.5)",
   },
});

export default App;











