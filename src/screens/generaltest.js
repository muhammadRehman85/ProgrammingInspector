import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import generalQuestion from "../components/generalQuestion";


const generaltest= ({ navigation }) => {
  const Languages = [
    { title: "History of pakistan", route: "ReadyScreen" ,questions:generalQuestion},
    { title: "Geography", route: "ReadyScreen",questions:"" },
    { title: "Arts and Culture ", route: "ReadyScreen",questions:'' },
    { title: "Country", route: "ReadyScreen",questions:"" },
    { title: "Literature", route: "ReadyScreen",questions:"" },
    { title: "Technology", route: "ReadyScreen" ,questions:""},
    { title: "Sports", route: "ReadyScreen" ,questions:""},
    { title: "population", route: "ReadyScreen",questions:"" },
    { title: "pollution", route: "ReadyScreen",questions:"" },
    

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

export default generaltest;
