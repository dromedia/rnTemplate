import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../config';
import {Header} from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <Header title="Welcome" subTitle="starter template" />
      <View style={styles.content}>
        <Text style={{...FONTS.body4}}>Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
