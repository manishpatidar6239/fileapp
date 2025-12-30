import { Stack } from "expo-router";
import "react-native-reanimated";

export default function AuthLayout() {
  return (
   
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} /> 
      <Stack.Screen name="forgetpassword" options={{ headerShown: false }} />
    </Stack>
  );
}