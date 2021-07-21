import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../Home';
import Gallery from '../Gallery';
import Notification from '../Notification';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
      }}>
      <Tab.Screen
        name={'Explore'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Gallery'}
        component={Gallery}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Notifications'}
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bell" size={25} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
