import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Alert
} from 'react-native';

export default function Estatisticas() {
  const [curtidas, setCurtidas] = useState(0);
  const [comentarios, setComentarios] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [textoComentario, setTextoComentario] = useState('');

  const enviarComentario = () => {
    if (textoComentario.trim() === '') return;

    setComentarios(comentarios + 1);
    setTextoComentario('');

    Alert.alert('Sucesso', 'Comentário enviado!');
  };

  return (
    <View>
      <Text>Curtidas: {curtidas}</Text>
      <Text>Comentários: {comentarios}</Text>
      <Text>
        Status: {favorito ? 'Favoritado' : 'Não Favoritado'}
      </Text>

      <Button
        title="Curtir"
        onPress={() => setCurtidas(curtidas + 1)}
      />

      <Button
        title="Descurtir"
        onPress={() =>
          setCurtidas(curtidas > 0 ? curtidas - 1 : 0)
        }
      />

      <Button
        title="Favoritar"
        onPress={() => setFavorito(!favorito)}
      />

      <TextInput
        placeholder="Digite um comentário"
        value={textoComentario}
        onChangeText={setTextoComentario}
      />

      <Button
        title="Enviar"
        onPress={enviarComentario}
      />
    </View>
  );
}