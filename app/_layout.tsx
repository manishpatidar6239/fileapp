import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import 'react-native-reanimated'

import CustomHeader from '@/components/main/CustomHeader'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
            options={{ header: () => <CustomHeader /> }}
          />
          {/* CancelledScreen */}
          <Stack.Screen
            name='pages/cancelled'
            options={{ headerShown: false }}
          />

          {/* PendingAmoutScreen */}
          <Stack.Screen
            name='pages/pending-amount'
            options={{ headerShown: false }}
          />

          {/* DeliveredScreen */}
          <Stack.Screen
            name='pages/delivered'
            options={{ headerShown: false }}
          />

          {/* ReceivedScreen */}
          <Stack.Screen
            name='pages/received'
            options={{ headerShown: false }}
          />

          {/* DetailsScreen */}
          <Stack.Screen
            name='detail/[id]'
            options={{ headerShown: false }}
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
