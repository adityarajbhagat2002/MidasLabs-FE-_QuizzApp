// // src/screens/ResultScreen.js
// import React from "react"
// import { View, Text, Button } from "react-native"

// const ResultScreen = ({ navigation }) => {
//   const restartQuiz = () => {
//     navigation.navigate("Home")
//   }

//   return (
//     <View>
//       <Text>Congratulations! You completed the quiz!</Text>
//       <Button title="Restart Quiz" onPress={restartQuiz} />
//     </View>
//   )
// }

// export default ResultScreen


import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define the type for the navigation prop
type ResultScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Result">;
};

// Define the root stack parameter list
type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Result: undefined;
  // Add more screens as needed
};

const ResultScreen: React.FC<ResultScreenProps> = ({ navigation }) => {
  const restartQuiz = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>Congratulations! You completed the quiz!</Text>
      <Button title="Restart Quiz" onPress={restartQuiz} />
    </View>
  );
};

export default ResultScreen;
