import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';

type PostProps = {
  titulo: string;
  legenda: string;
  imagem: string;
  data: string;
};

export default function Post({
  titulo,
  legenda,
  imagem,
  data,
}: PostProps) {
  const [curtidas, setCurtidas] = useState(0);
  const [curtiu, setCurtiu] = useState(false);

  const [compartilhamentos, setCompartilhamentos] = useState(0);
  const [comentarios, setComentarios] = useState(0);

  const [favorito, setFavorito] = useState(false);
  const [mostrarLegenda, setMostrarLegenda] = useState(true);

  const [comentario, setComentario] = useState('');

  const toggleCurtir = () => {
    if (curtiu) {
      setCurtidas(curtidas - 1);
      setCurtiu(false);
    } else {
      setCurtidas(curtidas + 1);
      setCurtiu(true);
    }
  };

  const enviarComentario = () => {
    if (comentario.trim() === '') return;

    setComentarios(comentarios + 1);
    setComentario('');

    Alert.alert('Sucesso', 'Comentário enviado!');
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />

      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.data}>
        Publicado em: {data}
      </Text>

      {mostrarLegenda && (
        <Text style={styles.legenda}>{legenda}</Text>
      )}

      <Text>Curtidas: {curtidas}</Text>
      <Text>Compartilhamentos: {compartilhamentos}</Text>
      <Text>Comentários: {comentarios}</Text>

      <Text>
        Status: {favorito ? 'Favoritado' : 'Não Favoritado'}
      </Text>

      <View style={styles.botao}>
        <Button
          title={curtiu ? 'Descurtir' : 'Curtir'}
          onPress={toggleCurtir}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Compartilhar"
          onPress={() =>
            setCompartilhamentos(compartilhamentos + 1)
          }
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Comentar"
          onPress={() =>
            setComentarios(comentarios + 1)
          }
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Favoritar"
          onPress={() => setFavorito(!favorito)}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title={
            mostrarLegenda
              ? 'Ocultar legenda'
              : 'Mostrar legenda'
          }
          onPress={() =>
            setMostrarLegenda(!mostrarLegenda)
          }
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite um comentário"
        value={comentario}
        onChangeText={setComentario}
      />

      <Button
        title="Enviar"
        onPress={enviarComentario}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },

  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  data: {
    marginTop: 5,
    color: 'gray',
  },

  legenda: {
    marginVertical: 10,
  },

  botao: {
    marginTop: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});