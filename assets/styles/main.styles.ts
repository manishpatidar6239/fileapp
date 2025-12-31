// styles.ts

import { Colors } from '@/constants/theme'
import unit from '@/utils/dimensions'
import {
  StyleSheet
} from 'react-native'

// Type definition for styles

export const mainStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.background,
    // paddingVertical: unit.windowHeight(0.01),
    paddingHorizontal: unit.windowWidth(0.03),
    flex: 1,
  },
  headtext: {
    fontSize: unit.fontSize(1.3),
    fontWeight: 'bold',
    color: Colors.light.primary,
  
  }
})
