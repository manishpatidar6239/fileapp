// styles.ts

import unit from '@/utils/dimensions'
import {
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
  ImageStyle
} from 'react-native'
import { useColorScheme } from 'react-native'
import { Colors, getColors } from '@/constants/theme'

// Type definition for styles

export const mainStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.background,
    // paddingVertical: unit.windowHeight(0.01),
    paddingHorizontal: unit.windowWidth(0.03)
  },
  headtext: {
    fontSize: unit.fontSize(1.4),
    fontWeight: 'bold',
    color: Colors.light.primary,
  
  }
})
