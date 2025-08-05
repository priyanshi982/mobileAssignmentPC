import AccountPage from '../containers/accountsPage';
import FundsPage from '../containers/fundsPage';
import HomePage from '../containers/homePage';
import MarketPage from '../containers/marketPage';
import ToolsPage from '../containers/toolsPage';

export const bottomBarOptions = [
  {
    name: 'Home',
    component: HomePage,
    id: 1,
  },
  {
    name: 'Tools',
    component: ToolsPage,
    id: 2,
  },
  {
    name: 'Requests',
    component: MarketPage,
    id: 3,
  },
  {
    name: 'Accounts',
    component: AccountPage,
    id: 4,
  },
  {
    name: 'Funds',
    component: FundsPage,
    id: 5,
  },
];

export const quickAccessData = [
  {
    name: 'Get Funded',
    icon: 'shakeHands',
    id: 1,
  },
  {
    name: 'Deposits',
    icon: 'deposits',
    id: 2,
  },
  {
    name: 'Withdrawals',
    icon: 'withdrawals',
    id: 3,
  },
  {
    name: 'Accounts',
    icon: 'wallet',
    id: 4,
  },
  {
    name: 'Add',
    icon: 'AddIcon',
    id: 5,
  },
];

export const fundsOptionsData = [
  {
    id: 1,
    heading: 'Deposit',
    subHeading: 'Min Deposit is $10.',
    icon: 'depositPink',
  },
  {
    id: 2,
    heading: 'Withdraw',
    subHeading: 'Max withdrawal is $1M.',
    icon: 'banks',
  },
  {
    id: 3,
    heading: 'Transfer',
    subHeading: 'Funds Limit: Unlimited ',
    icon: 'transactions',
  },
  {
    id: 4,
    heading: 'Transactions',
    subHeading: 'Recent Transactions',
    icon: 'document',
  },
];

export const smallBannersData = [
  {
    id: 1,
    upperHeading: '*For Pro Traders',
    heading: 'Create a new ',
    boldHeading: 'Live account',
    subHeading: 'Deposit and trade profits',
    icon: 'liveAcount',
  },
  {
    id: 2,
    upperHeading: '*For Beginners',
    heading: 'Start with ',
    boldHeading: 'Demo',
    subHeading: 'Trade with virtual capital',
    icon: 'dollars',
  },
];
