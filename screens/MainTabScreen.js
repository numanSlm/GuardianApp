import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons'; 

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import MapScreen from './MapScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ()=>(
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
    >
    <Tab.Screen
      name="Feed"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387', 
        tabBarIcon: ({ color }) => (
          <Feather name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarColor: '#E24C00',
        tabBarIcon: ({ color }) => (
          <Feather name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Feather name="gitlab" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapScreen}
      options={{
        tabBarLabel: 'Map',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Feather name="map" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontweight:'bold'
      }
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      headerLeft:()=>(
        <Feather name="menu" size={24} color="black" 
        backgroundColor='#009387' onPress={() => navigation.openDrawer()} />
      )
    }} />
  </HomeStack.Navigator>
  );
  
const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#E24C00'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontweight:'bold'
      }
    }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen}  options={{
      headerLeft:()=>(
        <Feather name="menu" size={24} color="black" 
        backgroundColor='#E24C00' onPress={() => navigation.openDrawer()} />
      )
    }} />
  </DetailsStack.Navigator>
  );
  