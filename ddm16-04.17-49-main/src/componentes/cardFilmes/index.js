import React from 'react' 
import {View, Image, Text, TouchableOpacity} from 'react-native'; 
import styles from './style'; 
import { useNavigation } from '@react-navigation/native';
export default function CardMovies({titulo,imagem,nota,sinopse}){ 

    const navigation = useNavigation();
return( 

    <TouchableOpacity style={styles.containerJogos} onPress={()=> navigation.navigate('Detalhes',{titulo,nota,imagem,sinopse})} > 
    
<Image style = {styles.images} source = {{uri:(`https://image.tmdb.org/t/p/original/${imagem}`)}} /> 

<Text style ={styles.titulo}>{titulo}</Text> 

<Text style = {styles.textNota}>{nota}</Text> 

</TouchableOpacity> 

); 
}
