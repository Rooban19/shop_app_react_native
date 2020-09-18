import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/product';
import ShopNavigatior from './navigation/ShopNavigatior';
// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

 

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigatior />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
