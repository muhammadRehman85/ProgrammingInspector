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
    { title: "Vertebrates", route: "ReadyScreen",questions:"" },
    { title: "Invertebrates", route: "ReadyScreen" ,questions:""},
    { title: "Mammals", route: "ReadyScreen" ,questions:""},
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
              style={{margin:10,padding:20, width:'88%',borderWidth:1,borderRadius:15,borderBottomWidth:5,rderBottomColor:"black",backgroundColor:"#FFBE0B",}}>
              
        
            <Text style = {{color:"black",fontWeight: "bold",}}>{item.title}</Text>
          </TouchableOpacity>
  )}
        
        />    
    </View>
  );
};

export default Sciencetest;
