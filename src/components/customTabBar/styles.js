import { StyleSheet } from 'react-native';
import { rgbWhiteColor } from '../../helper/commonLogic';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: rgbWhiteColor(0.2),
    borderRadius: 12,
    padding: 3,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    height: 42,
  },
  tab: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#3A1849',
  },
  tabText: {
    color: rgbWhiteColor(0.5),
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
  activeTabText: {
    color: rgbWhiteColor(0.9),
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
});

export default styles;
