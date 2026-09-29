import {View, Text} from 'react-native'
import { useRoute } from '@react-navigation/native';
export default function Detalhes(){

const route = useRoute();

    return(
        <View>
        <Text> ESSA É MINHA TELA DE DETALHES </Text>
        <Text>{route.params.titulo}</Text>
        
 <Image style={{}} source={{ uri: route.params.imagem }}   />

        </View>
    )
};