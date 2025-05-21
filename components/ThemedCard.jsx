import { StyleSheet, View, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors' //Importerer farverne fra constants mappen
import React from 'react'

const ThemedCard = ({style, ...props}) => {
    const colorSheme = useColorScheme() //Henter farveskemaet fra systemet
    const theme = Colors[colorSheme] ?? Colors.light //Hvis der ikke er nogen farveskema, så brug dark temaet
  return (
    <View style = {[{
        backgroundColor: theme.uibackground}, styles.card, 
        style]}
    {...props}
    />  

  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    }
})