import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getDeviceWidth } from '../../helper/commonLogic';
import styles from './styles';

const ChooseAccountType = () => {
  const [selectedId, setSelectedId] = useState('1');
  const CARD_WIDTH = getDeviceWidth() * 0.5;

  const data = [
    {
      id: '1',
      spread: '0.2',
      commission: '2%',
      deposit: '$10',
    },
    {
      id: '2',
      spread: '0.2',
      commission: '2%',
      deposit: '$10',
    },
  ];
  const renderItem = ({ item }) => {
    const isActive = item.id === selectedId;
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        activeOpacity={0.8}
        style={[styles.cardWrapper, { width: CARD_WIDTH }]}
      >
        <View style={[styles.card, isActive && styles.activeCard]}>
          <Text style={styles.txtStyle}>Recommended</Text>

          <View style={styles.txtconatiner}>
            <Text style={styles.smallText}>*For Traditional Traders</Text>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Spread pips</Text>
              <Text style={styles.value}>{item.spread}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Commissions</Text>
              <Text style={styles.value}>{item.commission}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <Text style={styles.label}>Min Deposit</Text>
              <Text style={styles.value}>{item.deposit}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Account</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default ChooseAccountType;
