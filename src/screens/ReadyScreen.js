import React from "react";
import { View, Button, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/ReadyQuiz";
const ReadyQuiz = ({ navigation ,route}) => {
  // --------Test data-------
  const Test=route.params.title;
  //-------- englishTenseQuestions-------
  const Questions=route.params.questions;
  
  return (
    // ------wrapper-------
    <View style={styles.startWrapper}>
      <View style={styles.upperSection}>
        <Pressable onPress={() => navigation.navigate("Salectlanguage")}>
          <View style={styles.backbtn}>
            <Text style={styles.backtxt}>Go Back</Text>
          </View>
        </Pressable>
       
        <View style={styles.headingSection}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Today's
          </Text>
          <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
            Super Quiz
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>
            Play Quizzy kids and Test Your Knowledge
          </Text>
        </View>
      </View>
      {/* ----ready to ----- */}
      <View style={styles.lowerSection}>
        <View>
          <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
            Today's Quiz on
          </Text>
          <Text style={{ color: "#004aad", fontSize: 35, fontWeight: "bold" }}>
     {Test}
          </Text>
          <Text style={{ color: "black", fontSize: 13 }}>
          There will be 15 Questions in Quiz
          </Text>
        </View>
        <View style={styles.imageWrapper2}>
          <Image
            style={styles.img2}
            source={require("../../assets/startQuiz3.png")}
          />
        </View>
        {/* ---------------------------------button------------------------------------ */}
        <Pressable onPress={() => navigation.navigate("Quiz_Questions",{title:Test,QuizQuesData:Questions})}>
          <View style={styles.playbtn}>
            <Text style={styles.btnText}>Play Quiz Now</Text>
          </View>
        </Pressable>
        {/* ----back------ */}
      </View>
    </View>
  );
};
export default ReadyQuiz;
