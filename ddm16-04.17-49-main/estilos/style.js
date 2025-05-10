import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#141a29',
        alignItems: "center"
    },
 
    viewHeader: {
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center",
    marginTop: 8,
    marginLeft:10
    },
    
    textHeader: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginRight:75
    },
    containerSearch: {
     flexDirection:'row',
        width:'90%',
        backgroundColor: "white",
        marginTop: 30,
        alignItems:"center",
        borderRadius: 3
    },
     inputSearch: {
        height: 35,
        width: '100%',
        marginLeft:5
    },
    imageBanner: {
        width: '90%',
        height: 200,
        marginTop: 15,
        borderRadius: 10
    },
    textBanner: {
        fontSize:30,
        color: 'white',
        marginTop: 15,
        marginleft:-180,
        fontWeight: 'Bold'
        }
        });
   
 
export default styles;