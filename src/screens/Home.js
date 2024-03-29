import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Upper Section 55% */}
      <View style={styles.upperSection}>
        <Text style={styles.title}></Text>
      </View>
      {/* Add your image here */}
      <Image
          source={require} 
          style={styles.image}
        />


      {/* Lower Section 45% */}
      <View style={styles.lowerSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Salectlanguage')}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBE0B',
  },
  upperSection: {
    flex: 0.70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBE0B',
  },
  lowerSection: {
    flex: 0.30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    
  },
  title: {
    padding: 30,
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    padding: 15,
    margin: 20,
    width: 250,
    height: 65,
    borderRadius: 30,
    borderBottomWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: '#FFBE0B',
  },
  image:{
    width: "60%",
    height: "20%",
    margin: 55,
    alignItems: "center",
    
  },
  buttonText: {
    fontSize: 20 ,
     fontWeight: "bold",
    color: "black",
  
    
    

  },
});

export default Home;
