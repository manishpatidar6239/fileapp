import { getColors } from '@/constants/theme'
import React from 'react'
import { Text, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AboutScreen = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const Colors = getColors(colorScheme) as any
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <View>
        <Text>About</Text>
      </View>
    </SafeAreaView>
  )
}

export default AboutScreen
