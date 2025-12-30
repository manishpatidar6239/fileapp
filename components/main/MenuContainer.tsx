import React from 'react'
import { Colors } from '@/constants/theme'
import unit, { fontSizes } from '@/utils/dimensions'

import SvgUri from 'expo-svg-uri'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

interface MenuContainerProps {
  data: {
    key: string
    name: string
    img: any
    bgColor: string
    url: () => void
    icons: React.JSX.Element
  }[]
  maxRows?: number
  numOfLines?: number
}

const MenuContainer = ({ data }: MenuContainerProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={item.url}
              style={[styles.itemContainer, { backgroundColor: item.bgColor }]}
              activeOpacity={0.9}
            >
              <View style={styles.imageContainer}>
                <SvgUri width={45} height={45} source={item.img} />
              </View>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default MenuContainer

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.background,
    paddingVertical: unit.windowHeight(0.01),
    paddingHorizontal: unit.windowWidth(0.03)
  },

  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: unit.windowHeight(0.01),
    gap: unit.windowWidth(0.02)
  },

  itemContainer: {
    width: unit.windowWidth(0.3),
    height: unit.windowHeight(0.13),
    borderRadius: unit.windowWidth(0.025),
    paddingHorizontal: unit.windowHeight(0.02),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: unit.windowHeight(0.001)
  },

  image: {
    width: unit.windowWidth(0.14),
    height: unit.windowHeight(0.045),
    resizeMode: 'contain'
  },

  itemText: {
    fontSize: fontSizes[11],
    fontWeight: '500',
    color: Colors.light.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: unit.windowHeight(0.01)
  },

  showMoreButtonWrapper: {
    alignSelf: 'center',
    marginTop: unit.windowHeight(0.015)
  },

  showMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
    paddingVertical: unit.windowHeight(0.014),
    paddingHorizontal: unit.windowWidth(0.1),
    borderRadius: unit.windowWidth(0.04),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6
  },

  showMoreText: {
    color: Colors.white,
    fontSize: fontSizes[12],
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.6,
    textTransform: 'uppercase'
  }
})
