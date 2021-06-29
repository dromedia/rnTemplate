import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../config';
import {Header, Gap} from '../../components';

const DetailScreen = ({navigation, route}) => {
  const {image, rating, title, ingredient, instruction, content, id} =
    route.params;

  const data = {
    image,
    rating,
    title,
    ingredient,
    instruction,
    content,
    id,
  };

  const renderItem = ({item}) => {
    if (!item.quantity) {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.name}</Text>
        </View>
      );
    }
    return (
      <View style={styles.item}>
        <View style={styles.quantityWrapper}>
          <Text style={styles.textItemQuantity}>{item.quantity}</Text>
        </View>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };
  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <View style={{flex: 1}}>
      <Header title={data.title} />
      <View style={styles.content}>
        <FlatList
          data={data.ingredient}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.index}
          ItemSeparatorComponent={itemSeparator}
        />
      </View>
      <Gap height={30} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 14,
    backgroundColor: 'white',
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  itemSeparator: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
  },
  textItem: {
    ...FONTS.body4,
    color: COLORS.black,
    maxWidth: '70%',
  },
  textItemQuantity: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  quantityWrapper: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: SIZES.radius,
    marginRight: 10,
  },
});
