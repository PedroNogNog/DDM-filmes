import React from "react";
import styles from './style'; 
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native-web";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Detalhes() {
    const route = useRoute();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.titulo}</Text>
            <Text style={styles.note}>Nota: {route.params.nota}</Text>
            <Image
                source={{ uri: route.params.imagem }}
                style={styles.image}
            />
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>Clique aqui para voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

