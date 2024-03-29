import { View, Text, Image ,ImageBackground} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
// import QuizQuesData from "./QuizQuesData";
import styles from "../style/QuestionStyle";
import { ProgressBar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Quiz_Questions = ({ navigation, route }) => {
  // --------------Questions--------------
  const data = route.params.QuizQuesData;
  // -------Quiz title------------
  const title = route.params.title;
  const [progress, setProgress] = useState(0); // Change this value to set the progress
  const progressBarColor = "black";
  const allQuestion = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctOption, setCorrectOption] = useState(null);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);
  const [isDisabledOption, setisDisabledOption] = useState(false);
  const [score, setScore] = useState(0);

  const [showNextBtn, setshowNextBtn] = useState(false);
  // const [disabled, setdisabled] = useState(1);
  // ----------validate Answer------------

  // useEffect(() => {
    // This effect runs whenever correctOption changes
  //   if (currentSelectedOption !== null) {
  //     if (currentSelectedOption === correctOption) {
  //       setProgress(progress + 0.1);
  //       setisDisabledOption(true);
  //     }

  //     setshowNextBtn(true);
  //   } 
  // }, [correctOption, currentSelectedOption]);

  const validateAnswer = (selectedOption) => {
    const correct_option = allQuestion[currentQuestionIndex].correct_option;
    setCurrentSelectedOption(selectedOption);
    setCorrectOption(correct_option);
    setisDisabledOption(true)
    setshowNextBtn(true);

    if(selectedOption===correct_option){
      setScore(score+1)
    }



  };
  // show next button
  const handleNext = () => {
    if (currentQuestionIndex === allQuestion.length - 1) {
      setCurrentQuestionIndex(0);
      setCorrectOption(null);
      setCurrentSelectedOption(null);
      setisDisabledOption(false);
      setshowNextBtn(false);
      setProgress(0);
//       const newDisabledValue = disabled + 1;
// setdisabled(newDisabledValue);

navigation.navigate("Result", { score:score});
// console.log(disabled)
  
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // setshowNextBtn(true);
      setCorrectOption(null);
      setshowNextBtn(false);
      setisDisabledOption(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor:"#FFBE0B" }}>
   <View style={styles.Wrapper}></View>
      {/* -----------PROGRESS BAR---------- */}
      <View style={{ alignItems: "center", paddingBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          {title}
        </Text>
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
        color={progressBarColor}
        style={{ width: "100%", height: 15, borderRadius: 10 }}
      />
      {/* ----------COUNTER--------------- */}
      <View style={{ paddingTop: 10, paddingLeft: 5 }}>
        <Text style={{ fontSize: 12 }}>
          {currentQuestionIndex + 1}/{allQuestion.length}
        </Text>
      </View>
      {/* --------------QUESTION------------ */}
 
      {/* Your content goes here */}
    
   

      <View style={styles.choices}>
        <View style={styles.questionsWrapper}>
          <Text style={styles.questiontext}>
            {allQuestion[currentQuestionIndex].question}
          </Text>
        </View>
        {/*------------ options ------------*/}
        <View style={{ marginTop:5 }}>
          {allQuestion[currentQuestionIndex]?.options.map((option) => (
            <TouchableOpacity
              key={option}
              disabled={isDisabledOption}
              style={{
                width: "100%",
                height: 55,
              
                borderRadius: 20,
                marginTop: 20,
                flexDirection: "row",
                borderWidth: 2.5,
                borderColor: "white",
                alignItems: "center",
                paddingHorizontal: 20,
                justifyContent: "space-between",
                borderColor:
                  option === currentSelectedOption
                    ? option === correctOption
                      ? "green"
                      : "red"
                    : "#FEC606",
                backgroundColor:
                  option === currentSelectedOption
                    ? option === correctOption
                      ? "rgba(0,255,0,0.2)"
                      : "rgba(255,0,0,0.1)"
                    : "white",
              }}
              onPress={() => validateAnswer(option)}
            >
              <Text
                style={{ fontSize: 16, letterSpacing: 2, color: "black" }}
              >
                {option}
              </Text>
              {option === currentSelectedOption && option === correctOption ? (
                <View style={{ height: 30 }}>
                  <Ionicons name="checkmark-circle" size={32} color="green" />
                </View>
              ) : option === currentSelectedOption ? (
                <View>
                  <Ionicons name="close-circle" size={32} color="red" />
                </View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
        {/* ---------------------next button----------------- */}
        {showNextBtn && (
          <View>
            <TouchableOpacity onPress={handleNext} style={styles.nextbtn}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Quiz_Questions;
