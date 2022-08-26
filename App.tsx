import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CommentsScreen from '~/screens/CommentsScreen';

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
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      <CommentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
