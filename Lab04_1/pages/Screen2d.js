import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function  Screen2d({navigation}) {
  const [isLowerCase, setLowerCase] = useState(false);
  return (
    <LinearGradient 
    colors={['#3B3B98', '#C4C4C400']}
    start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
    style={styles.container}>
      <View style={[styles.blueBg, styles.flex_1]}>
        <View style={[styles.flex_1, styles.center]}>
          <Text style={[styles.whiteText, styles.mediumText]}>PASSWORD GENERATOR</Text>
        </View>

        <View style={[styles.flex_1, styles.center]}>
        </View>

        <View style={[styles.flex_2, styles.center]}>
          <View>
            <Text style={[styles.title]}>Password length</Text>
            
          </View>

          <View>
            <Text style={[styles.title]}>Include lower case letters</Text>
            <CheckBox
              disabled={false}
              value={isLowerCase}
              onValueChange={(newValue) => setLowerCase(newValue)}
              // style={styles.checkbox}
             />
          </View>

          <View>
          <Text style={[styles.title]}>Include upcase letters</Text>
          </View>

          <View>
          <Text style={[styles.title]}>Include number</Text>
          </View>

          <View>
          <Text style={[styles.title]}>Include special symbol</Text>
          </View>

        </View>

        <View style={[styles.flex_1, styles.center]}>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:18,
  },
  row: {
    flexDirection: 'row'
  },
  flex_1: {
    flex: 1,
    marginBottom: 20
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  title: {
    color: 'white',
    fontSize: 20,
    // fontWeight: 'bold'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputBox: {
    paddingHorizontal: 20,
    paddingTop: 5
  },
  mediumText: {
    fontSize: 35
  },
  blueBg: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#23235B',
    borderRadius: 10,
  },
  whiteText: {
    color: 'white'
  }
});