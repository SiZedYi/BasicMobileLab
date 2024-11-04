import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{height:'20%', justifyContent:'center'}}>
        <Text style={[{color:'#E94141'}, styles.title]}>The world’s Best Bike</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{flex:1, marginTop: 30, marginHorizontal:10, justifyContent:'center',     alignItems:'center',borderWidth: 1, borderColor:'#E9414187', borderRadius:6 }}>
          <Text style={{color:'#E94141'}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, marginTop: 30, marginHorizontal:10, justifyContent:'center', alignItems: 'center',borderWidth: 1, borderColor:'#E9414187', borderRadius:6 }}>
          <Text style={{color:'#BEB6B6'}}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, marginTop: 30, marginHorizontal:10, justifyContent:'center', alignItems: 'center',borderWidth: 1, borderColor:'#E9414187', borderRadius:6 }}>
          <Text style={{color:'#BEB6B6'}}>Mountain</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={[{height:'80%'}, styles.list_product]}>
      {products.map((pd) => {
        return (
        <View style={styles.item} 
              onPress={() =>
              navigation.navigate('Home')
              }
        >
          <Image style={styles.item.image} source={pd.image}/>
          <Text>{pd.name}</Text>
          <Text style={{marginBottom: 12}}>
            <Text style={{color: '#F7BA83'}}>$</Text>
            <Text>{pd.price}</Text>
          </Text>
        </View>
          
        )
      })}
      </View>
    </View>
  );
}

