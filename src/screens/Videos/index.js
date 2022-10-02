import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const VideosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>VideosScreen</Text>
    </View>
  );
};

export default VideosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
