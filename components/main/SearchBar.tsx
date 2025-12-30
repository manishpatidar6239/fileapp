import { Colors } from '@/constants/theme'
import unit, { fontSizes } from '@/utils/dimensions'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

const SearchBar = () => {
  return (
    <>
      <View style={styles.searchBox}>
        <TextInput
          placeholder='Search your laptop'
          placeholderTextColor={Colors.light.primary}
          style={[styles.input]}
        />
        <Feather
          style={styles.searchicon}
          name='search'
          size={24}
          color='black'
        />
      </View>
    </>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBox: {
    width: '100%',
    // paddingHorizontal: unit.windowWidth(0.06),
    paddingTop:unit.windowHeight(0.02),
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
  },
  searchicon: {
    position: 'absolute',
    right: 16,
    top: unit.windowHeight(0.037)
  },

  input: {
    width: '100%',
    backgroundColor: Colors.light.gray100,
    borderRadius: 10,
    paddingVertical: unit.windowHeight(0.020),
    paddingHorizontal: unit.windowWidth(0.04),
    fontSize: fontSizes[12],
    color: Colors.light.primary,
    borderWidth: 1,
    borderColor: Colors.light.gray200,
    paddingEnd: unit.windowWidth(0.12),
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: unit.windowHeight(0.02),
    borderRadius: unit.windowWidth(0.03),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.light.primary,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: fontSizes[14],
    letterSpacing: 1
  }
})
