import { Text, Image, TouchableOpacity, View } from 'react-native';
import styles from './style.js';

export default function Banners() {
  return (
    <View style={styles.viewBanner}>
      <Text style={styles.textBanner}>Em cartaz</Text>

      <TouchableOpacity>
        <Image style={styles.imgBanner} source={URL = "https://i.ytimg.com/vi/A-_RzwsMs4Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmpc3ZToZvtjnOdCo-If3ZOcIU7Q"}/>
      </TouchableOpacity>
    </View>
  );
}
