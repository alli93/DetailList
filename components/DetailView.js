import React from "react";
import { Text, View, Image, Button } from "react-native";

import styles from "../styles/DetailView";
/**
 * A react-native application for displaying humanoid information with
 * some simple state manipulation
 */
export class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humanoid: this.props.navigation.getParam("humanoid", [])
    };
    this.props.navigationOptions;
  }
  static navigationOptions = {
    title: "Go Back"
  };

  render() {
    humanoid = this.state.humanoid;
    return (
      <View style={styles.container}>
        <View style={styles.humanoidContainer}>
          <Avatar name={humanoid.name} avatar={humanoid.avatar} />
          <Info home={humanoid.home} work={humanoid.work} />
        </View>
      </View>
    );
  }
}

/**
 * Component renders either work or home information
 * along with a button for switching between information displays
 */
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: props.work,
      home: props.home,
      displayHomeInformation: true
    };
  }
  switchInfo = () => {
    let newState = this.state;
    newState.displayHomeInformation = !this.state.displayHomeInformation;
    this.setState(newState);
  };
  render() {
    let infoDisplay = this.state.displayHomeInformation ? (
      <HomeInfo home={this.state.home} />
    ) : (
      <WorkInfo work={this.state.work} />
    );

    return (
      <View>
        <Button
          title={
            "Show " +
            (this.state.displayHomeInformation ? "Work" : "Home") +
            " Information"
          }
          onPress={this.switchInfo}
        />
        {infoDisplay}
      </View>
    );
  }
}
/**
 * Simple component for rendering both avatar and name of humanoid
 */
class Avatar extends React.Component {
  render() {
    let name = this.props.name;
    let avatar = { uri: this.props.avatar };
    return (
      <View>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.name}>
          {name.first_name} {name.last_name}
        </Text>
      </View>
    );
  }
}

/**
 * Simple component for rendering work information of humanoid
 */
class WorkInfo extends React.Component {
  render() {
    let work = this.props.work;
    return (
      <View>
        <CustomText>{work.address}</CustomText>
        <CustomText>{work.email}</CustomText>
        <CustomText>{work.phone_number}</CustomText>
        <CustomText>{work.company_name}</CustomText>
        <CustomText>
          {work.department}, {work.job_title}
        </CustomText>
      </View>
    );
  }
}

/**
 * Simple component for rendering home information of humanoid
 */
class HomeInfo extends React.Component {
  render() {
    let home = this.props.home;
    return (
      <View>
        <CustomText>{home.address}</CustomText>
        <CustomText>{home.email}</CustomText>
        <CustomText>{home.phone_number}</CustomText>
      </View>
    );
  }
}

/**
 * Component used for text consistency. Apparently it is not possible
 * to inherit text style without breaking text layout using nested Text
 * components (on Android devices). Multiple Text components
 * within a view need to each have a style explicitly stated, or
 * use a custom text component like this one. I prefer this solution.
 */
class CustomText extends React.Component {
  render() {
    return <Text style={styles.customText}>{this.props.children}</Text>;
  }
}
