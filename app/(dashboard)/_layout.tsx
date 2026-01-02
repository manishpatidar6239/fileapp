import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const DashboardLayout = () => {
  return (
     <Stack initialRouteName="index">
         <Stack.Screen name="index" options={{ headerShown: false }} />
       
       </Stack>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})