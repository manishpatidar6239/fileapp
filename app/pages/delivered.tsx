import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { mainStyles } from '@/assets/styles/main.styles'
import Card from '@/components/main/Card'
import ScreenHead from '@/components/main/ScreenHead'
import { getColors } from '@/constants/theme'
import LaptopData from '@/data/data.json'
import { useColorScheme } from '@/hooks/use-color-scheme'
import unit from '@/utils/dimensions'

const DeliveredScreen = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const Colors = getColors(colorScheme) as any
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
      <StatusBar style='dark' />
          <ScreenHead  title="Delivered Items" item_num={LaptopData.length.toString()}/>
      <View style={ mainStyles.container}>
        
        <View style={{}}>
          <FlatList
            data={LaptopData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Card item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding: unit.windowHeight(0.003)}}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DeliveredScreen

const styles = StyleSheet.create({})
