import { Text, View , StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import eye_icon from '../assets/image/eye_icon.png'
import facebook_icon from '../assets/image/facebook_icon.png'
import g_icon from '../assets/image/g_icon.png'
import zalo_icon from '../assets/image/zalo_icon.png'
export default function Screen1d({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>LOGIN</Text>
      </View>
      <View style={styles.loginInfo}>
        <View style={styles.email}>
          <TextInput value='Email' placeholder='Email'/>
        </View>
        <View style={styles.password}>
          <TextInput value='Password' placeholder='Password'/>
          <Image source={eye_icon} style={styles.eye}></Image>
        </View>
      </View>
      <View>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Screen1e')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>When you agree to terms and conditions</Text>
        <Text style={styles.text2}>For got your password?</Text>
        <Text style={styles.text1}>Or login with</Text>
      </View>
      <View style={styles.imgContainer}>
        <View style={styles.facebook}>
        <Image source={facebook_icon} style={styles.img}/>
        </View>
        <View style={styles.zalo}>
        <Image source={zalo_icon} style={styles.img}/>
        </View>
        <View style={styles.google}>
        <Image source={g_icon} style={styles.img}/>
        </View> 
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
  loginInfo:{
    flexDirection:'column',
    margin: 20,
  },
  email:{
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
    paddingLeft: 20
  },
  eye:{
    width: 50,
    height: 50,
    marginRight: 10
  },
  button:{
    width: 340,
    height: 50,
    backgroundColor: '#E53935',
    justifyContent:'center',
    marginTop: 30,
    marginBottom: 30
  },
  buttonText:{
    color: '#fff',
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23
  },
  textContainer:{
    marginHorizontal: 20,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    marginBottom: 40
  },
  text1:{
    textAlign:'center',
    marginBottom: 10
  },
  text2:{
    color:'#5D25FA',
    marginBottom: 10,
    textAlign: 'center'
  },
  imgContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  img:{
    width:50,
    height:50,
  },
  facebook:{
    borderWidth:1,
    borderColor:'#3b5998'
  },
  zalo:{
    borderWidth: 1,
    backgroundColor: '#1C9AC7',
    borderColor: '#1C9AC7'
  },
  google:{
    borderWidth: 1,
    borderColor: '#1C9AC7'
  }
});