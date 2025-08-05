import { COLOR_BLACK, COLOR_WHITE, SF_MEDIUM } from '../../helper/constants';
import { rgbWhiteColor } from '../../helper/commonLogic';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentContainerStyle: { paddingHorizontal: 16 },
  container: {
    backgroundColor: '#000',
    paddingTop: 20,
  },
  header: {
    color: COLOR_WHITE,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    paddingHorizontal: 16,
    fontFamily: SF_MEDIUM,
  },
  cardWrapper: {
    borderRadius: 12,
    marginRight: 12,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    justifyContent: 'flex-start',
  },
  activeCard: {
    backgroundColor: '#7E59CA',
  },
  smallText: {
    color: rgbWhiteColor(0.5),
    fontSize: 12,
    fontWeight: '500',
    fontFamily: SF_MEDIUM,
    marginBottom: 60,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    color: rgbWhiteColor(0.5),
    fontSize: 14,
    fontFamily: SF_MEDIUM,
    fontWeight: '500',
  },
  value: {
    color: COLOR_WHITE,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: SF_MEDIUM,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 12,
  },
  txtconatiner: {
    backgroundColor: COLOR_BLACK,
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
  },
  txtStyle: {
    color: COLOR_WHITE,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: SF_MEDIUM,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default styles;
