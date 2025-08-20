import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Cabecalho from '../../componentes/cabecalho';
import Pesquisa from '../../componentes/pesquisa';
import Banners from '../../componentes/banner';
import CardMovies from '../../componentes/cardFilmes';

export default function App() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDE1YjczMTBjZmI3NTFmOTdhYWFjNjlmZDI2ZGFhNiIsIm5iZiI6MTc1NTAyMTU2Ny4xMjYwMDAyLCJzdWIiOiI2ODliODBmZmI0Njc5ZDQzOTMxYTMyOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RW8QpCYzq7VeUfG6uoRI8IzufbY9VHRcipUd4oCoOvw',
      },
    };

    async function buscarFilmes() {
      try {
        const responseTopRated = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1',
          options
        );
        const dataTopRated = await responseTopRated.json();
        setTopRatedMovies(dataTopRated.results);

        const responsePopular = await fetch(
          'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1',
          options
        );
        const dataPopular = await responsePopular.json();
        setPopularMovies(dataPopular.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    }

    buscarFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <Cabecalho />
      <Pesquisa />
      <Banners />

      <View style={styles.listaContainer}>
        <Text style={styles.tituloLista}>Mais bem avaliados</Text>
        <FlatList
          data={topRatedMovies}
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

      <View style={styles.listaContainer}>
        <Text style={styles.tituloLista}>Populares</Text>
        <FlatList
          data={popularMovies}
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
  listaContainer: {
    width: '90%',
    marginTop: 20,
  },
  tituloLista: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
