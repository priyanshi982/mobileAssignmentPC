import {
  AccountFocused,
  AccountsIcon,
  FundsFocused,
  FundsIcon,
  HomeIcon,
  HomeIconFocused,
  ToolIcon,
} from '../../assets/icons';

export const tabBarIcons = (tabBarOption, focused) => {
  switch (tabBarOption?.id) {
    case 1:
      return focused ? <HomeIcon /> : <HomeIconFocused />;
    case 2:
      return <ToolIcon />;
    case 4:
      return focused ? <AccountFocused /> : <AccountsIcon />;
    case 5:
      return focused ? <FundsFocused /> : <FundsIcon />;
    default:
  }
};
