/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { bottomBarOptions } from '../../helper/data';
import { TAB_ACTIVE_COLOR, TAB_INACTIVE_COLOR } from '../../helper/constants';
import { TouchableOpacity, View } from 'react-native';
import { MarketIcon } from '../../assets/icons';
import { Text } from 'react-native-gesture-handler';
import { tabBarIcons } from './logic';

const Tab = createBottomTabNavigator();

const renderBottomBarView = () => {
  const tabPressFunc = (tabBar, index) => {};

  return bottomBarOptions?.map(tabBar => (
    <Tab.Screen
      key={tabBar?.name}
      name={tabBar?.name}
      component={tabBar?.component}
      listeners={{
        focus: ({ target }) => {
          let i = bottomBarOptions.findIndex(
            v => v?.name === target.split('-')[0],
          );
          tabPressFunc(tabBar, i);
        },
      }}
      initialParams={tabBar?.params}
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused, color }, props) => (
          <TabIcon focused={focused} tabBarOption={tabBar} {...props} />
        ),
      }}
    />
  ));
};

const TabIcon = ({ focused, tabBarOption }) => {
  return tabBarOption?.id === 3 ? (
    <View style={styles.blackContainer}>
      <TouchableOpacity style={styles.marketContainer} activeOpacity={0.8}>
        <MarketIcon />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.tabIconContainer}>
      {tabBarIcons(tabBarOption, focused)}
      <Text style={styles.textStyle(focused)}>{tabBarOption?.name}</Text>

      {focused && <View style={styles.borderBottom} />}
    </View>
  );
};

export const BottomBarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.navigator,
      }}
    >
      {renderBottomBarView()}
    </Tab.Navigator>
  );
};
