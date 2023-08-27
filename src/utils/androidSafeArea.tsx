import {Platform, StyleSheet, StatusBar} from "react-native";

const androidSA = StyleSheet.create({
  safe: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
const androidSafeArea = androidSA.safe;
export default androidSafeArea;
