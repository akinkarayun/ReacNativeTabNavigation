import {StyleSheet} from 'react-native';
import constant from './constant';
import {fontPixel} from './responsive';

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: constant.colorOnSecondary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontFamily: constant.fontFamily,
    fontSize: fontPixel(20),
  },
});
