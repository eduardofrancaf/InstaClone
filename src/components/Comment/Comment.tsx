/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {IComment} from '~/types/models';
import colors from '~/theme/colors';
import fonts from '~/theme/fonts';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

export default function Comment({
  comment,
  includeDetails = false,
}: ICommentProps) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.comments}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.image} />
      )}
      <View style={styles.mainColumn}>
        <Text style={[styles.text]}>
          <Text style={styles.bold}>{comment.user.username} </Text>
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable
        hitSlop={10}
        onPress={() => setIsLiked(v => !v)}
        style={{alignSelf: 'center'}}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={14}
          style={[{color: isLiked ? colors.accent : colors.black}]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  comments: {flexDirection: 'row'},
  mainColumn: {flex: 1, marginRight: 5},
  image: {width: 40, aspectRatio: 1 / 1, borderRadius: 20, marginRight: 10},
  text: {color: colors.black, lineHeight: 18},
  bold: {fontWeight: fonts.weight.bold},
  footer: {flexDirection: 'row'},
  footerText: {marginRight: 5},
});
