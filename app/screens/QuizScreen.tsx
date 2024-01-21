import React, { useState, useEffect } from "react";
import { View, Text, Button  } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type QuizScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Quiz">;
};

type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Result: undefined;
};





const QuizScreen: React.FC<QuizScreenProps> = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questions = [
     { question: "What is the capital of Nepal?", answer: "Kathmandu" },
     { question: "What is the capital of France?", answer: "Paris" },
     { question: "What is the capital of India?", answer: "New Delhi" },
     { question: "What is the capital of United States? ", answer: "Washington D.C" },
     { question: "What is the capital of Canada ? ", answer: "Ottawa" },
     { question: "What is the capital of United Kingdom", answer: "London" },
     { question: "What is the capital ofGermany", answer: "Berlin" },
     { question: "What is the capital of Italy ", answer: "Rome" },
     { question: "What is the capital of Spain", answer: "Madrid" },
     { question: "What is the capital of Japan", answer: "Tokyo" },
     { question: "What is the capital of China", answer: "Beijing" },
     { question: "What is the capital of Brazil", answer: "Bre" },
     { question: "What is the capital of Australia ", answer: "Canberra" },
     { question: "What is the capital of Russia", answer: "Moscow" },
     { question: "What is the capital of Nigeria", answer: "Abuja" },
     { question: "What is the capital of South Korea", answer: "Seol" },
     { question: "What is the capital of Egypt", answer: "Cairo" },
  
  ];

  useEffect(() => {
    const correctAnswer = questions[currentQuestion].answer;
    const otherCities = questions
      .filter((question) => question.answer !== correctAnswer)
      .map((question) => question.answer)
      .slice(0, 3);

    const answerOptions = shuffleArray([correctAnswer, ...otherCities]);
    setShuffledOptions(answerOptions);
  }, [currentQuestion]);

  const checkAnswer = () => {
    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = selectedAnswer?.toLowerCase() === correctAnswer.toLowerCase();

    if (isCorrect) {
      alert("Correct!");
    } else {
      alert(`Incorrect! The correct answer is: ${correctAnswer}`);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      navigation.navigate("Result");
    }
  };

  return (
    <View>
      <Text>Question {currentQuestion + 1}</Text>
      <Text>{questions[currentQuestion].question}</Text>
      {shuffledOptions.map((option, index) => (
         <Button
         key={index}
         title={option}
         color={selectedAnswer === option ? "green" : undefined}
         onPress={() => setSelectedAnswer(option)}
       />

      ))}
   <Button title="Check Answer" onPress={checkAnswer} /> 

    </View>
  );
};


const shuffleArray = (array: any[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default QuizScreen;

