import { Image, Text, View } from 'react-native';
import styles from './styles';
import { Setting } from '../../assets/icons';
import CustomIcons from '../customIcons';
import { getIcon } from '../../helper/commonLogic';

const AccountWidget = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/images/ProfilePic.png')}
        style={styles.profilePic}
      />
      <View style={styles.nameContainer}>
        <View style={styles.idContainer}>
          <Text style={styles.nameStyle}>Zee</Text>
          <View style={styles.tag}>
            <Text style={styles.tagTextStyle}>Unverified</Text>
          </View>
        </View>
        <View style={styles.idContainer}>
          <Text style={styles.idStyle}>ID: </Text>
          <Text style={styles.idNumberStyle}>A232121</Text>
          <CustomIcons
            source={getIcon('copy')}
            isClickable={true}
            containerstyle={styles.containerStyle}
          />
        </View>
      </View>

      <CustomIcons source={<Setting />} isClickable={true} />
    </View>
  );
};

export default AccountWidget;
