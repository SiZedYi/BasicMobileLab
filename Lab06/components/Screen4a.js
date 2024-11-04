import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ProductItem = ({ product }) => {
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productShop}>{product.shop}</Text>  
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductList = () => {
  const [productAs, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://67020a8db52042b542d90f16.mockapi.io/lab06/store'
        );
        setProducts(products);
      } catch (error) {
        console.error('Lỗi khi fetch dữ liệu:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem product={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default function Screen4a() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/left-arrow.png')}
        />
        <Text style={{ color: '#fff', fontSize: 23 }}>Chat</Text>
        <Image
          style={styles.logo}
          source={require('../assets/bi_cart-check.png')}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop
        </Text>
      </View>
      <View style={styles.content}>
        <ProductList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    backgroundColor: '#1BA9FF',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 15,
  },
  logo: {
    height: 30,
    width: 30,
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    borderBottomWidth: 1,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    width: 200,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productShop: {
    color: 'gray',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
  },
  chatButtonText: {
    color: 'white',
  },
});

const products = [
  {
    id: '1',
    image:
      'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGJ7pvFmFDyknt0ESvTXX~4o22M5VzwndovXwZVXNeSPPcHvKVlEGFZkpIVDNxBYv6rj8OtBRJV0hEM63v5mt1hsoS6vp-YHrKs4yL0gLGx~eK4ZnMDX3Ww53da68yMUyT~su5JpOLlx4yCWqVIeCx6cIaB0uOnyTi81HJdBgv3gu6hrBnhouACbRxdxoqEcrZ7A5NWZXubqQrx8au5oDj1IQlISmhzM~ikhrtNgKB4KxbQxKFgobQYEICQX~L40IOT8WSRBcpWnXr16TMUedPJr9WhNugFjulkUETUgdEHPEVYz~P8zVN~KgVPLxH5De2Nx~p~Eoye06KQIu7fguw__',
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
  },
  {
    id: '2',
    image:
      'https://s3-alpha-sig.figma.com/img/9949/f5a2/338eb97e0752d7d1bd66b35ca4e36b72?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PwyAWLD5RKGKjUiS1mJ2K9Yao4czl0fJfknLyuZVPKcG4Dv8SWVfw9b~6fTuvj3B48v-mf639JLQSzKMNhcgO5ll8jCk4emFDvQlvB9J0Cc57szAGQPXDtj9qMQl7fw9LBgi0S12OSTyEadWDf805O01KNOlj96qJ0Fdn8RwskJNKLq3x5L-3gJ4xNgBTrpplQBnMUBkhBs0rMPPrEhkDA7~lisdGIegdU85ZUZj9MfFjLkn6nQ6ZGIJIiNGUbICp0HjtiF9vZthGpYC9Iz6WmSolBCYv~zJW7nrbt7qO7znCI1ZpG1K2bacxdT8A2VxFypvBABb0okZTb5tfRgx1A__',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
  },
  {
    id: '3',
    image:
      'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dO-DbGXb18eze2xCdVetM5qvaNgntZoiwjiAewjSiJnWLGhKHAHVZW5dtMhETFx4v4DcSc7AmWejwmdy0PLOgoIrZnLZ9-uE1e9n5KIMwHvboWWGQPyeHy56qpw8k8f3Nrxr7Oh2cgfSBFpYBmH0O0nhGt5whrVRlFNvPT7ScvvJ5L6yJnGQhhfpbN8oaua6GLgf5pQPcodH8IPhB8sC~JcTULbujGh~j-6YVqYBjhApzkR-FE8Q~16VCKlA2bhC414p8srnUJYSPkqWC2GejSomJjLKcL9Z8ykgWLgVNJEDFhmy32t87H19s9bMCtuBRGsACOSFYrexBLDmeC3nog__',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop LTD Food',
  },
  {
    id: '4',
    image:
      'https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEZX~CKazgc2uv-8aXiE6b~yzSVuGc5R75bDhdnUUz0wISUW6u03pDOfOeSW6TmAxJZ27i8KRCuPodZRV7V5TQxEtWQro6rTDuduza4HRD5YTZMe3Z3aozoCd~tfmBi822KEXl5AXM3rIq9uyzAGwTspfguVGtMP~NP0nvUDu6ACKs2LSt-K2tHajQYiFpSsDRK-8X4ScJ9HOGYj4RXGzIGCGVWxlzQSzXrY8huTRJku9cMTaGThqtGWfwRR5qNIyuMg0LOxsEGqSTS03Ln1DUpIm9LRk2-4pbKTeYDSTEHK7zMblmwsZ2TBhRH0vj0Z5f99RzHqnyYHezXdG4tSlQ__',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop LTD Food',
  },
  {
    id: '5',
    image:
      'https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p3pgmgg4uIBDpGRuu3Wil3ZfAS8sFaeQeyjBN9iknFo8fV3gD2Dok5Tx-h4pTbERepEkqM9W145OLpeWqTBefKFbbzGIgXwSsgCzAz-z~TCbtRG7UJajiZ7SBp2L6vuhT1~APedRMTkJVSWfam0870YuaXt2XxGg44IWgbKwTwgVZVQwMLTphcb72-XD0zOIDRqZ5smmAF~EbwALbEHbRGHollhGVD74CzmRorwMQZynv1pgNia4qrZ1aq1dITghurO-ufzh~dcYQsDOA4YHSB3TK5HMMxqChzjbcWsPS25NAEkksvoLTN5c4jWjo-xkssD2IocjAqVFZ~AnRhcz2Q__',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop LTD Food',
  },
  {
    id: '6',
    image:
      'https://s3-alpha-sig.figma.com/img/c8c9/8ce6/979c72e4afba69217c666d47e7f3dafe?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GM8Zm6Jr3Qqg0Yo5vLF208l5sodW2oq96TttUao1qcnDnAOnM4QYH-N8zrnDb5s-fJFcwPdBXro8sY9qPT1BdZXFKLaf8tTgO3PX7wq7C7eezrvf2F8f74~-Zq05~JrHwINwMFaff4N7~7~m3OX9oX07iFPTIciy7HaT~-TXyFY~33crTpfmV8w54KLrszhCVWe5Mn9YTAfGZvJaF5LGWMNQwWTT8ifsmph058mHH769wXEmq3FrHSvserI-bE57ZmFatBhQGFB7Lgt-xojRvUOPcJ3r40UNzuAxtyuknCV0MdAvNewvvhtWHR-eQ-FDjrtq32IN0LzJh5T-6DQjVg__',
    title: 'Hiểu lòng con trẻ ',
    shop: 'Shop LTD Food',
  },
  {
    id: '7',
    image:
      'https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p3pgmgg4uIBDpGRuu3Wil3ZfAS8sFaeQeyjBN9iknFo8fV3gD2Dok5Tx-h4pTbERepEkqM9W145OLpeWqTBefKFbbzGIgXwSsgCzAz-z~TCbtRG7UJajiZ7SBp2L6vuhT1~APedRMTkJVSWfam0870YuaXt2XxGg44IWgbKwTwgVZVQwMLTphcb72-XD0zOIDRqZ5smmAF~EbwALbEHbRGHollhGVD74CzmRorwMQZynv1pgNia4qrZ1aq1dITghurO-ufzh~dcYQsDOA4YHSB3TK5HMMxqChzjbcWsPS25NAEkksvoLTN5c4jWjo-xkssD2IocjAqVFZ~AnRhcz2Q__',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop LTD Food',
  },
  {
    id: '8',
    image:
      'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ga2Z9BNXx0d6JEjZxNf0tmRPVQ7ROzhie456Ga7ad3cYEdyV2oa4IMIRj86PgYki4poQPkQnW2OQYmqRSIpKcRnzp3eX1hMVt6n0rU1PBUajZ13yEY~jgm6S9l9PomX6wjPVjrIRpir~YpjJnNxBXCzuNdRVE0CMxsR9k4ycT11qZQtFL1SlMfomHNGZdkH-UdfzH7q9RknDjdu2UnM5fF-jFIfzWuiDIjTgbbxW7lA-TsWurQiECEGCa9ivW6OaKTvKl-jfLwT-PLXgy0zKAora0GeFCRWvuBV1f5WFzvH1QGjA8pK-w1zsGClpW7KU1GY7aXcCRXn4JaqC2A2JJg__',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop LTD Food',
  },
  {
    id: '9',
    image:
      'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ga2Z9BNXx0d6JEjZxNf0tmRPVQ7ROzhie456Ga7ad3cYEdyV2oa4IMIRj86PgYki4poQPkQnW2OQYmqRSIpKcRnzp3eX1hMVt6n0rU1PBUajZ13yEY~jgm6S9l9PomX6wjPVjrIRpir~YpjJnNxBXCzuNdRVE0CMxsR9k4ycT11qZQtFL1SlMfomHNGZdkH-UdfzH7q9RknDjdu2UnM5fF-jFIfzWuiDIjTgbbxW7lA-TsWurQiECEGCa9ivW6OaKTvKl-jfLwT-PLXgy0zKAora0GeFCRWvuBV1f5WFzvH1QGjA8pK-w1zsGClpW7KU1GY7aXcCRXn4JaqC2A2JJg__',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop LTD Food',
  },
];
