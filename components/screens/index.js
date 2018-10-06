import { Navigation } from 'react-native-navigation';

import App from './App';
import Biodata from './Biodata';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('tab.App', () => App);
  Navigation.registerComponent('tab.Biodata', () => Biodata);
}
