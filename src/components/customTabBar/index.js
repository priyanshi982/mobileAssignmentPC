import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { LINEAR_SHADE_PURPLE } from '../../helper/constants';

const CustomTabBar = props => {
  const { tabs, mainContainerStyle } = props || {};
  const [activeTab, setActiveTab] = useState(1);

  return (
    <View style={[styles.container, mainContainerStyle]}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab?.key}
          style={[styles.tab, activeTab === tab?.key && styles.activeTab]}
          onPress={() => setActiveTab(tab?.key)}
        >
          {activeTab === tab?.key ? (
            <LinearGradient
              colors={LINEAR_SHADE_PURPLE}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.activeTab}
            >
              <Text style={styles.activeTabText}>{tab?.title}</Text>
            </LinearGradient>
          ) : (
            <View style={styles.tab?.key}>
              <Text style={styles.tabText}>{tab?.title}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomTabBar;
