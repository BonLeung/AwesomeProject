import { Platform } from 'react-native'
import Screen from './Screen'

const X_Width = 375
const X_Height = 812

const XS_Width = 414
const XS_Height = 896

const isIOS = Platform.OS === 'ios'
export const isIphoneX = isIOS &&
  ((Screen.width === X_Width  && Screen.height === X_Height) || (Screen.width === XS_Width && Screen.height === XS_Height))

export const paddingIPXBottom = isIphoneX ? 34 : 0
export const iphoneBottomSpace = isIphoneX ? 34 : 0
export const sizeHeaderMarginTop = isIphoneX ? 35 : isIOS ? 20 : 0

// status bar
export const androidStatusbarHeight = 20
export const iosStatusbarHeight = isIphoneX ? 44 : 20
export const statusbarHeight = isIOS ? iosStatusbarHeight : androidStatusbarHeight

// navbar
export const navHeight = 44
export const iosNavHeaderHeight = navHeight + iosStatusbarHeight
export const androidNavHeaderHeight = navHeight + androidStatusbarHeight
export const navHeaderHeight = isIOS ? iosNavHeaderHeight : androidNavHeaderHeight
