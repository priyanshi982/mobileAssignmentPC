import { StyleSheet } from 'react-native';
import { getDeviceWidth, rgbWhiteColor } from '../../helper/commonLogic';
import { COLOR_BLACK, COLOR_WHITE, SF_SEMIBOLD } from '../../helper/constants';

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    height: 200,
    justifyContent: 'space-between',
    width: getDeviceWidth() * 0.95,
  },
  innerConatiner: {
    paddingLeft: 10,
    paddingVertical: 10,
    paddingRight: 40,
  },
  walletInfo: {
    color: rgbWhiteColor(0.85),
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
  amountStyle: {
    color: rgbWhiteColor(0.85),
    fontSize: 48,
    fontWeight: '700',
    fontFamily: 'SF-Bold',
  },
  timeStyle: {
    color: rgbWhiteColor(0.85),
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
  profitStyle: {
    color: '#44EC60',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: SF_SEMIBOLD,
    marginTop: 4,
  },
  txtConatainer: {
    flexDirection: 'column',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  withdrawBtn: {
    backgroundColor: COLOR_BLACK,
    height: 34,
    width: 90,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousalConatiner: { flex: 1, justifyContent: 'center', marginTop: 10 },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtContainer: {},
  withdrawText: {
    color: '#fff',
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLOR_WHITE,
    marginHorizontal: 4,
  },
  subheadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerstyle: {
    marginTop: 4,
    marginRight: 4,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  containerAmtstyle: {
    marginLeft: 4,
    marginBottom: 12,
  },
});

export default styles;
