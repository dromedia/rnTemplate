import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS, FONTS} from '../../config';

const SplashScreen = ({navigation}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('alreadyLaunched').then(value => {
        if (value === null) {
          AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsFirstLaunch(true);
          navigation.navigate('GdprScreen');
        } else {
          setIsFirstLaunch(false);
          navigation.replace('MainApp');
        }
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.orange,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...FONTS.body3,
    color: COLORS.black,
  },
});
