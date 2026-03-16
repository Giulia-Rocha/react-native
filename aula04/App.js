import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [copos, setCopos] = useState(0);
  const [metaAtingida, setMetaAtingida] = useState(false);

  // useEffect para monitorar a quantidade de copos
  useEffect(() => {
    if (copos >= 7) {
      setMetaAtingida(true);
    } else {
      setMetaAtingida(false);
    }
  }, [copos]);

  const adicionarCopo = () => setCopos(copos + 1);

  const resetarDia = () => {
    setCopos(0);
    setMetaAtingida(false);
  };

  // Gerar a fileira de emojis com base no estado 'copos'
  const renderizarEmojis = () => {
    return "🥤".repeat(copos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[styles.container, metaAtingida && styles.containerMeta]}
      >
        <View style={styles.content}>
          <Text style={styles.titulo}>Contador de Hidratação</Text>

          <Text style={styles.contadorText}>{copos}</Text>
          <Text style={styles.subtitulo}>copos bebidos</Text>

          <Text style={styles.emojiContainer}>{renderizarEmojis()}</Text>

          {metaAtingida && (
            <View style={styles.alertaMeta}>
              <Text style={styles.textoMeta}>🏆 Meta do dia atingida!</Text>
            </View>
          )}

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.botaoAdd} onPress={adicionarCopo}>
              <Text style={styles.buttonText}>+ Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoReset} onPress={resetarDia}>
              <Text style={styles.buttonText}>Resetar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Fundo escuro padrão
    justifyContent: "center",
  },
  containerMeta: {
    backgroundColor: "#004d40", // Fundo muda para verde escuro ao bater a meta
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 40,
  },
  contadorText: {
    fontSize: 80,
    color: "#4fc3f7",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 20,
  },
  emojiContainer: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    minHeight: 40,
  },
  alertaMeta: {
    backgroundColor: "#ffd700",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  textoMeta: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 15,
  },
  botaoAdd: {
    backgroundColor: "#4fc3f7",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  botaoReset: {
    backgroundColor: "#ef5350",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
