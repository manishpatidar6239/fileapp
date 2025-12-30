import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors, getColors } from '@/constants/theme'
import { StatusBar } from 'expo-status-bar' 

const AboutScreen = () => {
     const colorScheme = useColorScheme() ?? 'light'
      const Colors = getColors(colorScheme) as any
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
       
      <Text>About</Text> 
    </SafeAreaView>
  )
}

export default AboutScreen