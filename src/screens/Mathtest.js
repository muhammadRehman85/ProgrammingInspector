import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import MathQuestion from "../components/MathQuestion";


const Mathtest= ({ navigation }) => {
  const Languages = [
    { title: "Counting", route: "ReadyScreen" ,questions:MathQuestion},
    { title: "Number Recognition", route: "ReadyScreen",questions:"" },
    { title: "Addition", route: "ReadyScreen",questions:'' },
    { title: "Subtraction", route: "ReadyScreen",questions:"" },
    { title: "Shapes", route: "ReadyScreen",questions:"" },
    { title: "Basic Word Problems", route: "ReadyScreen" ,questions:""},
    { title: "Fractions", route: "ReadyScreen" ,questions:""},
    { title: "Place Value:", route: "ReadyScreen",questions:"" },
    

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
              style={{margin:10,padding:20, width:'88%',borderWidth:1,borderRadius:15,borderBottomWidth:5,borderBottomColor:"black",backgroundColor:"#FFBE0B"}}>
            <Text style ={{color:"black",fontWeight: "bold" }}>{item.title}</Text>
          </TouchableOpacity>
  )}
        
        />    
    </View>
  );
};

export default Mathtest;
