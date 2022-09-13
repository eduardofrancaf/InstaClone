import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CommentsScreen from '~/screens/CommentsScreen';
import ProfileScreen from '~/screens/ProfileScreen';
import EditProfileScreen from '~/screens/EditProfileScreen';
import PostUploadScreen from '~/screens/PostUploadScreen';

if (__DEV__) {
  import('./ReactotronConfig');
}

declare global {
  interface Console {
    tron: any;
  }
}

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <EditProfileScreen /> */}
      <PostUploadScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
