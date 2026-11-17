
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles_details';

export default function Detalhes() {
  const route = useRoute();

  const titulo = route.params?.titulo ?? 'Filme';
  const imagem = route.params?.imagem ?? '';
  const nota = Number(route.params?.nota ?? 0);

  const estrelas = Math.max(0, Math.min(5, Math.round(nota / 2)));

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.topo}>
        {imagem ? (
          <Image
            source={{ uri: imagem }}
            style={styles.imagemFundo}
            blurRadius={3}
          />
        ) : null}

        <View style={styles.overlay} />

        {imagem ? (
          <Image
            source={{ uri: imagem }}
            style={styles.capa}
          />
        ) : null}
      </View>

      <View style={styles.conteudo}>

        <Text style={styles.titulo}>{titulo}</Text>

        <Text style={styles.categoria}>FILME • TECFILMES</Text>

        <View style={styles.avaliacao}>
          <View style={styles.estrelas}>
            {[1, 2, 3, 4, 5].map((estrela) => (
              <Feather
                key={estrela}
                name="star"
                size={25}
                color={estrela <= estrelas ? '#FFD700' : '#555555'}
              />
            ))}
          </View>

          <Text style={styles.nota}>
            {nota.toFixed(1)} / 10
          </Text>
        </View>

        <View style={styles.linha} />

        <Text style={styles.subtitulo}>Sobre o filme</Text>

        <Text style={styles.descricao}>
          Confira todos os detalhes de {titulo}.
          Descubra a história, conheça os personagens
          e aproveite sua experiência no TECFILMES.
        </Text>

        <View style={styles.info}>
          <Feather name="film" size={22} color="#e50914" />
          <Text style={styles.infoTexto}>Disponível no TECFILMES</Text>
        </View>

      </View>
    </ScrollView>
  );
}

