import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  header: {flexDirection: 'row', padding: 10, alignItems: 'center'},
  post: {},
  threeDots: {marginLeft: 'auto'},
  image: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
  userAvatar: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  userName: {fontWeight: fonts.weight.bold, color: colors.black},
  iconContainer: {flexDirection: 'row', marginBottom: 5},
  icon: {marginRight: 5, color: colors.black},
  footer: {padding: 10},
  bold: {fontWeight: fonts.weight.bold},
  text: {color: colors.black, lineHeight: 18},
  comments: {flexDirection: 'row'},
  commentText: {flex: 1},
});
export default styles;
