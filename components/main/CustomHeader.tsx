import { Colors } from '@/constants/theme'
import unit from '@/utils/dimensions'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemedText } from '../themed-text'
import { useThemeColor } from '@/hooks/use-theme-color'
import SearchBar from './SearchBar'
import SvgUri from 'expo-svg-uri'
import SafeScreen from '../SafeScreen'
const CustomHeader = () => {
  const router = useRouter()

  return (
    <View style={[styles.container]}>
      <View style={styles.innerContainer}>
        <View style={styles.logoSection}>
          <Image
            style={styles.logo}
            source={require('@/assets/images/01.png')}
          />
          {/* <Text>Atulit</Text> */}
          <View style={styles.logoText}>
            <ThemedText
              type='title'
              style={{ color: Colors.white, lineHeight: 24 }}
            >
              Atulit
            </ThemedText>
            <ThemedText type='default' style={{ color: Colors.white }}>
              Computer
            </ThemedText>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push(`/(auth)/login`)}
          style={styles.iconContainer}
        >
          <SvgUri
            width={30}
            height={30}
            source={require('@/assets/images/fluent-color--person-20.svg')}
          />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    width: '100%',
     paddingHorizontal: unit.windowWidth(0.03),
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: unit.windowWidth(0.003),
    borderBottomColor: Colors.light.primary,
    paddingVertical: unit.windowWidth(0.04), 
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: unit.windowWidth(0.02),
    width: '100%'
  },
  logo: {
    width: unit.windowWidth(0.15),
    height: unit.windowWidth(0.15),
    resizeMode: 'contain'
  },
  logoText: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    backgroundColor: Colors.white,
    padding: unit.windowWidth(0.02),
    borderRadius: unit.windowWidth(0.06)
  },
  icon: {
    width: unit.windowWidth(0.08),
    height: unit.windowWidth(0.08),
    borderRadius: unit.windowWidth(0.08),
    resizeMode: 'stretch'
  }
})
