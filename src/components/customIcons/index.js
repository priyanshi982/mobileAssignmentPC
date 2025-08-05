import { TouchableOpacity, View } from 'react-native';

const CustomIcons = props => {
  const { isClickable = false, onPress, source, containerstyle } = props || {};
  const ViewWrappper = isClickable ? TouchableOpacity : View;

  return (
    <ViewWrappper style={containerstyle} onPress={onPress}>
      {source}
    </ViewWrappper>
  );
};

export default CustomIcons;
