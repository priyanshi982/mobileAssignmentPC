import { StyleSheet, Dimensions } from 'react-native';
import {
  COLOR_BLACK,
  MANROPE_SEMIBOLD,
  PURPLE_BACKGROUND_COLOR,
  TAB_ACTIVE_COLOR,
  TAB_INACTIVE_COLOR,
} from '../../helper/constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: COLOR_BLACK,
    height: 81,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
    borderRadius: 42,
    paddingHorizontal: 20,
    borderTopWidth: 0,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 40,
    height: 81,
    width: width / 5,
  },
  borderBottom: {
    height: 4,
    width: 40,
    backgroundColor: PURPLE_BACKGROUND_COLOR,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  textStyle: focused => ({
    color: !focused ? TAB_INACTIVE_COLOR : TAB_ACTIVE_COLOR,
    fontFamily: MANROPE_SEMIBOLD,
    fontSize: 11,
    marginTop: 8,
    textAlign: 'center',
    overflow: 'visible',
  }),
  marketContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 64,
    width: 64,
    backgroundColor: PURPLE_BACKGROUND_COLOR,
    borderRadius: 40,
    borderColor: COLOR_BLACK,
  },
  blackContainer: {
    height: 84,
    width: 84,
    backgroundColor: COLOR_BLACK,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
});

export default styles;
