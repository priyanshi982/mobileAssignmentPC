import { SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import AccountWidget from '../../components/accounWidget';
import CarouselWidget from '../../components/carousalWidget';
import QuickAccess from '../../components/quickAccess';
import { quickAccessData } from '../../helper/data';
import AccountSection from '../../components/accountSection';
import SmallBanners from '../../components/smallBanners';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <AccountWidget />
        <CarouselWidget />
        <QuickAccess
          heading={'Quick Access'}
          subheading={'Customize'}
          accessData={quickAccessData}
        />
        <AccountSection
          heading={'Accounts'}
          subheading={'Create a new account'}
        />
        <SmallBanners />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
