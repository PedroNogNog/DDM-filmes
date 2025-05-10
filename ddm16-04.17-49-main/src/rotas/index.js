import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Paginas/Home/index.js";
import Detalhes from "../Paginas/Detalhes/index.js";

export default function Rotas(){

    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>

            <stack.Navigator screenOptions={{headerShown:false}}>
                
                <stack.Screen name="Home" component={Home}/>
                <stack.Screen name="Detalhes" component={Detalhes}/>
            
            </stack.Navigator>

        </NavigationContainer>
    )
}
