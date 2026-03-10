import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);
  
  const intervalRef = useRef(null);

  const startDecrement = () => {
    intervalRef.current = setInterval(() => {
      setContador((prev) => Math.max(0, prev - 10));
    }, 200); // velocidade (ms)
  };

  const stopDecrement = () => {
    clearInterval(intervalRef.current);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador FIAP</Text>
      <Text style={styles.numero}>{contador}</Text>
      
      <TouchableOpacity 
        style={styles.botao}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.textoBotao}>Clique Aqui!</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botaoDecrease}
        onPressIn={startDecrement}
        onPressOut={stopDecrement}
        
      >
        <Text style={styles.textoBotaoDecrease}>Clique Aqui para diminuir!</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao}
        onPress={() => setContador(contador * 2)}
      >
        <Text style={styles.textoBotao}>Clique Aqui para multiplicar por 2!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    color: '#FFF',
    marginBottom: 20,
  },
  numero: {
    fontSize: 72,
    color: '#00D9FF',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#00D9FF',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop:10,
  },
  botaoDecrease:{
    backgroundColor:'#000',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop:10,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D1B2A',
  },
  textoBotaoDecrease: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});