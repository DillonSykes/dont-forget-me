import React from 'react';
import {Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

const RoundButton = (props: ButtonProps) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('touchable opacity pressed')}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#147EFB',
    padding: 50,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

type ButtonProps = {
  text: string;
};
