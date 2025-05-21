import { StyleSheet, Text, View , useColorScheme} from 'react-native'
import React from 'react'
import {Link} from 'expo-router' //Importerer Link fra expo-router, som gør det muligt at navigere mellem skærme i appen
import { Colors } from "../constants/colors"
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'


const About = () => {
    const colorSheme = useColorScheme()
        const theme = Colors[colorSheme] ?? Colors.light //Hvis der ikke er nogen farveskema, så brug dark temaet
    
  return (
    <ThemedView style = {[styles.container, {backgroundColor: theme.background}]}> 

      <ThemedText style = {styles.title}>About Page</ThemedText>

      <Link href="/" style = {styles.link}>
      <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

},
title:{
    fontWeight: 'bold',
    fontSize: 18
},
link:{
    marginVertical: 10,
    borderBottomWidth: 1

}

})