import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, StyleSheet, TouchableOpacity,Linking } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Giulia",
    bio: "Engenharia de Software - 3ESPZ💻",
    frase: "Na minha máquina funciona",
    avatar: "https://e7.pngegg.com/pngimages/949/339/png-clipart-avatar-profile-pic-masculine-man-human-character-person.png",
  };
  return (
    <LinearGradient colors={["#ff7e5f", "#feb47b"]} style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}> {usuario.frase}</Text>
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://linkedin.com/in/Giulia-Barbizan")}
        style={styles.linkButton}
      >
        <Text style = {styles.textButton}>Linkedin</Text>
      </TouchableOpacity> 
      <TouchableOpacity
        onPress={() => Linking.openURL("https://github.com/Giulia-Rocha")}
        style={styles.linkButton}
      >
        <Text style = {styles.textButton}>GitHub</Text>
      </TouchableOpacity>
          </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#063f8f',
    marginBottom: 16,
  },
  nome: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#063f8f',
    marginBottom: 8,
  },
  bio: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#feb47b',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#000',
    fontSize: 14,
  },
  linkButton:{
      width:200,
      height: 50,
      borderRadius:100,
      alignItems: "center",
      justifyContent: "center",
      marginTop: '10',
      color: "blue",
      backgroundColor: "#ff8a65",
    
  },
  textButton:{
    color : "#1e7be7",
    fontSize: 25,
    textDecorationLine : 'underline',
    fontWeight: "300",
  }

});