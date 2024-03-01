import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Result = ({ route }) => {
  console.log(route);
  const score = route.params.score;
  let message;

  if (score >= 5) {
    message = 'Congratulations!';
  } else {
    message = 'Try Again';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{score}/10</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBE0B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 20,
    marginTop: 20,
    color: 'blue', // You can change the color as per your preference
  },
});

export default Result;
