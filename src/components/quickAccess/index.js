import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import CustomIcons from '../customIcons';
import { getIcon } from '../../helper/commonLogic';

const QuickAccess = props => {
  const { heading = '', subheading = '', accessData } = props || {};

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <CustomIcons source={getIcon(item.icon)} />
        </TouchableOpacity>
        <Text style={styles.txtStyle}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
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
      <FlatList
        data={accessData}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default QuickAccess;
