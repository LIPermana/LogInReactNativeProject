/** @format */

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './components/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'LogIn',
      screen: 'tab.App', // this is a registered name for a screen
      icon: require('./src/LogIn.png'),
      title: 'LogIn',
      navigatorStyle: {
        navBarHidden: true
      }
    },
    {
      label: 'Biodata',
      screen: 'tab.Biodata',
      icon: require('./src/Biodata.png'),
      title: 'Biodata',
      navigatorStyle: {
        navBarHidden: true
      }
    }
  ]
});
