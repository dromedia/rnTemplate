import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcBack, IcClose} from '../../../assets';
import {COLORS, FONTS} from '../../../config';

const Header = props => {
  const {title, color = 'white', subTitle, onBack, onClose} = props;

  return (
    <View style={styles.container(color)}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <View style={styles.btnBack}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  title: {
    ...FONTS.body2,
    color: COLORS.black,
  },
  subtitle: {
    ...FONTS.body4,
    color: COLORS.gray,
  },
  btnBack: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});
