import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Card from '@/components/main/Card'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/theme'
import unit from '@/utils/dimensions'

const NewEntry = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.textHead}>Pending (20)</Text>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewEntry
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: unit.windowWidth(0.04)
  },
  textHead: {
    fontSize: unit.windowWidth(0.06),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: unit.windowWidth(0.02)
  }
})
