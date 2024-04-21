/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Location, Person } from './src/types';
import { LocationsListScreen } from './src/screens/details/locations/LocationsListScreen.tsx';

const home_location_id = 'homeLocationId';
const people: Person[] = [
  {
    id: 'SomeId',
    first_name: 'Dillon',
    last_name: 'Sykes',
    full_name: 'Dillon Sykes',
    approxAge: 27,
    gender: 'Male',
    location_id: home_location_id,
  },
];
const locations: Location[] = [
  {
    id: home_location_id,
    name: 'Home',
    address: '00000 E Test St. Richmond VA 23223',
    notify: false,
  },
  {
    id: 'someLocationsId_1',
    name: 'Gym',
    address: '3600 W Broad St. Richmond VA 23223',
    notify: false,
  },
  {
    id: 'someLocationsId_2',
    name: 'Work',
    address: '22222 N Test St. Richmond VA 23223',
    notify: false,
  },
  {
    id: 'someLocationsId_3',
    name: 'MTC',
    address: '33333 E Test St. Midlothian VA 23223',
    notify: false,
  },
];
const Stack = createNativeStackNavigator();
const listScreenProps = {
  people: people,
  locations: locations,
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Locations">
          {() => (
            <SafeAreaView>
              <LocationsListScreen {...listScreenProps} />
            </SafeAreaView>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
