import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { LINEAR_PURPLE } from '../../helper/constants';
import CustomIcons from '../customIcons';
import { getIcon } from '../../helper/commonLogic';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth * 0.95;

const data = [
  { id: '1', walletId: '12832U', amount: '$00.0', change: '+0.00 (+0%)' },
  { id: '2', walletId: '89342X', amount: '$150.0', change: '+10.00 (+7%)' },
  { id: '3', walletId: '45729Z', amount: '$320.0', change: '-5.00 (-1%)' },
];

const WalletCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <LinearGradient
      colors={LINEAR_PURPLE}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.innerConatiner}>
        <View style={styles.topContainer}>
          <Text style={styles.walletInfo}>Wallet ID: {item.walletId}</Text>
          <Text style={styles.walletInfo}>USD ▼</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountStyle}>{item.amount}</Text>
          <CustomIcons
            source={getIcon('hideEye')}
            isClickable={true}
            containerstyle={styles.containerAmtstyle}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.txtContainer}>
            <Text style={styles.timeStyle}>Last 24 hours</Text>
            <View style={styles.subheadingContainer}>
              <CustomIcons
                source={getIcon('growth')}
                containerstyle={styles.containerstyle}
              />
              <Text style={styles.profitStyle}>{item.change}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.withdrawBtn}>
            <Text style={styles.withdrawText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / CARD_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View style={styles.carousalConatiner}>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll },
        )}
        contentContainerStyle={{
          paddingHorizontal: (screenWidth - CARD_WIDTH) / 2,
        }}
      />

      <View style={styles.pagination}>
        {data.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (i - 1) * CARD_WIDTH,
              i * CARD_WIDTH,
              (i + 1) * CARD_WIDTH,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return <Animated.View key={i} style={[styles.dot, { opacity }]} />;
        })}
      </View>
    </View>
  );
};

export default WalletCarousel;
