import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import colors from '~/theme/colors';
import fonts from '~/theme/fonts';

export default function CommentInput() {
  const [comment, setComment] = useState('');

  const sendComment = () => {
    console.log(comment);
    setComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.avatar}
      />
      <TextInput
        value={comment}
        onChangeText={setComment}
        style={styles.input}
        placeholder="Write your comment"
        multiline
      />
      <Text onPress={sendComment} style={styles.postButton}>
        POST
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    padding: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 25,
  },
  input: {
    flex: 1,
    borderColor: colors.lightgrey,
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 5,
    marginLeft: 10,
    paddingLeft: 20,
    paddingRight: 50,
  },
  postButton: {
    textAlignVertical: 'center',
    fontWeight: fonts.weight.semi,
    color: colors.primary,
    position: 'absolute',
    height: '100%',
    right: 15,
  },
});
