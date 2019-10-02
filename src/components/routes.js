import Home from './Home'
import Camera from './Camera'
import { createStackNavigator } from 'react-navigation-stack';
createStackNavigator(RouteConfigs, StackNavigatorConfig);



createStackNavigator({
    // For each screen that you can navigate to, create a new entry like this:
    Home,
    Camera
  });