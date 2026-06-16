

import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Banner from './src/components/Banner';
export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    
 {/* INICIO DA HEADER */}
      <Header></Header>

      {/* INICIO DA BARRA DE PESQUISA */}

     <View style = {styles.containerSearch}>
      <TextInput 
      placeholder= 'Buscar filme... '
      style = {styles.inputSearch}
      ></TextInput>

      <TouchableOpacity>
      <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
     </View>


      {/* INICIO DO BANNER */}
      
   
 
    <Banner></Banner>
      
      
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000b4a',
    alignItems: 'center',
                          
  },

  inputSearch:{
  height: 40,
  padding: 8,
  width: '100%',
  alignItems: "center"
},


containerSearch:{
  marginTop: 20,
  width: "90%",
  backgroundColor: 'white',
  borderRadius: 2,
  flexDirection: 'row',
  justifyContent: 'space-between'
},



});

// header//

// BANNER

