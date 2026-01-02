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
  },
  body1: {
    fontSize: unit.fontSize(1),
    fontWeight: '500',
    color: Colors.light.primary,  
  },
  subTitle:{
    fontSize: unit.fontSize(0.8),
    //  color: Colors.light.primary,
     color:'#000',
    fontWeight: '400',
  },
  
  detailTitle: {
    fontSize: unit.fontSize(1.1),
    color: Colors.light.text, 
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRowStart:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
   flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexColumnStart: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  flexColumnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
 

})
