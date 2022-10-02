import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CamScreen from '../screens/Camera';
import ImgScreen from '../screens/Images';
import VideosScreen from '../screens/Videos';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Camera') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'Image') {
              iconName = focused ? 'images' : 'images-outline';
            } else if (route.name === 'Videos') {
              iconName = focused ? 'md-play-circle' : 'md-play-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0C9BBE',
          tabBarInactiveTintColor: 'grey',
        })}>
        <Tab.Screen
          // options={{
          //   tabBarIcon: ({size, color, focused}) => {
          //     return (
          //       <Ionicons
          //         name="Home"
          //         size={focused ? 25 : 20}
          //         color={focused ? '#0C9BBE' : 'grey'}
          //       />
          //     );
          //   },
          // }}
          name="Home"
          component={Home}
        />
        <Tab.Screen name="Camera" component={CamScreen} />
        <Tab.Screen name="Videos" component={VideosScreen} />
        <Tab.Screen name="Image" component={ImgScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
