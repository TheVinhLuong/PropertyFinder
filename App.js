'use-strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyDetail from './PropertyDetail';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Detail: {screen: PropertyDetail},
});
export default App;


