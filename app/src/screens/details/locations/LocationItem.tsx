import { Location } from '../../../types';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const LocationListItem = (props: LocationListItemProps) => {
  const location = props.location;
  const item_key = props.key;
  return (
    <View>
      <View style={styles.information} key={item_key}>
        <Text style={styles.name}>{location.name}</Text>
        <Text style={styles.location}>{location.address}</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
  },
  location: {
    // marginLeft: 'auto',
    // marginTop: 'auto',
    fontSize: 10,
  },
  information: {
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomWidth: 5,
    borderTopWidth: 1,
  },
});

type LocationListItemProps = {
  location: Location;
  key: number;
};

export default LocationListItem;
