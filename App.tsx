import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator   } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomeRoute from './Routes/HomeRoute';
import SearchRoute from './Routes/SearchRoute';
import LikedRoute from './Routes/LikedRoute';
import { Ionicons } from '@expo/vector-icons';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    'Helvatica': require('./assets/Fonts/HelveticaNeu.ttf'),
    'GlacialBold' : require('./assets/Fonts/GlacialIndifference-Bold.otf'), 
    'GlacialRegular' : require('./assets/Fonts/GlacialIndifference-Regular.otf')
  });
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer >
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={({route})=>({
                  tabBarIcon : ({focused ,color,size})=>{
                      if(route.name === "Home")
                        return <Ionicons name={'ios-home'} size={size} color={color} />;
                      else if (route.name === 'Search') 
                        return <Ionicons name={'ios-search'} size={size} color={color} />;
                      else if (route.name === 'Maps')
                        return <Ionicons name={'ios-compass'} size={size} color={color} />;
                      
                  }
              })} 
              tabBarOptions={{
                  activeTintColor: '#E63946',
                  inactiveTintColor: 'gray',
              }} >
               
              <Stack.Screen name="Home" component={HomeRoute} />
              <Stack.Screen name="Search" component={SearchRoute} />
              <Stack.Screen name="Maps" component={LikedRoute} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
}


