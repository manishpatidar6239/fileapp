import { mainStyles } from '@/assets/styles/main.styles'
import { Colors } from '@/constants/theme'
import unit from '@/utils/dimensions'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const ScreenHead = ({ title, item_num }: { title: string; item_num?: string }) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Link
              target="_blank" 
              href={'/home'}
              onPress={async () => {}}
              >
          <MaterialIcons name='keyboard-backspace' size={24} color={Colors.light.primary} />
        </Link>
        <Text style={[mainStyles.headtext,{paddingLeft:unit.windowWidth(0.02)}]}>{title} ({item_num})</Text>
      </View>
     <MaterialIcons name="filter-list" size={24} color="black" />
    </View>
  )
}

export default ScreenHead

const styles = StyleSheet.create({
  container:{
    paddingVertical:unit.windowHeight(0.02),
    backgroundColor: Colors.light.background,
     paddingHorizontal: unit.windowWidth(0.03),
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
  }
})
