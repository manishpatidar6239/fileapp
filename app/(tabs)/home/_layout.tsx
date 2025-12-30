import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
 
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
     
    </Stack>
  );
}