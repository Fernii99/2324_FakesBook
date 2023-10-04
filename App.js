import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/header';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content">

    </StatusBar>
      <NavigationContainer>
        <Header/>
      </NavigationContainer>  
    </>
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
