import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ErrorMessageProps {
  message: string;
  error?: true | false;
}

const Message: React.FC<ErrorMessageProps> = ({ message, error = true }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, error ? styles.errorText : styles.successText]}
      >
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    padding: 20,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  errorText: {
    color: "#721c24",
  },
  successText: {
    color: "#155724",
  },
});

export default Message;
