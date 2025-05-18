import { View, Text, Image, StyleSheet } from "react-native";

export default function TiposDeNescal() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TIPOS DE NESCAL</Text>

      <Image
        source={require('@/assets/images/Nescau.png')}
        style={styles.banner}
        resizeMode="contain"
      />

      <View style={styles.row}>
        <Image
          source={require('@/assets/images/embalagem1.jpg')}
          style={styles.roundImage}
        />
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, nisl vel convallis sollicitudin, sapien nulla.
        </Text>
      </View>

      <View style={styles.row}>
        <Image
          source={require('@/assets/images/embalagem2.png')}
          style={styles.roundImage}
        />
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, nisl vel convallis sollicitudin, sapien nulla.
        </Text>
      </View>

    </View >
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20, 
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20, 
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20, 
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  description: {
    flex: 1,
    fontSize: 14,
  },
});
