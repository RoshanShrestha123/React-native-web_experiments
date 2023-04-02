import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native-web";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const buttonStyle = StyleSheet.create({
    button: {
      borderRadius: 5,
      padding: 10,
      borderWidth: 1,
      outlineWidth: 0,
      backgroundColor: "red",
      color: "white",
      textAlign: "center",
      marginBottom: "10px",
    },

    text: {
      color: "white",
      textAlign: "center",
      fontSize: "1.5rem",
    },
  });

  const multipleStyle = StyleSheet.create({
    container: {
      padding: "1rem",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },

    containerWrapper: {
      width: "30%",
      textAlign: "center",
    },

    counterText: {
      color: "red",
      textAlign: "center",
      fontSize: "10rem",
      marginBottom: "10px",
    },
  });
  return (
    <View style={multipleStyle.container}>
      <View style={multipleStyle.containerWrapper}>
        <Text style={multipleStyle.counterText}>{counter}</Text>
        <View>
          <Pressable
            accessibilityRole="button"
            style={buttonStyle.button}
            onPress={() => {
              setCounter(counter + 1);
            }}
          >
            <Text style={buttonStyle.text}>Increase</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            style={buttonStyle.button}
            onPress={() => {
              setCounter(counter - 1);
            }}
          >
            <Text style={buttonStyle.text}>Decrease</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
