import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import DATA from '../../../src/data/movies.js'

import Rotas from '../../rotas/index.js';

import Cabecalho from '../../componentes/cabecalho';
import Pesquisa from '../../componentes/pesquisa/index.js';
import Banners from '../../componentes/banner/index.js';
import CardMovies from '../../componentes/cardFilmes/index.js';

export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);

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
              titulo={item.nome}
              nota={item.nota}
              imagem={item.imagem}
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
