import { Location } from '../../../types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';

import React from 'react';
import { Icon } from '@rneui/base';

const LocationListItem = (props: LocationListItemProps) => {
  const location = props.location;
  const item_key = props.key;
  return (
    // <View>
    //   <View style={styles.information} key={item_key}>
    //     <Text style={styles.name}>{location.name}</Text>
    //     <Text style={styles.location}>{location.address}</Text>
    //   </View>
    //   <View></View>
    // </View>
    <TouchableOpacity>
      <ListItem key={item_key} style={styles.information}>
        <ListItem.Content>
          <ListItem.Title style={styles.name}>{location.name}</ListItem.Title>
          <ListItem.Title style={styles.location}>
            {location.address}
          </ListItem.Title>
          <ListItem></ListItem>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
  },
  location: {
    fontSize: 10,
    marginRight: '50%',
  },
  information: {
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderWidth: 1,
    borderTopWidth: 0,
  },
});

type LocationListItemProps = {
  location: Location;
  key: number;
};

export default LocationListItem;
