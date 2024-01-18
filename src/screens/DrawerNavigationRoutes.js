import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import UserProfileScreen from './DrawerScreens/UserProfileScreen';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';
import FaIcon from 'react-native-vector-icons/FontAwesome5';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = ({navigation, route}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        initialParams={route.params}
        options={{
          title: '', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#519032', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#519032', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const UserProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="UserProfileScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#519032', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#e91e63',
       tabBarStyle: {backgroundColor: "#519032", paddingTop:5}}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FaIcon
              name="home"
              size={30} color="#fff"
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FaIcon
              name="user"
              size={30} color="#fff"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  const userData = props.route.params;
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#7DE24E',
        color: '#cee1f2',
        itemStyle: {marginVertical: 0, color: 'white'},
        labelStyle: {
          color: '#FFFFFF',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={ (props) => <CustomSidebarMenu {...props} screenProps={userData} />}>
      <Drawer.Screen
        name="Home"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
        initialParams={props.route.params}
      />
      <Drawer.Screen
        name="Settings"
        options={{drawerLabel: 'Settings'}}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;