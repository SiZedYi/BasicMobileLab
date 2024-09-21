import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'; 

const Screen1a = ({navigation}) => {
  return (
    <View style={styles.blueBg}>
        <View style={[styles.flex2, styles.centerDiv]}>
          <Image
            style={styles.img}
           source={require('../assets/image/Ellipse8.png')}></Image>

        </View>
        <View style={[styles.flex1, styles.centerDiv]}>
          <Text style={styles.header1}>
              <Text style={styles.header1}>{`GROW\n`}</Text>
              <Text style={styles.header1}>YOUR BUSINESS</Text>
          </Text>
        </View>
        <View style={[styles.flex1, styles.centerDiv]}>
            <Text style={styles.textNormal}>{`We will help you to grow your business using online server`}</Text>
        </View>
        <View style={[styles.flex2, styles.flexRow, styles.spacingDiv]}>
          <CustomButton
            title={'LOGIN'}
            color="#000"                
            bgColor="#E3C000"           
            customStyle={{ height: 50 }} 
            onPress={() => navigation.navigate('Screen1d')}
          />
          <CustomButton
            title={'SIGN UP'}
            color="#000"                
            bgColor="#E3C000"           
            customStyle={{ height: 50 }} 
            onPress={() => navigation.navigate('Home')}
          />
          
        </View>
        <View style={[styles.flex1, styles.centerDiv]}>
          <Text style={styles.textNormal}>HAVE YOU WORK?</Text>
        </View>
    </View>
  )
}

export default Screen1a

const styles = StyleSheet.create({
    blueBg: {
        flex: 1,
        backgroundColor: '#00ccf9'
    },
    flex2: {
      flex: 2
    },
    flex1: {
      flex: 1
    },
    flexRow: {
      flexDirection: 'row'
    },
    header1: {
      fontSize: 25,
      color: 'black',
      fontWeight: '700',
      textAlign: 'center',
      maxWidth:200
    },
    textNormal: {
      fontSize: 17,
      color: 'black',
      textAlign: 'center',
      maxWidth:'80%'
    },
    centerDiv: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    spacingDiv: {
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    img: {
      width: 130,
      height: 130
    },
    yellowButton: {
      backgroundColor: '#E3C000'
    }
})