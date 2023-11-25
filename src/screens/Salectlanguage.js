import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReadyScreen from "./ReadyScreen";




const SelectLanguage = () => {
  const navigation = useNavigation();

  const Languages = [
    { title: "Islamic", route: "islamictest" },
    { title: "English", route: "EnglishTest" },
    { title: "Computer Science", route: "CStest" },
    { title: "General Knowledge", route: "generaltest" },
    { title: "Science", route: "Sciencetest" },
    { title: "Mathematics", route: "Mathtest" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.route)}
      style={{
        margin: 10,
        padding: 20,
        marginLeft: 40,
        width: "80%",
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        borderBottomWidth: 5,
        borderBottomColor: "black",
        backgroundColor: "#03045E",
        
        
      }}
    >
      <Text style ={{color:"white"}}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center",  }}>
        <View
          style={{
            width: "100%",
            height: 80,
            backgroundColor: "#03045E",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white",  }}>
            QUIZZY KIDS
          </Text>
        </View>
        <FlatList
          data={Languages}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default SelectLanguage;
