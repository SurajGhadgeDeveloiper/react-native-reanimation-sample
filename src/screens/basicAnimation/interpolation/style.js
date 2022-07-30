import {StyleSheet, Dimensions} from 'react-native';
const SIZE = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'white',
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1,
  },
});

export default styles;
