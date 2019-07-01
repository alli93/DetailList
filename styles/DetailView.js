import { StyleSheet } from "react-native";
import common from "./common";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingHorizontal: 50,
    backgroundColor: common.yellow,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  humanoidContainer: {
    padding: 5,
    backgroundColor: common.black,
    alignItems: "stretch",
    justifyContent: "center"
  },
  avatar: {
    width: 225,
    height: 300,
    resizeMode: "stretch",
    backgroundColor: common.white
  },
  name: {
    fontSize: 30,
    backgroundColor: common.white,
    textAlign: "center"
  },
  customText: {
    fontSize: 16,
    paddingTop: 5,
    backgroundColor: common.white,
    textAlign: "center"
  }
});
