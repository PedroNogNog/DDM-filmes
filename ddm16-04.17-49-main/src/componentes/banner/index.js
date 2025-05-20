import { Text, Image, TouchableOpacity, View } from 'react-native';
import styles from './style.js';

export default function Banners() {
  return (
    <View style={styles.viewBanner}>
      <Text style={styles.textBanner}>Em cartaz</Text>

      <TouchableOpacity>
        <Image style={styles.imgBanner} source={URL = "https://static.wikitide.net/avidwiki/thumb/7/7b/Cinemark_Theatres_%281999%29_%28Credit_-_FT_Depot%29.png/534px-Cinemark_Theatres_%281999%29_%28Credit_-_FT_Depot%29.png"}/>
      </TouchableOpacity>
    </View>
  );
}
