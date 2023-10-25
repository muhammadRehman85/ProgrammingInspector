import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import BasicCppQuestions from "../components/CppQuestionData/BasicQuestions";

const CppTest= ({ navigation }) => {
  const Languages = [
    { title: "Basic", route: "ReadyScreen" ,questions:BasicCppQuestions},
    { title: "Conditional Statement", route: "ReadyScreen",questions:"" },
    { title: "functions", route: "ReadyScreen",questions:'' },
    { title: "Array", route: "ReadyScreen",questions:"" },
    { title: "pointers", route: "ReadyScreen",questions:"" },
    { title: "string", route: "ReadyScreen" ,questions:""},
    { title: "oop", route: "ReadyScreen" ,questions:""},
    { title: "inheritance", route: "ReadyScreen",questions:"" },
    { title: "polymorphism", route: "ReadyScreen" ,questions:""},


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
              style={{margin:10,padding:20, width:'100%',borderWidth:1,borderRadius:10,borderBottomWidth:5,borderBottomColor:"rgba(76, 209, 55,1.0)"}}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
  )}
        
        />    
    </View>
  );
};

export default CppTest;
