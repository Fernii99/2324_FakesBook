import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Header from './components/header';
import Home from './screens/Home';
import Friends from './screens/Friends';
import Groups from './screens/Groups';
import Menu from './screens/Menu';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      
      <NavigationContainer>
        <Header/>
          <Tab.Navigator
            swipeEnabled='true'
            tabBarOptions={{
              showIcon: true,
              tabBarLabelStyle: {
                display: "none" 
              },
              inactiveTintColor: '#9F9F9F',
            }}
            
            screenOptions={ ({route}) => ({
              tabBarIcon: ({focused, color, size}) =>{
                let iconName;
                if(route.name === 'Home')iconName = 'home'
                else if(route.name === 'Friends') iconName = 'account-multiple-outline'
                else if(route.name === 'Groups')iconName = 'account-group'
                else if(route.name === 'Menu')iconName = 'menu'
                else if(route.name === 'Notifications')iconName = 'bell-outline'
                else if(route.name === 'Profile') iconName = 'account-circle-outline'
                return <MaterialCommunityIcons name={iconName} size={26} color={color} />
              }})}
          >
            
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Friends" component={Friends} />
              <Tab.Screen name="Groups" component={Groups} />
              <Tab.Screen name="Menu" component={Menu} />
              <Tab.Screen name="Notifications" component={Notifications} />
              <Tab.Screen name="Profile" component={Profile} />

          </Tab.Navigator>
      </NavigationContainer>  
    </>
  );
}
