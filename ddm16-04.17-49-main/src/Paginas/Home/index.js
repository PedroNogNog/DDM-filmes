import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Cabecalho from '../../componentes/cabecalho';
import Pesquisa from '../../componentes/pesquisa';
import Banners from '../../componentes/banner';
import CardMovies from '../../componentes/cardFilmes';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-br&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer YOUR_API_KEY',
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);  
    }

    buscarFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <Cabecalho />
      <Pesquisa />
      <Banners />
      <View style={{ width: '90%' }}>
        <FlatList
          data={movies}
          horizontal
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <CardMovies
              titulo={item.title}
              nota={item.vote_average}
              imagem={`https://image.tmdb.org/t/p/w500${item.poster_path}`}  
              sinopse={item.overview}
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
    alignItems: 'center',
  },
});
