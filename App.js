

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
      ></TextInput>

     </View>




      {/* INICIO DO BANNER */}
      
      
      
      
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

  textHeader:{

  color:'white',
  fontSize: 22, 
  fontWeight: 'bold'
},

containerSearch:{
  marginTop: 20,
  width: "90%",
  backgroundColor: 'white',
  borderRadius: 2
}
});

// header//

