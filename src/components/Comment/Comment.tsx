import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View, StyleSheet} from 'react-native';
import {IComment} from '../../types/models';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ICommentProps {
  comment: IComment;
}

export default function Comment({comment}: ICommentProps) {
  return (
    <View style={styles.comments}>
      <Text style={[styles.text, styles.commentText]}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign name="hearto" size={14} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {color: colors.black, lineHeight: 18},
  comments: {flexDirection: 'row'},
  commentText: {flex: 1},
  bold: {fontWeight: fonts.weight.bold},
});
