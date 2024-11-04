import { Text, View, StyleSheet, Image, TouchableOpacity,  FlatList, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import  axios from 'axios';
import { Rating, AirbnbRating } from 'react-native-ratings';
const ProductItem = ({ item }) => {
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>   

        <View style={styles.ratingContainer}>
          <Rating
            type='star'
            ratingCount={5}
            imageSize={20}
            onFinishRating={this.ratingCompleted}
          />
        </View>
        <Text style={styles.price}>
          {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          <Text style={styles.discount}>-{item.discount}%</Text>
        </Text>
      </View>
    </View>
  );
};

const ProductList = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2} // Hiển thị 2 cột sản phẩm
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default function Screen4b() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/left-arrow.png")}/>
        <View style={{flexDirection:'row', alignItems: "center"}}>
          <Image style={{width:40, height: 40, marginRight: -20,}} source={require('../assets/Search.png')} />
          <TextInput
          style={styles.input}
          placeholder="Dây cáp USB"
          />
        </View>
        <Image style={styles.logo} source={require("../assets/bi_cart-check.png")}/>
        <Image style={styles.logo} source={require("../assets/More.png")}/>

      </View>
     
      <View style={styles.content}>
      <ProductList products={products} />
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  header: {
    backgroundColor: "#1BA9FF",
    width: "100%",
    justifyContent: "space-around",
    alignItems:"center",
    flex:1,
    flexDirection: "row",
  },
  content: {
    flex: 15
  },
   input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    height: 30,
    width: 30,
  },
  productItem: {
    flex: 1/2,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius:   
 3.84,
    elevation: 5,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  price: {
    fontSize: 14, 
    fontWeight: 'bold',
  },
  discount: {
    color: 'gray',
  },
  columnWrapper: {
    justifyContent: 'space-between', // Điều chỉnh khoảng cách giữa các cột
  },
});


