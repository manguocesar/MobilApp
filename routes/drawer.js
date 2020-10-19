import { createDrawerNavigator } from 'react-navigation-drawer'; //create a left side drawer
import { createAppContainer } from 'react-navigation'; //Contains all the views

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);