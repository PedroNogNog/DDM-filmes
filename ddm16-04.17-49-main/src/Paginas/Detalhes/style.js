import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#141a29',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#fff'
    },
    note: {
        fontSize: 18,
        marginBottom: 12,
        color: '#fff'
    },
    image: {
        width: 300,
        height: '400PX',
        marginBottom: 20,
        borderRadius: 8,
    },
    button: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default styles

