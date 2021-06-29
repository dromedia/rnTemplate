import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {SplashScreen} from './pages';
import {persistor, store} from './redux/store';
import Router from './router';
import {Provider} from 'react-redux';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
