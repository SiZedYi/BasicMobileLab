import { useState } from "react";
import { View, StyleSheet, Text, Image, Button, TouchableOpacity } from "react-native";

const basePrice = 141.800
export default function Screen2c({ navigation }) {
  const [quantity, setQuantity] = useState(1);  

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  return (
    <View style={styles.flex_1}>
      {/* Heading  */}
      <View style={[styles.flex_2,  styles.container]}>
        <View style={[styles.flex_3, styles.row]}>
          <View style={{width: '40%'}}>
            <Image
              source={require("../assets/image/book.png")}
              style={{ minWidth: 110, minHeight: 140 }}
            />
          </View>
          <View style={{width: '60%'}} >
            <Text style={[styles.title]} >Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={[styles.title]}>Cung cấp bởi Tiki Trading</Text>
            <Text style={[styles.salePriceText]}>{basePrice.toFixed(3)}đ</Text>
            <Text style={[{textDecorationLine: 'line-through'}]}>141.000 đ</Text>
            
            <View style={[styles.row]}>
              <TouchableOpacity
                style={[styles.button, quantity <= 1 && styles.disabledButton]}
                onPress={handleDecrease}
                disabled={quantity <= 1}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityText}>{quantity}</Text>

              <TouchableOpacity style={styles.button} onPress={handleIncrease}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>

              <Text style={[{color: 'blue', position:'absolute', right: 5}]}>Mua sau</Text>
            </View>
          </View>

        </View>

        <View style={[styles.flex_1, styles.row, {paddingTop: 20}]}>
          <Text style={[styles.title, styles.flex_1]}>Mã giảm giá đã lưu</Text>
          <Text style={[{color: 'blue'}, styles.flex_1]}>Xem tại đây</Text>
        </View>

        <View style={[{flex: 1}, styles.row]}>
          <View style={[{borderColor: 'grey', borderWidth: 1, paddingHorizontal:50, paddingVertical: 5, marginRight: 20}, styles.row]}>
            <View style={{backgroundColor: '#F2DD1B',width: 50, height:20, marginRight: 10,marginTop: 5}}></View>
            <Text style={{color: 'black', fontSize: 20, fontWeight: "bold"}}>Mã giảm giá</Text>
          </View>

          <Button title="Áp dụng" color={'#0A5EB7'}></Button>
        </View>
      </View>

      <View style={[styles.flex_1]}>
        <View style={{flex:1}}></View>
        <View style={[{flex:2, backgroundColor:'white',alignItems:'center'},styles.row]}>
          <Text style={{color: 'black', fontWeight:'bold'}}>    Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{marginLeft:30,color: 'blue'}}>Nhập tại đây</Text>
        </View>
        <View style={{flex:1}}></View>
        <View style={[{flex:2, backgroundColor:'white',justifyContent:'space-between',alignItems:'center'},styles.row]}>
          <Text style={{color: 'black', fontWeight:'bold', marginLeft:20}}>TẠM TÍNH</Text>
          <Text style={[styles.salePriceText,{marginRight:30}]}>{(basePrice*quantity).toFixed(3)}đ</Text>
        </View>

      </View>
      <View style={[styles.flex_1, styles.row]}> 
      </View>
      <View style={[styles.flex_1, {backgroundColor:'white'}]}>
        <View style={[{flex:1, alignItems: 'center', justifyContent:'space-between'}, styles.row]}>
          <Text style={{marginLeft:20}}>Thành tiền</Text>
          <Text style={[{marginRight:30},styles.salePriceText]}>{(basePrice*quantity).toFixed(3)}đ</Text>
        </View>
        <Button title="TIẾN HÀNH ĐẶT HÀNG" color={'#E53935'}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: "row",
  },
  flex_1: {
    flex: 1,
    marginBottom: 20,
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  title: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  salePriceText: {
    color: 'red',
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: 'gray',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#d3d3d3', // Màu xám nhạt khi bị disable
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  quantityText: {
    marginHorizontal: 15,
    fontSize: 18,
    color: 'black'
  },
});
