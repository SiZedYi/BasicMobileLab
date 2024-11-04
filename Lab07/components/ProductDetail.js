 import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#E941411A'}}>
      <Image source='https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtyO8-hzRWne9Xt~N0ITku1LJDiWr8Uxmz15w05SLRQsjpvmEdvHd7NexC270bPV9R7bUBIYi8pmnxTPrfkn9HnzAEUh8x3WEdD7Zt4C-U1P-R1wGzul57K-0-gz4BksZgPajbptd8EUCSDz4GrdFWaggRR~2CUixrUlw9i4z4CAzLaeMND8BYA16Sclg4BX2qHOuumd3fdMxK1MIJzl~b10Wlf8i-2vW9wMoZ1yJmCTFZ4DR2tP6pFKXfVxvEmRlqlpOyduJrbwL0paNEVWl9yn33H0CR3sbNgq~CzqfCq33QxV0Pe07AbZY0EylS97lLC4hQzpRKPPcsbtWW7Yjw__' style={styles.image} />
      </View>
      <Text style={styles.title}>Pina Mountain</Text>
      <Text style={styles.price}>
        <Text style={styles.oldPrice}>15% OFF 350$</Text>
        <Text style={styles.newPrice}> 449$</Text>
      </Text>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.description}>
        It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="♥" color="#FF6347" />
        <Button title="Add to cart" color="#FF6347" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  oldPrice: {
    color: 'gray',
    marginRight: 50,
    fontSize: 20
  },
  newPrice: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 20,
    fontSize: 20

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default ProductDetail;