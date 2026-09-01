

import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Banner from './src/components/Banner';
import Search from './src/components/Search';
import CardMovies from './src/components/cardMovies';
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
showsVerticalScrollIndicator= {false}
horizontal = {true}
data={filmes}
keyExtractor={(item)=>item.id}
renderItem ={({item})=>(

<cardMovies
            titulo = {item.nome}
            imagem = {item.Imagem}
             nota  = {item.nota}

            />
)}
/>                                 

</View>




    </View>

    </ScrollView>
  )};






