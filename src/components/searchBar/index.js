import { TextInput, View } from 'react-native';
import styles from './styles';
import CustomIcons from '../../components/customIcons';
import { getIcon, rgbWhiteColor } from '../../helper/commonLogic';
import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <CustomIcons source={getIcon('search')} isClickable={true} />

      <TextInput
        style={styles.input}
        placeholder="Search account"
        placeholderTextColor={rgbWhiteColor(0.3)}
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};

export default SearchBar;
