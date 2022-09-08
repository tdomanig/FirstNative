import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { MyTabs } from './components/Navigationbar';
const Stack = createNativeStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
    
    <MyTabs></MyTabs>
    </NavigationContainer>
    
  );
}


