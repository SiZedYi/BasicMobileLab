import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import eye_icon from '../assets/image/eye_icon.png'
import { RadioButton } from 'react-native-paper';
export default function Screen1e({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>REGISTER</Text>
      </View>
      <View style={styles.registerForm}>
        <View style={styles.textInput}>
          <TextInput value='Name' placeholder='Name'/>
        </View>
        <View style={styles.textInput}>
          <TextInput value='Phone' placeholder='Phone'/>
        </View>
        <View style={styles.textInput}>
          <TextInput value='Email' placeholder='Email'/>
        </View>
        <View style={styles.password}>
          <TextInput value='Password' placeholder='Password'/>
          <Image source={eye_icon} style={styles.eye}/>
        </View>
        <View style={styles.textInput}>
          <TextInput value='Birthday' placeholder='Birthday'/>
        </View>
        <View style={styles.radio}>
          <View style={styles.radioContainer}>
            <RadioButton/>
            <Text>Male</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton/>
            <Text>Female</Text>
          </View>
        </View>
      </View>
      <View>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Screen2a')}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#31AA5230'
  },
  heading:{
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 50
  },
  registerForm:{
    flexDirection:'column',
    margin: 20,
  },
  textInput:{
    backgroundColor:'#C4C4C4',
    width: 340,
    marginBottom: 20,
    paddingLeft: 20,
    height: 50,
    paddingTop: 10
  },
  password:{
    backgroundColor:'#C4C4C4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 340,
    paddingLeft: 20,
    marginBottom: 20
  },
  eye:{
    width: 50,
    height: 50,
    marginRight: 10
  },
  radio:{
    flexDirection:'row',
    alignItems: 'center',
    padding: 10
  },
  radioContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30
  },
  button:{
    width: 340,
    height: 50,
    backgroundColor: '#E53935',
    justifyContent:'center',
    marginBottom: 30
  },
  buttonText:{
    color: '#fff',
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23
  },
  text:{
    alignItems:'center',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400'
  }
});