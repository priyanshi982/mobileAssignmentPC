import { SafeAreaView } from 'react-native';
import AccountWidget from '../../components/accounWidget';
import styles from './styles';
import SmallBanners from '../../components/smallBanners';
import { fundsOptionsData } from '../../helper/data';

const FundsPage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AccountWidget />
      <SmallBanners
        fromFundsScreen={true}
        data={fundsOptionsData}
        heading={'Funds Overview'}
      />
    </SafeAreaView>
  );
};

export default FundsPage;
