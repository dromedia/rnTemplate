import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcListOff,
  IcListOn,
  IcNotifOff,
  IcNotifOn,
  IcProfileOff,
  IcProfileOn,
  IcFavoriteOn,
  IcFavoriteOff,
} from '../../../assets';
import {COLORS} from '../../../config';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'HomeScreen':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'OrderScreen':
      return focus ? <IcListOn /> : <IcListOff />;
    case 'ProfileScreen':
      return focus ? <IcProfileOn /> : <IcProfileOff />;
    case 'FavoriteScreen':
      return focus ? <IcFavoriteOn /> : <IcFavoriteOff />;
    default:
      return focus ? <IcNotifOn /> : <IcNotifOff />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
});
