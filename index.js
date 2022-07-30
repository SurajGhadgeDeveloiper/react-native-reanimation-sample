// import React, {Component} from 'react';
import {AppRegistry, Text, SafeAreaView, View} from 'react-native';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
// import {App} from './src/App';

import React from 'react';

// import things related to React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import screens
import HomeScreen from './src/screens/home';
import Screen2 from './src/screens/Screen2';
import BasicAnimationScreen from './src/screens/basicAnimation/index';
import OpacityAnimation from './src/screens/basicAnimation/opacity/index';
import ScaleAnimation from './src/screens/basicAnimation/scale/index';
import TransformAnimation from './src/screens/basicAnimation/transform/index';
import PanGestureAnimation from './src/screens/basicAnimation/panGesture/index';
import Interpolation from './src/screens/basicAnimation/interpolation';

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Home" component={HomeScreen} />
        <MyStack.Screen name="Screen2" component={Screen2} />
        <MyStack.Screen
          name="Basic Animation"
          component={BasicAnimationScreen}
        />
        <MyStack.Screen name="Opacity Screen" component={OpacityAnimation} />
        <MyStack.Screen name="Scale Screen" component={ScaleAnimation} />
        <MyStack.Screen
          name="Transform Screen"
          component={TransformAnimation}
        />
        <MyStack.Screen name="PanGesture" component={PanGestureAnimation} />
        <MyStack.Screen name="Interpolation" component={Interpolation} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
