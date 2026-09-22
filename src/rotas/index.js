import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "../telas/Detalhes"
import home from "../Detalhes"
export default function rotas(){

    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Detalhes} name = 'Detalhes'/>
                <Stack.Screen component={home} name = "home"/>
            </Stack.Navigator>



        </NavigationContainer>
    );
}
