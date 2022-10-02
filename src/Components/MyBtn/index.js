import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyBtn = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default MyBtn;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#0C9BBE30',
    // backgroundColor: '#ffce6d',
    // backgroundColor: '#ff7f5050',
  },
  title: {
    color: '#0C9BBE',
    fontSize: 22,
    textAlign: 'center',
  },
});
