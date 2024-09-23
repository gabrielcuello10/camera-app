import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: "#000",
  },
});

export default LoadingSpinner;
