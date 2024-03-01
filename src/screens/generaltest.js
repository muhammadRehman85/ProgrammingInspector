import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import GeneralQuestion from "../components/GeneralQuestion";


const Generaltest= ({ navigation }) => {
  const Languages = [
    { title: "History of pakistan", route: "ReadyScreen" ,questions:GeneralQuestion},
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
              style={{margin:10,padding:20, width:'88%',borderWidth:1,borderRadius:15,borderBottomWidth:5,borderBottomColor:"black",backgroundColor:"#FFBE0B",}}>
            <Text style = {{color:"black", fontWeight: "bold",}}>{item.title}</Text>
          </TouchableOpacity>
  )}
        
        />    
    </View>
  );
};

export default Generaltest;
