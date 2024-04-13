import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {People} from '../../types';

const Details = (props: DetailsProp) => {
  const people = props.people;
  return (
    <SafeAreaView>
      <Text> Details Page</Text>
      <ScrollView>
        {people.map((person: People, index: number) => {
          return (
            <>
              <View key={index}>
                <Text style={styles.detailsText}>{person.name}</Text>
              </View>
              <View key={index}>
                <Text style={styles.detailsText}>{person.approxAge}</Text>
              </View>
              <View key={index}>
                <Text style={styles.detailsText}>{person.gender}</Text>
              </View>
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsText: {
    fontSize: 30,
  },
});

type DetailsProp = {
  people: [People];
};

export default Details;
