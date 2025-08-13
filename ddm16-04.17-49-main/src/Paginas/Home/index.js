import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import DATA from '../../../src/data/movies.js'

import Rotas from '../../rotas/index.js';

import Cabecalho from '../../componentes/cabecalho';
import Pesquisa from '../../componentes/pesquisa/index.js';
import Banners from '../../componentes/banner/index.js';
import CardMovies from '../../componentes/cardFilmes/index.js';
import { useState, useEffect } from 'react';


export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);

const [movies, setMovies] = useState([]);

useEffect(()=>{

  async function buscarFilmes() {
    
    const url = 'https://api.themoviedb.org/3/movie/changes?page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDE1YjczMTBjZmI3NTFmOTdhYWFjNjlmZDI2ZGFhNiIsIm5iZiI6MTc1NTAyMTU2Ny4xMjYwMDAyLCJzdWIiOiI2ODliODBmZmI0Njc5ZDQzOTMxYTMyOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RW8QpCYzq7VeUfG6uoRI8IzufbY9VHRcipUd4oCoOvw'
  
  }
  }

  
};
})

  



  return (
    <View style={styles.container}>
      <Cabecalho />
      
      <Pesquisa />

      <Banners />

      <View style={{ width: '90%' }}>
        <FlatList
          data={DATA}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardMovies
              titulo={item.title}
              nota={item.nota}
              imagem={item.vote.path}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center"
  }

});
