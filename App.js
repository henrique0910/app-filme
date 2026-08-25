

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
showsVerticalScrollIndicator= {false}
horizontal = {true}
data={filmes}
keyExtractor={(item)=>item.id}
renderItem ={({item})=>(

  <TouchableOpacity style={styles.containerFilmes}>

    <Image style={styles.images} source ={{uri:item.Imagem }}></Image>

    <Text style ={styles.titulo}> {item.nome} </Text>

  <Text style ={styles.textNota}> {item.nota} </Text>
  
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
    backgroundColor: '#01072c',
    alignItems: 'center',
                      
  },

  containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        heigh:28
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8  
    },

    textNota:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },

    images:{
        width:'100%',
        height:170,
        borderRadius: 8,    
       
    }


 


})



