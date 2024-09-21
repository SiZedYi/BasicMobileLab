import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// Component Button tùy chỉnh
const CustomButton = ({ title, color, bgColor, customStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }, customStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
