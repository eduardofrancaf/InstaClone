import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "~/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import logo from "~/assets/images/logo.png";
import ProfileScreen from "~/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{
          headerShown: true,
          headerTitle: CustomHeaderTitle,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Feed" component={HomeScreen} />
        <Stack.Screen name="UserProfile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CustomHeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{ width: 140, height: 40 }}
    />
  );
};

export default Navigation;
