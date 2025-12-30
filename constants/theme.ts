/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native'

const tintColorLight = '#fff'
const tintColorDark = '#fff'
export const Colors = {
  tabBarActiveTintColor: '#fff',
  background: '#F5F5F5',
  white: '#fff',
  black: '#000',
  green: '#63aa00',
  darkGreen: '#437004',
  red: '#EB2A05',
  gray: '#98A2B3',

  light: {
    // primary: '#fd9811',
    primary: '#002060',
    secondary: '#fcb71d',
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    myColor: '#ff0000',
    gray300: '#98A2B3',
    // gray200: '#A5A5A5',
    gray200: '#c6c6c6ff',
    gray100: '#eee',
    shadow: '#000000'
  },

  dark: {
    primary: '#fd9811',
    secondary: '#fcb71d',
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    myColor: '#0066ee',
    gray300: '#98A2B3',
    gray200: '#A5A5A5',
    gray100: '#e0e1e4ff'
  }
}

export const getColors = (colorScheme: 'light' | 'dark') => {
  return colorScheme === 'dark' ? Colors.dark : Colors.light
}

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace'
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace'
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  }
})
