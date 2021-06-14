/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import { 
  BottomTabParamList, 
  HomeNavigatorParamList, 
  SearchNavigatorParamList, 
  NotificationsNavigatorParamList,
  MessagesNavigatorParamList
} from '../types';
import ProfilePicture from "../components/ProfilePicture";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
         }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={ HomeScreen }
        options={{ 
          headerLeftContainerStyle: {
            marginLeft: 15
          },
          headerRightContainerStyle: {
            marginRight: 15
          },
          headerTitle: () => (
            <Ionicons 
              name={"logo-twitter"} 
              size={30} 
              colors={Colors.light.tint} 
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons 
              name="star-four-points-outline" 
              size={30} 
              colors={Colors.light.tint} 
            />
          ),
          headerLeft: () => (
            <ProfilePicture 
              size={30}
              image={'https://picsum.photos/2000'}
            />
          )
        }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchNavigatorParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={ SearchScreen }
        options={{ headerTitle: 'Search' }}
      />
    </SearchStack.Navigator>
  );
}

const NotificationsStack = createStackNavigator<NotificationsNavigatorParamList>();

function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotificationsScreen"
        component={ NotificationsScreen }
        options={{ headerTitle: 'Notifications' }}
      />
    </NotificationsStack.Navigator>
  );
}

const MessagesStack = createStackNavigator<MessagesNavigatorParamList>();

function MessagesNavigator() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="MessagesScreen"
        component={ MessagesScreen }
        options={{ headerTitle: 'Messages' }}
      />
    </MessagesStack.Navigator>
  );
}
