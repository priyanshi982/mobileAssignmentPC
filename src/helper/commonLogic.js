import { Dimensions, Platform } from 'react-native';
import {
  AddIcon,
  Banks,
  DepositPink,
  Deposits,
  Document,
  Dollars,
  FundsFocused,
  FundsIcon,
  LiveAcount,
  Setting,
  ShakeHands,
  Transactions,
  Wallet,
  Withdrawals,
  Filter,
  CrossIcon,
  SeachIcon,
  HideEyeIcon,
  Growth,
  RightArrow,
  BackArrow,
  Copy,
} from '../assets/icons';

export const getIcon = icon => {
  switch (icon) {
    case 'setting':
      return <Setting />;
    case 'shakeHands':
      return <ShakeHands />;
    case 'wallet':
      return <Wallet />;
    case 'funds':
      return <FundsIcon />;
    case 'fundsFocused':
      return <FundsFocused />;
    case 'AddIcon':
      return <AddIcon />;
    case 'deposits':
      return <Deposits />;
    case 'withdrawals':
      return <Withdrawals />;
    case 'dollars':
      return <Dollars />;
    case 'liveAcount':
      return <LiveAcount />;
    case 'document':
      return <Document />;
    case 'depositPink':
      return <DepositPink />;
    case 'banks':
      return <Banks />;
    case 'transactions':
      return <Transactions />;
    case 'filters':
      return <Filter />;
    case 'cross':
      return <CrossIcon />;
    case 'search':
      return <SeachIcon />;
    case 'hideEye':
      return <HideEyeIcon />;
    case 'growth':
      return <Growth />;
    case 'rightArrow':
      return <RightArrow />;
    case 'backArrow':
      return <BackArrow />;
    case 'copy':
      return <Copy />;
    default:
  }
};

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const getDeviceWidth = () => {
  return Dimensions.get('window').width;
};

export const getDeviceHeight = () => {
  return Dimensions.get('window').height;
};

export const rgbWhiteColor = (opactiy = 1) => {
  return `rgba(255, 255, 255, ${opactiy})`;
};

export const rgbBlackColor = (opactiy = 1) => {
  return `rgba(0, 0, 0, ${opactiy})`;
};
