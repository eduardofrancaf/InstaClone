import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '~/components/Button';
import user from '~/assets/data/user.json';
import fonts from '~/theme/fonts';
import colors from '~/theme/colors';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={{uri: user.image}} style={styles.profilePicture} />
        <View style={styles.numbersContainer}>
          <Text style={styles.amountNumber}>{user.posts.length}</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.amountNumber}>230</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.amountNumber}>246</Text>
          <Text>Following</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.nameText}>{user.name}</Text>
        <Text>{user.bio}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          styleProp={styles.button}
          text="Edit Profile"
          onPress={() => {}}
        />
        <Button
          styleProp={styles.button}
          text="Another Button"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  root: {padding: 10},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {marginVertical: 10},
  nameText: {fontWeight: fonts.weight.semi, color: colors.black},
  amountNumber: {fontWeight: fonts.weight.bold, color: colors.black},
  profilePicture: {width: 100, borderRadius: 50, aspectRatio: 1},
  numbersContainer: {alignItems: 'center'},
  buttonsContainer: {flexDirection: 'row'},
  button: {flex: 1, marginHorizontal: 5},
});
