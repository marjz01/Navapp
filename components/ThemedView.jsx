import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors' //Importerer farverne fra constants mappen
import React from 'react'

const ThemedView = ({style, persons, ...props}) => {
    const colorSheme = useColorScheme() //Henter farveskemaet fra systemet
    const theme = Colors[colorSheme] ?? Colors.light //Hvis der ikke er nogen farveskema, så brug dark temaet
  return (
    <View style = {[{
        backgroundColor: theme.background}, style]}
    {...props}
    />  

  )
}

export default ThemedView