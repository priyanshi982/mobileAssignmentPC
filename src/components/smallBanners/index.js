import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LINEAR_SHADE_PURPLE } from '../../helper/constants';
import styles from './styles';
import { smallBannersData } from '../../helper/data';
import { getIcon } from '../../helper/commonLogic';
import CustomIcons from '../customIcons';

const SmallBanners = props => {
  const ITEM_WIDTH = 150;
  const {
    fromFundsScreen = false,
    data = smallBannersData,
    heading,
    onPress,
  } = props || {};

  const [columns, setColumns] = useState(
    Math.floor(Dimensions.get('window').width / ITEM_WIDTH),
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setColumns(Math.floor(window.width / ITEM_WIDTH));
    });
    return () => subscription?.remove();
  }, []);

  const renderItem = ({ item }) => {
    return !fromFundsScreen ? (
      <LinearGradient
        colors={LINEAR_SHADE_PURPLE}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <TouchableOpacity onPress={onPress} activeOpacity={0.4}>
          <View style={styles.textContainer}>
            <Text style={styles.upperHeading}>{item?.upperHeading}</Text>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>{item?.heading}</Text>
              <Text style={styles.headingBold}>{item?.boldHeading}</Text>
            </View>
            <Text style={styles.subHeading}>{item?.subHeading}</Text>
          </View>
          <View style={styles.iconContainer}>
            <CustomIcons source={getIcon(item.icon)} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    ) : (
      <TouchableOpacity
        onPress={onPress}
        style={styles.optionContainer}
        activeOpacity={0.4}
      >
        <CustomIcons
          source={getIcon(item.icon)}
          containerstyle={styles.containerstyle}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.depositHead}>{item?.heading}</Text>
          <Text style={styles.depositSubHead}>{item?.subHeading}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {heading && <Text style={styles.fundingTextStyle}>{heading}</Text>}
      <FlatList
        data={data}
        key={columns} // IMPORTANT: Forces re-render when columns change
        numColumns={columns}
        bounces={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </>
  );
};

export default SmallBanners;
