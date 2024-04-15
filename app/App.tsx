/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Location, Person } from './src/types';
import { LocationsListScreen } from './src/screens/details/locations/LocationsListScreen.tsx';

const people: Person[] = [
  {
    id: 'SomeId',
    first_name: 'Dillon',
    last_name: 'Sykes',
    full_name: 'Dillon Sykes',
    approxAge: 27,
    gender: 'Male',
  },
];
const locations: any[] = [
  {
    id: 'someLocationsId_0',
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
    address: '22222 E Test St. Richmond VA 23223',
    notify: false,
  },
  {
    id: 'someLocationsId_3',
    name: 'MTC',
    address: '33333 E Test St. Midlothian VA 23223',
    notify: false,
  },
];

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <LocationsListScreen people={people} locations={locations} />
    </SafeAreaView>
  );
}

export default App;
