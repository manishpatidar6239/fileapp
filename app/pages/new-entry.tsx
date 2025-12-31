import { Colors } from '@/constants/theme'
import unit from '@/utils/dimensions'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
