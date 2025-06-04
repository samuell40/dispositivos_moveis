import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tela_musicas = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="white" />
          <Text style={styles.title}>Faixas</Text>
          <Avatar.Image source={require('@/assets/images/channels4_profile.jpg')} size={36} />
        </View>

        <View style={styles.card}>
          <Avatar.Image source={require('@/assets/images/joao.jpeg')} size={50} style={styles.cantorAvatar} />
          <View style={styles.info}>
            <Text style={styles.title_music}>Na sua cintura</Text>
            <Text style={styles.artist}>João Gomes</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
        </View>
        <View style={styles.linha} />

        <View style={styles.card}>
          <Avatar.Image source={require('@/assets/images/grafiti.jpeg')} size={50} style={styles.cantorAvatar} />
          <View style={styles.info}>
            <Text style={styles.title_music}>Feito manteiga</Text>
            <Text style={styles.artist}>Grafitti</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
        </View>
        <View style={styles.linha} />

        <View style={styles.card}>
          <Avatar.Image source={require('@/assets/images/joao.jpeg')} size={50} style={styles.cantorAvatar} />
          <View style={styles.info}>
            <Text style={styles.title_music}>Meu cafofo</Text>
            <Text style={styles.artist}>João Gomes</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
        </View>
        <View style={styles.linha} />

        <View style={styles.card}>
          <Avatar.Image source={require('@/assets/images/matue.jpg')} size={50} style={styles.cantorAvatar} />
          <View style={styles.info}>
            <Text style={styles.title_music}>Espaço na nave</Text>
            <Text style={styles.artist}>Matue</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
        </View>
        <View style={styles.linha} />

        <View style={styles.card}>
          <Avatar.Image source={require('@/assets/images/need.jpg')} size={50} style={styles.cantorAvatar} />
          <View style={styles.info}>
            <Text style={styles.title_music}>In My Head</Text>
            <Text style={styles.artist}>Queens of the Stone Age</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
        </View>
        <View style={styles.linha} />

        <View style={styles.card}>
          <Avatar.Image source={require('@/assets/images/ze_vaqueiro.jpg')} size={50} style={styles.cantorAvatar} />
          <View style={styles.info}>
            <Text style={styles.title_music}>Que vida boa</Text>
            <Text style={styles.artist}>Zé Vaqueiro</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
        </View>
        <View style={styles.linha} />

        <View style={styles.card}>
          <Avatar.Image source={require('@/assets/images/grafiti.jpeg')} size={50} style={styles.cantorAvatar} />
          <View style={styles.info}>
            <Text style={styles.title_music}>Vou pra quebrada</Text>
            <Text style={styles.artist}>Grafitti</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
        </View>
        <View style={styles.linha} />

        <View style={styles.playerBar}>
          <Avatar.Image
            source={require('@/assets/images/ze_vaqueiro.jpg')}
            size={44}
            style={styles.cantorAvatar}
          />
          <View style={styles.playerInfo}>
            <Text style={styles.title_music}>Deep shake</Text>
            <Text style={styles.musicaArtista}>Eze Drill</Text>
          </View>

          <View style={styles.playerIconsContainer}>
            <MaterialCommunityIcons name="skip-previous" size={36} color="white" />
            <MaterialCommunityIcons name="play" size={36} color="white" />
            <MaterialCommunityIcons name="skip-next" size={36} color="white" />
            <MaterialCommunityIcons name="playlist-music" size={36} color="white" />
          </View>
        </View>

      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 16,
    paddingBottom: 100,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'space-between',
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 200,
  },

  title_music: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',

    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  artist: {
    color: '#ccc',
    fontSize: 13,
  },

  playerBar: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: '#2C1C3C',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },

  playerInfo: {
    flex: 1,
    marginLeft: 12,
  },

  musicaTitulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  musicaArtista: {
    color: '#ccc',
    fontSize: 13,
  },

  playerIconsContainer: {
    flexDirection: 'row',
    gap: 18,
  },

  cantorAvatar: {
    borderRadius: 6, 
  },

  linha: {
    height: 1,
    backgroundColor: '#333',
    marginTop: -15,
    marginBottom: 12,
    marginLeft: 75,
    marginRight: 0, 
  },

});

export default Tela_musicas;
