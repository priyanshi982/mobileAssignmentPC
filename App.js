/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View } from 'react-native';
import { BottomBarNavigator } from './src/navigation/bottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GREY_BLACK } from './src/helper/constants';

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <BottomBarNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREY_BLACK,
  },
});

export default App;
