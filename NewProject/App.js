/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * 
 * 
 */

import React from 'react';
import type {Node} from 'react';
import LoginScreen from './UI/Ecran_Login'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Producator from './UI/Producator.js'
import Consumator from './UI/Consumator.js'
import LogIn_Screen from './UI/Ecran_Login.js';

//------------------------------------------------------

/*
const Section = ({children, title}): Node => {
  
  const isDarkMode = useColorScheme() === 'dark';
  return ( 
    <View style={styles.sectionContainer}>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return LogIn_Screen();
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});



*/
//------------------------------------


export default function App() {
    return (
      <LogIn_Screen/>
    )
}

//export default App;
