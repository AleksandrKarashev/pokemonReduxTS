import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Main from './Main';

import configureStore from './src/store/configureStore';

const store = configureStore()

const App: React.FC = () => (
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











