import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import eye_icon from '../assets/image/eyeball_png.png'
import facebook from '../assets/image/facebook_icon.png'
import person from '../assets/image/person_icon.png'
import wifi_icon from '../assets/image/wifi_icon.png'
import username_icon from '../assets/image/username_icon.png'
import lock_icon from '../assets/image/lock_icon.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={eye_icon}
        style={styles.eyeImage}
      />
      <View style={styles.inputWrapper}>
        <Image source={username_icon}/>
        <TextInput
          placeholder="Please input user name"
          style={styles.inputField}
          underlineColor="#C4C4C4"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Image source={lock_icon} />
        <TextInput
          placeholder="Please input password"
          style={styles.inputField}
          underlineColor="#C4C4C4"
        />
      </View>
      <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherLoginMethodContainer}>
        <Text style={styles.line}>________________</Text>
        <Text style={styles.otherLoginText}>Other Login Methods</Text>
        <Text style={styles.line}>________________</Text>
      </View>
      <View style={styles.otherLoginMethods}>
        <TouchableOpacity>
          <Image source={person} style={styles.methodIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={wifi_icon} style={styles.methodIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={facebook} style={styles.methodIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  eyeImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  inputField: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  button:{
    width: 350,
    height: 50,
    backgroundColor: '#386FFC',
    justifyContent:'center',
    marginBottom: 30,
    borderRadius: 5
  },
  buttonText:{
    color: '#fff',
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40
  },
  linkText: {
    color: '#000',
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '400'
  },
  otherLoginMethodContainer:{
    flexDirection: 'row',
    marginBottom: 40
  },
  line:{
    color: '#0E18F5',
    textAlign: 'center',
    paddingTop: 5,
  },
  otherLoginText: {
    color: '#000',
    marginVertical: 10,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21
  },
  otherLoginMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  methodIcon: {
    width :80,
    height: 80
  }
});