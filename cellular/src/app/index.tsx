import React from 'react';
import { FlatList } from 'react-native';
import Post from '../components/Post.tsx';

const posts = [
  {
    id: '1',
    titulo: 'Viagem para Londres',
    legenda: 'Primeiro dia de viagem.',
    imagem: 'https://picsum.photos/300',
    data: '02/06/2026',
  },
  {
    id: '2',
    titulo: 'Praia',
    legenda: 'Fim de semana incrível.',
    imagem: 'https://picsum.photos/301',
    data: '03/06/2026',
  },
];

export default function Index() {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Post
          titulo={item.titulo}
          legenda={item.legenda}
          imagem={item.imagem}
          data={item.data}
        />
      )}
    />
  );
}