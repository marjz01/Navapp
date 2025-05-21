import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from "../constants/colors"
import { StatusBar } from 'expo-status-bar'


const RootLayout = () => {
    const colorSheme = useColorScheme()
    const theme = Colors[colorSheme] ?? Colors.light //Hvis der ikke er nogen farveskema, så brug dark temaet


  return (
    <>
    <StatusBar value="auto" />
    <Stack screenOptions = {{
        headerStyle: {backgroundColor: theme.navBackground},
        headerTintColor: theme.title,

    }} >
        <Stack.Screen name="index" options={{title: 'Home'}} />
        <Stack.Screen name="about" options={{title: 'About'}} />
        <Stack.Screen name="contact" options={{title: 'Contact'}} />
    </Stack></>
  )
}

export default RootLayout

const styles = StyleSheet.create({})