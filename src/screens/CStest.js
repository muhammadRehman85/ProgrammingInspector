import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CSQuestion from "../components/CSQuestion";


const CStest= ({ navigation }) => {
  const Languages = [
    { title: "Computer", route: "ReadyScreen" ,questions:CSQuestion},
    { title: "Input Output", route: "ReadyScreen",questions:"" },
    { title: "Hardware & Software", route: "ReadyScreen",questions:'' },
    { title: "Operating System", route: "ReadyScreen",questions:"" },
    { title: "Internet", route: "ReadyScreenA",questions:"" },
    { title: "Data", route: "ReadyScreenA" ,questions:""},
    { title: "Database", route: "ReadyScreenA" ,questions:""},
    { title: "Computer Virues", route: "ReadyScreenA",questions:"" },
    

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
              style={{margin:10,padding:20, width:'88%',borderWidth:1,borderRadius:10,borderBottomWidth:10,borderBottomWidth:5,borderBottomColor:"black",backgroundColor:"#FFBE0B",}}>
            <Text style ={{color:"black",fontWeight: "bold"}}>{item.title}</Text>
          </TouchableOpacity>
  )}
        
        />    
    </View>
  );
};

export default CStest;
