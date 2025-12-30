import { Tabs } from 'expo-router'
import React from 'react'

import { HapticTab } from '@/components/haptic-tab'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { getColors } from '@/constants/theme'
import { useColorScheme } from '@/hooks/use-color-scheme'
import CustomHeader from '@/components/main/CustomHeader'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import unit from '@/utils/dimensions'

export default function TabLayout () {
  const colorScheme = useColorScheme() ?? 'light'
  const Colors = getColors(colorScheme) as any

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
      <StatusBar style='light' />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.secondary,
          tabBarInactiveTintColor: '#ffffff80',
          headerShown: true,

          header: () => <CustomHeader />,
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarStyle: {
            backgroundColor: Colors.primary,
            height: 80,
            paddingTop: unit.windowHeight(0.008),
            justifyContent: 'space-between',
            width: '100%',
            alignSelf: 'center'
          }
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name='house.fill' color={color} />
            )
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name='paperplane.fill' color={color} />
            )
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name='paperplane.fill' color={color} />
            )
          }}
        />
         <Tabs.Screen
          name='pending'
          options={{
            href: null,
            title: 'pending',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name='paperplane.fill' color={color} />
            )
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
