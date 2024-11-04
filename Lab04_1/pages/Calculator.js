import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Calculator = () => {
    const [numberList, setNumberList] = useState([1,2,3])
    const handleIncreaseButton = () => {
        const updatedNumberList = numberList.map(number => number + 1);
        setNumberList([...numberList,...updatedNumberList]);
    }
    const handleClearButton = () => {
        setNumberList([1,2,3])
    }
  return (
    <View>
        <Button title='INCREASE' onPress={handleIncreaseButton}></Button>
        <Button title='CLEAR' onPress={handleClearButton}></Button>

        {numberList.map(( number, index) => {
            return <Text key={index}>{number}</Text>
        })}
    </View>
     
  )
}

export default Calculator

const styles = StyleSheet.create({})