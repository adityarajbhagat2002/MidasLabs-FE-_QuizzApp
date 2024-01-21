import React, { FC } from "react"
import * as Application from "expo-application"
import { Linking, Platform, TextStyle, View, ViewStyle } from "react-native"
import { Button, ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { useStores } from "../models"

function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}

export const DemoDebugScreen: FC<DemoTabScreenProps<"DemoDebug">> = function DemoDebugScreen(
  _props,
) {
  const {
    authenticationStore: { logout },
  } = useStores()

  const usingHermes = typeof HermesInternal === "object" && HermesInternal !== null
  // @ts-expect-error
  const usingFabric = global.nativeFabricUIManager != null

  const demoReactotron = React.useMemo(
    () => async () => {
      if (__DEV__) {
        console.tron.display({
          name: "DISPLAY",
          value: {
            appId: Application.applicationId,
            appName: Application.applicationName,
            appVersion: Application.nativeApplicationVersion,
            appBuildVersion: Application.nativeBuildVersion,
            hermesEnabled: usingHermes,
          },
          important: true,
        })
      }
    },
    [],
  )

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <Text
        style={$reportBugsLink}
        tx="demoDebugScreen.reportBugs"
        onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite/issues")}
      />
      <Text style={$title} preset="heading" tx="demoDebugScreen.title" />
      <View style={$itemsContainer}>
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Id</Text>
              <Text>{Application.applicationId}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Name</Text>
              <Text>{Application.applicationName}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Version</Text>
              <Text>{Application.nativeApplicationVersion}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Build Version</Text>
              <Text>{Application.nativeBuildVersion}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">Hermes Enabled</Text>
              <Text>{String(usingHermes)}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">Fabric Enabled</Text>
              <Text>{String(usingFabric)}</Text>
            </View>
          }
        />
      </View>
      <View style={$buttonContainer}>
        <Button style={$button} tx="demoDebugScreen.reactotron" onPress={demoReactotron} />
        <Text style={$hint} tx={`demoDebugScreen.${Platform.OS}ReactotronHint` as const} />
      </View>
      <View style={$buttonContainer}>
        <Button style={$button} tx="common.logOut" onPress={logout} />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.xxl,
}

const $reportBugsLink: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.lg,
  alignSelf: isRTL ? "flex-start" : "flex-end",
}

const $item: ViewStyle = {
  marginBottom: spacing.md,
}

const $itemsContainer: ViewStyle = {
  marginBottom: spacing.xl,
}

const $button: ViewStyle = {
  marginBottom: spacing.xs,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.md,
}

const $hint: TextStyle = {
  color: colors.palette.neutral600,
  fontSize: 12,
  lineHeight: 15,
  paddingBottom: spacing.lg,
}

// src/screens/QuizScreen.js
// import React, { useState } from "react"
// import { View, Text, Button } from "react-native"

// const questions = [
//   { question: "What is the capital of Nepal?", answer: "Kathmandu" },
//   { question: "What is the capital of France?", answer: "Paris" },
//   { question: "What is the capital of India?", answer: "New Delhi" },
//   { question: "What is the capital of United States? ", answer: "Washington D.C" },
//   { question: "What is the capital of Canada ? ", answer: "Ottawa" },
//   { question: "What is the capital of United Kingdom", answer: "London" },
//   { question: "What is the capital ofGermany", answer: "Berlin" },
//   { question: "What is the capital of Italy ", answer: "Rome" },
//   { question: "What is the capital of Spain", answer: "Madrid" },
//   { question: "What is the capital of Japan", answer: "Tokyo" },
//   { question: "What is the capital of China", answer: "Beijing" },
//   { question: "What is the capital of Brazil", answer: "Bre" },
//   { question: "What is the capital of Australia ", answer: "Canberra" },
//   { question: "What is the capital of Russia", answer: "Moscow" },
//   { question: "What is the capital of Nigeria", answer: "Abuja" },
//   { question: "What is the capital of South Korea", answer: "Seol" },
//   { question: "What is the capital of Egypt", answer: "Cairo" },
// ]

// const QuizScreen = ({ navigation }) => {
//   const [currentQuestion, setCurrentQuestion] = useState(0)

//   const checkAnswer = (userAnswer) => {
//     const correctAnswer = questions[currentQuestion].answer
//     if (userAnswer === correctAnswer) {
//       // Handle correct answer
//       alert("Correct!")
//     } else {
//       // Handle incorrect answer
//       alert("Incorrect!")
//     }

//     // Move to the next question
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1)
//     } else {
//       // End of the quiz, navigate to ResultScreen
//       navigation.navigate("Result")
//     }
//   }

//   return (
//     <View>
//       <Text>Question {currentQuestion + 1}</Text>
//       <Text>{questions[currentQuestion].question}</Text>
//       <Button title="Option A" onPress={() => checkAnswer("Option A")} />
//       <Button title="Option B" onPress={() => checkAnswer("Option B")} />
//       <Button title="Option C" onPress={() => checkAnswer("Option C")} />
//       <Button title="Option D" onPress={() => checkAnswer("Option D")} />
//     </View>
//   )
// }

// export default QuizScreen
