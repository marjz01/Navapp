import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from 'expo-router' //Importerer Link fra expo-router, som gør det muligt at navigere mellem skærme i appen
import React from 'react' //Importerer React biblioteket
import Logo from '../assets/img/gift2img.png'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style = {styles.container}>  
   
    <Image source={Logo}  />
        <Spacer height={20}/>
    

        <ThemedText style = {styles.title} title={true}>
            The number 1</ThemedText>

        <Spacer height={20}/>
        <ThemedText> Nav app</ThemedText>
        <Spacer/>

        <Link href="/about" style = {styles.link}> 
       <ThemedText> About Page </ThemedText>
        </Link>
        <Link href="/contact" style = {styles.link}> 
       <ThemedText> Contact Page </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Home

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