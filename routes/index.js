import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { NavigationService as NS, setTopLevelNavigator as sTLN } from './components';
import Home from '../pages/home'
import Product from '../pages/product'

const Navigator = createAppContainer(
  createSwitchNavigator({
    Home: {
      screen: Home,
      navigationOptions: () => ({}),
    },
    Product: {
      screen: Product,
      navigationOptions: () => ({}),
    },
  },
    {
      initialRouteName: 'Home',
    }),
);

// this fixes HMR issue, see https://github.com/facebook/react-native/issues/22592
const NavigationService = NS;
const setTopLevelNavigator = sTLN;

export {
  Navigator,
  NavigationService,
  setTopLevelNavigator,
};
