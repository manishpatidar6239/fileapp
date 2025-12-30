import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { Stack } from 'expo-router' 
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/use-color-scheme'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/main/CustomHeader'

export const unstable_settings = {
  anchor: '(tabs)'
}

export default function RootLayout () {
  const colorScheme = useColorScheme()

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen
            name='pages/new-entry'
            options={{ header: () => <CustomHeader />,  }}
          />
          <Stack.Screen
            name='about'
            options={{ header: () => <CustomHeader /> }}
          />
          <Stack.Screen
            name='modal'
            options={{ presentation: 'modal', title: 'Modal' }}
          />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
