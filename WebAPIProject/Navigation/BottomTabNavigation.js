import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

// Import styling and components
import TabBarIcon from '../components/TabBarIcon';
import Colours from "../constants/Colours";
import Styles from "../Styles/MainStyle";

// Import navigators & screens
import HomeScreen from '../Screens/HomeScreen';
import HelpScreen from '../Screens/HelpScreen';
import PeopleNavigator from './PeopleNavigator';
import AddPersonScreen from '../Screens/AddPersonScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colours.tabLabelSelected,
        tabBarInactiveTintColor: Colours.tabLabel,
        tabBarStyle: Styles.navBar,
        tabBarLabelStyle: Styles.navBarLabel,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />
        }}
      />
      <BottomTab.Screen
        name="People"
        component={PeopleNavigator}
        options={{
          title: 'View People',
          unmountOnBlur: true,   // Reset the screen when it loses focus (when someone navigates away from it)
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-people" />
        }}
      />
      <BottomTab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: 'Help',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-help-circle" />,
        }}
      />
      <BottomTab.Screen
  name="AddPerson"
  component={AddPersonScreen}
  options={{
    title: 'Add Person',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person-add" />,
  }}
/>
    </BottomTab.Navigator>
  );
}