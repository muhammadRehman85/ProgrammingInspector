import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import islamicQuestion from "../components/islamicQuestion";


const islamictest= ({ navigation }) => {
  const Languages = [
    { title: "The Holy Quran", route: "ReadyScreen" ,questions:islamicQuestion},
    { title: "The Prophet Muhammad (SAW)", route: "ReadyScreen",questions:"" },
    { title: "Shahada (Faith)", route: "ReadyScreen",questions:'' },
    { title: "Salat (Prayer)", route: "ReadyScreen",questions:"" },
    { title:"Zakat (Almsgiving)", route: "ReadyScreen",questions:"" },
    { title: "Sawm (Fasting)", route: "ReadyScreen" ,questions:""},
    { title: "Hajj (Pilgrimage)", route: "ReadyScreen" ,questions:""},
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

export default islamictest;
