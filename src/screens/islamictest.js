import { View, Text } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import IslamicQuestion from "../components/IslamicQuestion";

const Islamictest = ({ navigation }) => {
  const Languages = [
    { title: "The Holy Quran", route: "ReadyScreen", questions: IslamicQuestion },
    { title: "The Prophet Muhammad (SAW)", route: "ReadyScreen", questions: "" },
    { title: "Shahada (Faith)", route: "ReadyScreen", questions: '' },
    { title: "Salat (Prayer)", route: "ReadyScreen", questions: "" },
    { title: "Zakat (Almsgiving)", route: "ReadyScreen", questions: "" },
    { title: "Sawm (Fasting)", route: "ReadyScreen", questions: "" },
    { title: "Hajj (Pilgrimage)", route: "ReadyScreen", questions: "" },
    { title: "Halal", route: "ReadyScreen", questions: "" },
    { title: "Haram", route: "ReadyScreen", questions: "" },
  ];

  return (
    <View style={{ margin: 40 }}>
      <FlatList
        data={Languages}
        keyExtractor={(item) => item.title}
        numColumns={2} // Displaying items in two columns
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(item.route, {
                title: item.title,
                questions: item.questions,
              })
            }
            style={{
              margin: 10,
              padding: 20,
              width: '42%', // Adjusted width to fit two columns
              borderWidth: 1,
              borderRadius: 15,
              borderBottomWidth: 5,
              borderBottomColor: "black",
              backgroundColor: "#FFBE0B",
            }}>
            <Text style={{ color: "black", fontWeight: "bold" }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Islamictest;
