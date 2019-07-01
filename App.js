import React from "react";
import { createStackNavigator } from "react-navigation";
import { DetailList } from "./components/DetailList";
import { DetailView } from "./components/DetailView";
import common from "./styles/common";

/**
 * An app which showcases a simple use for a stack navigator
 * and section list.
 */
export default class App extends React.Component {
  render() {
    return <StackNavigator />;
  }
}

const StackNavigator = createStackNavigator(
  {
    List: DetailList,
    Details: DetailView
  },
  {
    initialRouteName: "List",
    navigationOptions: {
      // rest is styling
      title: "Humanoids",
      headerStyle: {
        backgroundColor: common.darkYellow
      },
      headerTintColor: common.black,
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 36
      }
    }
  }
);
