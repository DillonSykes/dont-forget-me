import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '@rneui/themed';

import { Location, Person } from '../../../types';
import LocationListItem from './LocationItem.tsx';

export const LocationsListScreen = (props: DetailsProp) => {
  // const people = props.people;
  const locations = props.locations;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/*<View style={styles.header}>*/}
        {/*  <Text style={styles.headerText}>Locations</Text>*/}
        {/*</View>*/}
        <ScrollView>
          {locations.map((location: Location, index: number) => (
            <LocationListItem location={location} key={index} />
          ))}
        </ScrollView>
        <SearchBar platform={'ios'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsText: {
    fontSize: 30,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'grey',
    paddingLeft: 10,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  locationItem: {
    display: 'flex',
    padding: 10,
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomWidth: 5,
    borderTopWidth: 1,
  },
});

type DetailsProp = {
  people: Person[];
  locations: Location[];
};
