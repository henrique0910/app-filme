

import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Banner from './src/components/Banner';
import Search from './src/components/Search';
import { FlatList } from 'react-native-web';
import filmes from './movies'

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    
      <Header></Header>
    <Search></Search>
    <Banner></Banner>
      

<View style = {{width:'90%'}}>
<FlatList
horizontal = {true}
data={filmes}
keyExtractor={(item)=>item.id}
renderItem ={({item})=>(

  <TouchableOpacity>
    <Image style = {{width:80, height: 100}} source ={{uri:item.Imagem }}></Image>
    <Text> {item.nome} </Text>
  </TouchableOpacity>
)}
/>

</View>




    </View>

    </ScrollView>
  )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000b4a',
    alignItems: 'center',
                      
  },

 


})



