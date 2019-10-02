import React from 'react'
import Home from './Home'
import Camera from './Camera'
import Preview from './Preview'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Navigator = createStackNavigator({
    // For each screen that you can navigate to, create a new entry like this:
    Home,
    Camera,
    Preview,
  });

export default createAppContainer(Navigator);

