import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ReadyScreen from "./ReadyScreen";

const SelectLanguage = ({ navigation }) => {
  const Languages = [
    { title: "Science", route: "CppTest" },
    { title: "Mathematics", route: "JavaTest" },
    { title: "General Knowlegde", route: "JavascriptTest" }
  ];
  return (<>
    <View style={{ flex:1,justifyContent:'center',}}>
      <View style={{width:'100%',height:80,backgroundColor:'#FEC606',alignItems:'center', justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:20,color:'#004aad'}}>Programming Inspector</Text></View>
           <FlatList
        data={Languages}
        keyExtractor={(item)=>item.title}
        renderItem={({item})=>(
            <TouchableOpacity onPress={() => navigation.navigate(item.route)} style={{margin:10,padding:20,marginLeft:40,width:"80%",height:150, borderWidth:1,borderRadius:10,borderBottomWidth:5,borderBottomColor:"rgba(76, 209, 55,1.0)"}}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
  )}
        
        />    
    </View></>
  );
};

export default SelectLanguage;
