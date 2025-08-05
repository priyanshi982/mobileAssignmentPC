import { StyleSheet } from 'react-native';
import {
  GREY_BLACK,
  SF_MEDIUM,
  SF_SEMIBOLD,
  TAG_YELLOW,
} from '../../helper/constants';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GREY_BLACK,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
  },
  nameStyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: SF_MEDIUM,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 16,
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idStyle: {
    color: 'white',
    fontSize: 12,
    fontFamily: SF_MEDIUM,
  },
  idNumberStyle: {
    color: 'white',
    fontSize: 16,
    fontFamily: SF_SEMIBOLD,
  },
  profilePic: { width: 35, height: 35 },
  tagTextStyle: {
    color: TAG_YELLOW,
    fontSize: 10,
    fontFamily: SF_MEDIUM,
  },
  tag: {
    backgroundColor: '#1F1400',
    borderRadius: 40,
    height: 18,
    paddingHorizontal: 8,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    marginLeft: 4,
  },
});

export default styles;
