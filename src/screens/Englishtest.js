import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
  import BasicQuestions from "../components/EnglishQuestionData/BasicQuestions";
import VocabularyQuestion from "../components/EnglishQuestionData/VocabularyQuestion";
const EnglishTest= ({ navigation }) => {
  const Languages = [
    { title: "Alphabet Recognition", route: "ReadyScreen" ,questions:BasicQuestions},
    { title: "Basic Vocabulary", route: "ReadyScreen",questions:VocabularyQuestion },
    { title: "Colors and Shapes", route: "ReadyScreen",questions:"" },
    { title: "Noun", route: "ReadyScreen",questions:'' },
    { title: "Pronoun", route: "ReadyScreen",questions:"" },
    { title: "Adjective", route: "ReadyScreen",questions:"" },
    { title: "Verb", route: "ReadyScreen" ,questions:""},
    { title: "Adverb", route: "ReadyScreen" ,questions:""},
    { title: "Preposition", route: "ReadyScreen",questions:"" },
    { title: "Conjunction", route: "ReadyScreen",questions:"" },
    { title: "Interjection", route: "ReadyScreen",questions:"" },
    { title: "Tenses", route: "ReadyScreen",questions:"" },
    { title: "Active & Passive Voice", route: "ReadyScreen",questions:"" },
    { title: "Direct & Indirect Narration", route: "ReadyScreen",questions:"" },
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
              style={{margin:10,padding:20, width:'88%',borderWidth:1,borderRadius:15,borderBottomWidth:5,borderBottomColor:"black",backgroundColor:"#03045E",}}>
            <Text style = {{color:"white",}}>{item.title}</Text>
          </TouchableOpacity>
  )}
        
        />    
    </View>
  );
};

export default EnglishTest;
