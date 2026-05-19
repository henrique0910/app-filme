

import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,  } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>
    
      
      {/* INICIO DA HEADER */}
      
      <View style = {styles.viewHeader}>
      
      <Feather name="menu" size={24} color="white" />

      <Text style={styles.textHeader}> TECFILMES </Text>

     <TouchableOpacity>

     </TouchableOpacity>
      </View>
      
      
      
      
      
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
      
      <Text style ={styles.textBanner}> Em cartaz </Text>

  <Image style = {styles.imageBanner}
  source = {require("./assets/smallbanner.avif")}
 
  />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000b4a',
    alignItems: 'center',
                          
  },

  viewHeader:{
  flexDirection: 'row',
  width: "90%",
  alignItems: 'center',
  marginTop: 10,
  justifyContent: 'space-between'
},

  inputSearch:{
  height: 40,
  padding: 8,
  width: '100%',
  alignItems: "center"
},

  textHeader:{

  color:'white',
  fontSize: 22, 
  fontWeight: 'bold'
},

containerSearch:{
  marginTop: 20,
  width: "90%",
  backgroundColor: 'white',
  borderRadius: 2,
  flexDirection: 'row',
  justifyContent: 'space-between'
},

imageBanner:{
  width: '100%',
  height: 500,
  marginTop: 15,
  borderRadius: 10
},
textBanner:{
  color: 'white',
  width: '90%',
  fontSize: 30,
  marginTop: 18,
fontWeight:'bold'
}
});

// header//

// BANNER

