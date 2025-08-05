import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import AccountWidget from '../../components/accounWidget';
import CustomIcons from '../../components/customIcons';
import { getIcon } from '../../helper/commonLogic';
import CustomTabBar from '../../components/customTabBar';
import AccountSection from '../../components/accountSection';
import SearchBar from '../../components/searchBar';
import { useRef } from 'react';
import SmallBanners from '../../components/smallBanners';
import BottomSheet from '../../components/bottomSheet';
import ChooseAccountType from '../../components/accountType';

const AccountPage = () => {
  const createAccountSheet = useRef();
  const chooseAccountSheet = useRef();

  const tabBarData = [
    { key: 1, title: 'Real' },
    { key: 2, title: 'Demo' },
    { key: 3, title: 'Archived' },
  ];
  const accountTypeData = [
    { key: 1, title: 'Live Account' },
    { key: 2, title: 'Demo Account' },
  ];

  const paltformData = [
    { key: 1, title: 'MetaTrader5' },
    { key: 2, title: 'Demo MetaTrader5' },
  ];

  const openCreateAccountSheet = () => {
    createAccountSheet?.current?.open();
  };

  const openCHooseAccountSheet = () => {
    createAccountSheet?.current?.close();
    setTimeout(() => {
      chooseAccountSheet?.current?.open();
    }, 200);
  };

  const bottomSheetContent = () => {
    return (
      <View style={styles.sheetContent}>
        <CustomIcons
          source={getIcon('cross')}
          isClickable={true}
          containerstyle={styles?.iconContainerStyle}
          onPress={() => createAccountSheet?.current?.close()}
        />
        <Text style={styles.sheetHeading} numberOfLines={1}>
          Your trading journey is 2 steps away...
        </Text>
        <Text style={styles.sheetSubHeading} numberOfLines={1}>
          Choose your trade account type
        </Text>
        <SmallBanners onPress={openCHooseAccountSheet} />
      </View>
    );
  };
  const createAccount = () => {
    return (
      <View style={styles.sheetContent}>
        <View style={styles.headContainer}>
          <CustomIcons
            source={getIcon('backArrow')}
            isClickable={true}
            containerstyle={styles?.iconStyle}
            onPress={() => chooseAccountSheet?.current?.close()}
          />
          <Text style={styles.headTxtStyle}>Create Account</Text>
        </View>
        <Text style={styles.subHead}>ACCOUNT TYPE</Text>

        <CustomTabBar
          tabs={accountTypeData}
          mainContainerStyle={styles.mainContainerStyle}
        />
        <Text style={styles.subHead}>PLATFORM</Text>

        <CustomTabBar
          tabs={paltformData}
          mainContainerStyle={styles.mainContainerStyle}
        />
        <ChooseAccountType />
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => chooseAccountSheet?.current?.close()}
        >
          <Text style={styles.btnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <AccountWidget />
        <View style={styles.headingConatiner}>
          <Text style={styles.headingTextStyle}> Account Overview</Text>
          <CustomIcons source={getIcon('filters')} isClickable={true} />
        </View>
        <CustomTabBar tabs={tabBarData} />
        <SearchBar />
        <AccountSection
          subText={'Create a new account'}
          containerStyle={styles.containerStyle}
          mainContainerStyle={styles.mainContainerStyle}
          onPress={openCreateAccountSheet}
        />
        <BottomSheet
          ref={createAccountSheet}
          childComp={bottomSheetContent()}
        />
        <BottomSheet ref={chooseAccountSheet} childComp={createAccount()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountPage;
