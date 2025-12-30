import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react' 
 
import unit from '@/utils/dimensions'

const PendingScreen = () => {
  return (
   
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.textHead}>Pending (20)</Text>
         
    
        </View>
      </ScrollView>
  
  )
}

export default PendingScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: unit.windowWidth(0.04)
  },
  textHead: {
    fontSize: unit.windowWidth(0.06),
    fontWeight: 'bold',
    color: '#333',
    
  }
})
