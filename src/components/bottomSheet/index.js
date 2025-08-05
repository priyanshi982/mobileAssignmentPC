import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = props => {
  const { childComp, ref } = props || {};

  return (
    <RBSheet
      ref={ref}
      closeOnDragDown={true}
      closeOnPressMask={true}
      draggable={true}
      openDuration={200}
      animationType="fade"
      customStyles={{
        wrapper: styles.wrapperstyle,
        draggableIcon: styles.draggableIconStyle,
        container: styles.containerStyle,
      }}
    >
      {childComp}
    </RBSheet>
  );
};

export default BottomSheet;
