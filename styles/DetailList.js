import { StyleSheet } from "react-native";
import common from "./common";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: common.yellow,
    alignItems: "stretch",
    justifyContent: "center"
  },
  sectionHeader: {
    paddingHorizontal: 10,
    backgroundColor: common.darkYellow
  },
  sectionHeaderText: {
    fontSize: 36
  },
  sectionItem: {
    marginVertical: 5
  },
  sectionItemText: {
    fontSize: 24
  }
});
