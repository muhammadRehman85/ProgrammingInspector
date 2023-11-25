import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ScienceQuestion from "../components/EnglishQuestionData/ScienceQuestion";
const Sciencetest= ({ navigation }) => {
  const Languages = [
    { title: "parts of body", route: "ReadyScreen" ,questions:ScienceQuestion},
    { title: "Animals", route: "ReadyScreen",questions:"" },
    { title: "Plants", route: "ReadyScreen",questions:'' },
    { title: "Human Organs", route: "ReadyScreen",questions:"" },
    { title: "", route: "ReadyScreen",questions:"" },
    { title: "", route: "ReadyScreen" ,questions:""},
    { title: "", route: "ReadyScreen" ,questions:""},
    { title: "", route: "ReadyScreen",questions:"" },
    

  ];
  return (
    <View style={{margin:40}}>
        <FlatList
        data={Languages}
        keyExtractor={(item)=>item.title}
        renderItem={({item})=>(
            <TouchableOpacity        onPress={() =>
                navigation.navigate(item.route, {
                  title: item.title,
                  questions: item.questions,
                })
              }
              style={{margin:10,padding:20, width:'88%',borderWidth:1,borderRadius:10,borderBottomWidth:10,borderBottomColor:"rgba(76, 209, 55,1.0)"}}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
  )}
        
        />    
    </View>
  );
};

export default Sciencetest;
