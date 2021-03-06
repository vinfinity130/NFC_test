import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    margin: 12,
    alignItems: 'center',
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerContainerText:{
    fontSize: 20,
    margin: 24,
  }
});
