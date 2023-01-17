import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

export type StackNavigatorProps = {
  Drawer: NavigatorScreenParams<DrawerNavigatorProps>;
  MealsOverview: {
    categoryId: string;
  };
  MealDetailScreen: {
    mealId: string;
  };
};

export type DrawerNavigatorProps = {
  Categories: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorProps>();
const Drawer = createDrawerNavigator<DrawerNavigatorProps>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Drawer'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={DawerNagivator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetailScreen' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function DawerNagivator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='list' />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='star' />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
