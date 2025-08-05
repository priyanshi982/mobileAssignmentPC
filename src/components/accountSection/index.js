import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import CustomIcons from '../customIcons';
import { getIcon } from '../../helper/commonLogic';

const AccountSection = props => {
  const {
    heading = '',
    subheading = '',
    subText = false,
    containerStyle,
    mainContainerStyle,
    onPress,
  } = props || {};

  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      {heading && (
        <View style={styles.headingConatiner}>
          <Text style={styles.headingStyle}>{heading}</Text>
          {subheading && (
            <TouchableOpacity style={styles.subheadingContainer}>
              <Text style={styles.customizeStyle}>{subheading}</Text>
              <CustomIcons
                source={getIcon('rightArrow')}
                isClickable={true}
                containerstyle={styles.containerstyle}
              />
            </TouchableOpacity>
          )}
        </View>
      )}

      <View style={[styles.accountContainer, containerStyle]}>
        <Text style={styles.accHeadingStyle}>No Active accounts</Text>
        <Text style={styles.accSubHeadingStyle}>
          Create a new account or unarchive
        </Text>
        {subText && (
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.newAccStyle}>+ {subText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AccountSection;
