import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, StatusBar } from "react-native";
import Navigation from "~/navigation";

if (__DEV__) {
  import("./ReactotronConfig");
}

declare global {
  interface Console {
    tron: any;
  }
}

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      {/* wrap navigators with NavigationContainer */}
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    // marginTop: StatusBar.currentHeight
  },
});

export default App;