const products = [
  {
        "image": "https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPID3U-HOPXMi3m76EDypLvrilXwzuaLkTd2~yRmlTuE7ubKrLL8ExASQMvMZtFUK~PkSiG~yPA3rbfGyn5OHFpwsbFlhj6BRKik75CIbEl5NyGLH7iHCzc0w0~6jZW1vlS6~0Jvysqz68~ATa1MpmjYw6PvonrPNSHH9ZhGuKINMFNhZierEjCmSliKyn7hLO-Z3quK3eCXdAq-0bwb8Ylr5gf-NnM8kPiXql4sDmIs47Pfq8Rl3dP39WSNL8Hmcg8PPg12DjueLzNSWe6-4L-wZ1YX6S9jIHJQoeT-QNKryFcaz2BkYxZiX0G8eL1GLlzZ4SQi5IAUn6Xru8AT6g__",
        "title": "Cáp chuyển từ Cổng USB sang PS2...",
        "rating": 22,
        "price": 30,
        "discount": 32,
        "id": "1"
    },
    {
        "image": "https://s3-alpha-sig.figma.com/img/c12d/6fdf/653e7955fdd212ca1c4f3e84a556faf8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JittBCWb8mNV3BK~QVgpHP6O-08NmnuBQhXkzrjByz0neRg~7x0OnR-KTIzJzVuyvnBQbbVYH0fqyXRm3TwVl1GNRS-kNZ3vfopvqYjt4esHjg1JLw~i35pwqzBV3Dxh9CfACXBg8zIYhadRT11DLJpYMQNVDGi4QHvRc1ZhnAWlfm0UlMxgWWHRd8Teq1RoX~oHZjBhj8uq98mof7rB6bCbFwkq3jksYlA1e39cg5LRHbiytUzI33-2swTAhhzKDnSda0qYcc1MT~dyGKIJPj-e-lQP3lnvKDrbVrg-ObtdMzYOMCPaGPnQqoqmPodGs6~KIdvB~VlQZ~dg2LatZw__",
        "title": "Cáp chuyển từ Cổng USB sang PS2...",
        "rating": 0,
        "price": 13,
        "discount": 17,
        "id": "2"
    },
    {
        "image": "https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etyGPohqz8WaP3QHRrbA9Wk5zFirO6b65CHuzNt4Ssz0d77Jy6JAzw6R4KDLdY3MdTesrrz2sl-OXwLCcQAaQ~u1KHuDuQf8WzQPYzcuqjVG~RiLtkooGLWLELwlCC-zJDZQNrcMdaXvFG~sz6-tfDVUf3qoV81L5ohGpnEZAV56OLyJUpyvBkzAqcHJIDde--AtBlZ0uNiVIZPQQ2PYkJo3k~DvPRZXkOq0sdQW412CeW2pdMg4iuu14JnkGKm4SMyX8cXd0HfXdf1F8uny0IIFIAjJt7-FreQGW3jSm1-6x4bvpXxqkjFW3L~amSPj8UIwZpumxGCRBB-jcf~xcw__",
        "title": "Cáp chuyển từ Cổng USB sang PS2...",
        "rating": 39,
        "price": 5,
        "discount": 67,
        "id": "3"
    },
    {
        "image": "https://s3-alpha-sig.figma.com/img/160f/3e8a/05ab63a7c5f544ef7b8f5c6c6e5d1265?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UqSWV4Y5roS6jEjAriaGsrGA5Bwsg-sDzM2vPDD7APcGd-vrUXx3mgEniAIDB2jf5LLbd2am0HMq6ECo08NaL9WPNjlmEfpfl39CeSAoJY1lv5lcWWE6fnyj0tko6AhyIWnWbvWS0VntjwT3kEsbtJrm12oTqWjZL2by5rR35ojkksgofuzxFvg0O~9zycmLZQP0KzA3xO6C6cMDEaNINJoMGjhAVD7rb9g4MxZWv-e6VJDaghKJYAnO~2aYsW5SEHZk8ZxyUGN0jT9EDd5Xpgta3Zl4tRw536AyIiu3XRBgAfltVggeligH4pZs1letU9YAww9shTw-VYBykbR99w__",
        "title": "Cáp chuyển từ Cổng USB sang PS2...",
        "rating": 39,
        "price": 5,
        "discount": 67,
        "id": "3"
    },
    {
        "image": "https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cu4QDH2J8FWvqwt9fGnmEQ4HAMQvKd70gwUOIuyAIbDfCXiH1Fcg5agJPyPN~Mwql9YDA2EAmnMBu0080xes8wCVcMrJ49WySW4OFTYkRInoScsQRcXm~LPkth9VR0wzxyIQsanIFzkA0HDNHHcWsPAm-SChvJsnLaZEo-s0sWZDLhjWcs5tcA4LBnX6OWh2w4GvGFGY0bp9x0IICQb~Q9lYVcYW8mAtSEXC6YR7TrkXNBRCl060icPH8OAKDNvckyZbe4bfyDXnx7-ZMVyUEpkmKQ955HdpVez~YMzTAlzT3ndEtJpIHY2GEPc51xczUWl1xLYHYLY8scT5Ujx~jA__",
        "title": "Cáp chuyển từ Cổng USB sang PS2...",
        "rating": 39,
        "price": 5,
        "discount": 67,
        "id": "3"
    },
    {
        "image": "https://s3-alpha-sig.figma.com/img/d41c/7988/b78d982cc3ffe7fef9c3256310825f19?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8wAyJNgZYBmAg410v9d8vzNpqXI~ZdS0swRv1GwawzP6CyMvJ~TxxRd1~H13wPlPYcbG0OZrBEvOxzImSJCJJ5gNFxLIYpVzRDT70TKzkohSEOI6bpuo7Ug2LPBD~WRdl9ajImeZCAFEABNX8JgB-TdTo4MSnPiTjQ3GGtI6DFwXfeEU4e0ZJgKcYK7A58orriYuKGR6fjB2tyWgMhKIDesl-7-cbwaFjwT8ljbKxzCQfhgLFk3QKe23Pbh9tcywnSYWTHYX6fK4EZQvdsIehz2wOSRr3XrDDsfAWGkMEI7OJIItoTuc69jZPduU2JsAXHFHNCzHQWJEV~bFLqiCA__",
        "title": "Cáp chuyển từ Cổng USB sang PS2...",
        "rating": 39,
        "price": 5,
        "discount": 67,
        "id": "3"
    }
];