const products = [
  {
    id: 1,
    name: 'Pinarello',
    price: 1800,
    image: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF5Gn8hEujcOtdsOXxMA7b5AMTsxXVS6iLGImXqx0jqYTUl3RifpEJ1AwcQGANUVu4aC6Eq8SXgPXNiKkErJ9ft6iTqrFLdWEGTtbG38azVAswCRRG7DJLvWIrFaO0A-PCbDsnqM0REdeSaFBsm9dZY1LMTMeuWSD5HJxarXinZ8iya4FAVrjd3QCft2Pd4SMsoesz1B8NnL7LGWP-z4TYJ14-xW7BEYEVpfJmGYJ2auuW7fodRnWGDaM-Ywrrl0lwDUHsJKgTuuteLQljeKew4vrPxn3QcL~J5s5AGypOZPnFjxcefDzz6A0Nb-sIT0V9NUuAizCfCbOJ8Cm4KIag__',
    description: ' It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 2,
    name: 'Pinarello',
    price: 1700,
    image: 'https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtyO8-hzRWne9Xt~N0ITku1LJDiWr8Uxmz15w05SLRQsjpvmEdvHd7NexC270bPV9R7bUBIYi8pmnxTPrfkn9HnzAEUh8x3WEdD7Zt4C-U1P-R1wGzul57K-0-gz4BksZgPajbptd8EUCSDz4GrdFWaggRR~2CUixrUlw9i4z4CAzLaeMND8BYA16Sclg4BX2qHOuumd3fdMxK1MIJzl~b10Wlf8i-2vW9wMoZ1yJmCTFZ4DR2tP6pFKXfVxvEmRlqlpOyduJrbwL0paNEVWl9yn33H0CR3sbNgq~CzqfCq33QxV0Pe07AbZY0EylS97lLC4hQzpRKPPcsbtWW7Yjw__',
    description: ' It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 3,
    name: 'Pinarello',
    price: 1500,
    image: 'https://s3-alpha-sig.figma.com/img/49d5/2b9b/68c70d4381b662e07d65fdb7c3846000?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5o6NCAZqHumvWRe9bvKPbcbwY6Z3oHHNP53e--u-8NCyaWFEfl47ILBATTx8HdN48bKrxKOKr51~eUTMII9GIh9E5O65A3ejUAabWNMXEDe75fkEwo1PGHziReM94JwtmCdavFeVdsYPmHaoc-2GmjSuoKBR7BPPxQcxyXX1iDPbHPzp26oXHA3CAcHZpGrK1FFXuV3KJP5KjE5u9xkDbdckHVEoFAPgJ2LPhoSUB3i6awXhOskPeHtJ7YBh4-9gaMyWQnzkEuGIhV4ugvgzH~0GCUSmjW6s4uqHtlHZJIFhKFQvVnL7GKUczc8GZsVhhYoEJzIs6nijgDqCl81og__',
    description: ' It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 4,
    name: 'Pinarello',
    price: 1900,
    image: 'https://s3-alpha-sig.figma.com/img/fdbf/d9b3/251a5a94adb31c5f3a0d6caf10fae43b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6Bm1V114zF~pBoxPBYbWfqzZvXmAf4U0amp6Sw9jJSdP61uU7VtQdDAcfeLOJ-8SYNtxmY2C0yiYA8pvkm-~3Xfu073I2BbM2oS4gRjcLSCE7oupx7yQBXo5ijiu~P15AF0niYyqo3WajW4gJKwzbq-OX1AYxMH4yhK8QPaedQ0~bPtk1N8H-Ac2IM~lGRXNxFHkpunEaY5cUo-A08rV0On8h1I01bIcQ2iHmQpeEfhcSd6AcFiq0Oo1y03p8N8vzdW9w8Pl19plnjT3Vve1Blb1A2Ms0vbBmmhKAyQPMP24XPcS9EXU-AUq1mawVKEdsRovWXX0LtKAr6CEAlH1w__',
    description: ' It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 5,
    name: 'Pinarello',
    price: 2700,
    image: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF5Gn8hEujcOtdsOXxMA7b5AMTsxXVS6iLGImXqx0jqYTUl3RifpEJ1AwcQGANUVu4aC6Eq8SXgPXNiKkErJ9ft6iTqrFLdWEGTtbG38azVAswCRRG7DJLvWIrFaO0A-PCbDsnqM0REdeSaFBsm9dZY1LMTMeuWSD5HJxarXinZ8iya4FAVrjd3QCft2Pd4SMsoesz1B8NnL7LGWP-z4TYJ14-xW7BEYEVpfJmGYJ2auuW7fodRnWGDaM-Ywrrl0lwDUHsJKgTuuteLQljeKew4vrPxn3QcL~J5s5AGypOZPnFjxcefDzz6A0Nb-sIT0V9NUuAizCfCbOJ8Cm4KIag__',
    description: ' It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 6,
    name: 'Pinarello',
    price: 1350,
    image: 'https://s3-alpha-sig.figma.com/img/fdbf/d9b3/251a5a94adb31c5f3a0d6caf10fae43b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6Bm1V114zF~pBoxPBYbWfqzZvXmAf4U0amp6Sw9jJSdP61uU7VtQdDAcfeLOJ-8SYNtxmY2C0yiYA8pvkm-~3Xfu073I2BbM2oS4gRjcLSCE7oupx7yQBXo5ijiu~P15AF0niYyqo3WajW4gJKwzbq-OX1AYxMH4yhK8QPaedQ0~bPtk1N8H-Ac2IM~lGRXNxFHkpunEaY5cUo-A08rV0On8h1I01bIcQ2iHmQpeEfhcSd6AcFiq0Oo1y03p8N8vzdW9w8Pl19plnjT3Vve1Blb1A2Ms0vbBmmhKAyQPMP24XPcS9EXU-AUq1mawVKEdsRovWXX0LtKAr6CEAlH1w__',
    description: ' It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  list_product: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    justifyContent: 'space-between'
  },
  item:{
    width: '45%',
    borderRadius: 10,
    backgroundColor: '#F7BA8326',
    alignItems: 'center',
    shadowColor: "#000",
    paddingTop: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    image: {
      width: 80,
      height: 80,
      resizeMode: 'contain'
    }
  }
});
