
import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './Screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { CommunityTabNavigator } from './components/CommunityTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: CommunityTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);