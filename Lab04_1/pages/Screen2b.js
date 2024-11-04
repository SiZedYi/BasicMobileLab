import {  View, StyleSheet, Text, Image} from 'react-native';

export default function Screen2b({navigation}) {
  return (
    <View style={styles.container}>

      {/* HEading  */}
      <View style={[styles.flex_1, styles.row]}>
        <View style={[styles.flex_1]}>
        <Image source={require('../assets/image/usb.png')} ></Image>
        </View>
        <Text style={[styles.flex_2, styles.title]}>USB Blutooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>

      {/* Rate */}
      <View style={[styles.flex_1, styles.center]}>
        <Text style={styles.title}>Cực kỳ hài lòng</Text>
        <View style={[styles.row]}>
          <Image style={styles.marginLR} source={require('../assets/image/star.png')}></Image>
          <Image style={styles.marginLR} source={require('../assets/image/star.png')}></Image>
          <Image style={styles.marginLR} source={require('../assets/image/star.png')}></Image>
          <Image style={styles.marginLR} source={require('../assets/image/star.png')}></Image>
          <Image style={styles.marginLR} source={require('../assets/image/star.png')}></Image>
        </View>
      </View>

      {/* Add Image  */}
      <View style={[styles.flex_1, styles.center, styles.borderBlue, styles.row]}>
        <Image style={styles.marginLR} source={require('../assets/image/camera.png')}></Image>
        <Text style={styles.title}>Thêm hình ảnh</Text>
      </View>

      <View style={[styles.flex_3,styles.inputBox, styles.borderGray]}>
        <Text style={styles.mediumText}>Hãy chia sẻ những điều mà bạn thích về sản phẩm</Text>
        <Text style={styles.bottomRightText}>http://meet.google.com/nsj-ojwi-xpp</Text>
      </View>

      <View style={[ styles.center, styles.blueBg]}>
        <Text style={[styles.title, styles.whiteText]}>Gửi</Text>
      </View>
    </View>
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
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  marginLR: {
    marginHorizontal: 10,
    marginTop: 10,
    width: 50,
    height: 50
  },
  borderBlue: {
    borderColor: '#1511EB',
    borderWidth: 2,
    borderRadius: 10
  },
  borderGray: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10
  },
  inputBox: {
    paddingHorizontal: 20,
    paddingTop: 5
  },
  mediumText: {
    fontSize: 20
  },
  bottomRightText: {
    position: "absolute",
    bottom: 16,
    right: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  blueBg: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#0D5DB6',
    borderRadius: 10,
  },
  whiteText: {
    color: 'white'
  }
});