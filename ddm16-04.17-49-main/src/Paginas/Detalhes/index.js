import { View, Text ,TouchableOpacity} from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
export default function Detalhes(){
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <View>
            <Text> {route.params.titulo}</Text>
            <Text> {route.params.nota}</Text>
      <Image
                source={{ uri: route.params.imagem }}
                style={styles.image}
            />
            <TouchableOpacity onPress={()=> navigation.goBack()}> Clique aqui para voltar </TouchableOpacity>
        </View>
    )
}
