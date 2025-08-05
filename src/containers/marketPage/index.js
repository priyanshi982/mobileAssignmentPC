import { SafeAreaView } from 'react-native';
import AccountWidget from '../../components/accounWidget';
import styles from './styles';

const MarketPage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AccountWidget />
    </SafeAreaView>
  );
};

export default MarketPage;
