import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define the type for the navigation prop
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

// Define the root stack parameter list
type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Result: undefined;
  // Add more screens as needed
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const startQuiz = () => {
    navigation.navigate("Quiz");
  };

  return (
    <View>
      <Text>Welcome to the Quiz App!</Text>
      <Button title="Start Quiz" onPress={startQuiz} />
    </View>
  );
};

export default HomeScreen;
