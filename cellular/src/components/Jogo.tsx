import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button
} from 'react-native';

import Estatisticas from './Estatisticas';

type Props = {
  nome: string;
  categoria: string;
  plataforma: string;
  imagem: string;
  data: string;
  descricao: string;
};

export default function Jogo({
  nome,
  categoria,
  plataforma,
  imagem,
  data,
  descricao
}: Props) {
  const [mostrarDescricao, setMostrarDescricao] =
    useState(false);

  return (
    <View
      style={{
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10
      }}
    >
      <Image
        source={{ uri: imagem }}
        style={{
          width: '100%',
          height: 200
        }}
      />

      <Text>{nome}</Text>

      <Text>Categoria: {categoria}</Text>

      <Text>Plataforma: {plataforma}</Text>

      <Text>Data: {data}</Text>

      {mostrarDescricao && (
        <Text>{descricao}</Text>
      )}

      <Button
        title={
          mostrarDescricao
            ? 'Ocultar descrição'
            : 'Mostrar descrição'
        }
        onPress={() =>
          setMostrarDescricao(!mostrarDescricao)
        }
      />

      <Estatisticas />
    </View>
  );
}