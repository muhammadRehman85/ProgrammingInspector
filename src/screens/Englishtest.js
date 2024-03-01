import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import BasicQuestions from "../components/EnglishQuestionData/BasicQuestions";
import VocabularyQuestion from "../components/EnglishQuestionData/VocabularyQuestion";
import ColorshapQuestion from "../components/EnglishQuestionData/ColorshapQuestion";
import NounQuestion from "../components/EnglishQuestionData/NounQuestion";
import PronounQuestion from "../components/EnglishQuestionData/PronounQuestion";
import AdjectiveQuestion from "../components/EnglishQuestionData/AdjectiveQuestion";
import VerbQuestion from "../components/EnglishQuestionData/VerbQuestion";
import AdverbQuestion from "../components/EnglishQuestionData/AdverbQuestion";
import PrepositionQuestion from "../components/EnglishQuestionData/PrepositionQuestion";
import ConjunctionQuestion from "../components/EnglishQuestionData/ConjunctionQuestion";
import InterjectionQquestion from "../components/EnglishQuestionData/InterjectionQuestion";
import TensesQuestion from "../components/EnglishQuestionData/TensesQuestion";
import ActivePassiveQuestions from "../components/EnglishQuestionData/ActivePassiveQuestion";
import DirectIndirectQuestion from "../components/EnglishQuestionData/DirectIndirectQuestion";
const EnglishTest = ({ navigation }) => {
  const Languages = [
    { title: "Alphabet Recognition", route: "ReadyScreen", questions: BasicQuestions },
    { title: "Basic Vocabulary", route: "ReadyScreen", questions: VocabularyQuestion },
    { title: "Colors and Shapes", route: "ReadyScreen", questions: ColorshapQuestion }, 
    { title: "Noun", route: "ReadyScreen", questions: NounQuestion },
    { title: "Pronoun", route: "ReadyScreen", questions: PronounQuestion  },
    { title: "Adjective", route: "ReadyScreen", questions: AdjectiveQuestion },
    { title: "Verb", route: "ReadyScreen", questions: VerbQuestion },
    { title: "Adverb", route: "ReadyScreen", questions: AdverbQuestion },
    { title: "Preposition", route: "ReadyScreen", questions: PrepositionQuestion },
    { title: "Conjunction", route: "ReadyScreen", questions: ConjunctionQuestion },
    { title: "Interjection", route: "ReadyScreen", questions: InterjectionQquestion },
    { title: "Tenses", route: "ReadyScreen", questions: TensesQuestion },
    { title: "Active & Passive Voice", route: "ReadyScreen", questions: ActivePassiveQuestions },
    { title: "Direct & Indirect Narration", route: "ReadyScreen", questions: DirectIndirectQuestion },
    
  ];

  return (
    <View style={{ margin: 40 }}>
      <FlatList
        data={Languages}
        keyExtractor={(item) => item.title}
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
              width: "88%",
              borderWidth: 1,
              borderRadius: 10,
              borderBottomWidth: 5,
              borderBottomColor: "black",
              backgroundColor: "#FFBE0B",
              marginLeft: 20,
              
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold",}}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default EnglishTest;
