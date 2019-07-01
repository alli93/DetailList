import React from "react";
import { Text, View, SectionList, TouchableOpacity } from "react-native";

import styles from "../styles/DetailList";

/**
 * A component for creating a navigable section list from provided data.
 */
export class DetailList extends React.Component {
  constructor(props) {
    super(props);
    // Alphabetically sort, then reduce and store humanoid data in a sectioned format
    let sectionedHumanoids = require("../data/ass2data.json")
      // sort alphabetically
      .sort((a, b) => {
        var name = (a.name.first_name + a.name.last_name).toUpperCase();
        var otherName = (b.name.first_name + b.name.last_name).toUpperCase();
        if (name < otherName) {
          return -1;
        }
        if (name > otherName) {
          return 1;
        }
        if (name == otherName) {
          return 0;
        }
      })
      // reduce to a sectioned format
      .reduce((sectionedItems, item) => {
        const letter = item.name.first_name.charAt(0);
        if (letter in sectionedItems) {
          sectionedItems[letter].push(item);
        } else {
          sectionedItems[letter] = [item];
        }
        return sectionedItems;
      }, {});

    // store sorted, sectioned data into component state with a [title, data[]] format
    this.state = { sectionedData: [] };
    for (section in sectionedHumanoids) {
      this.state.sectionedData.push({
        title: section,
        data: sectionedHumanoids[section]
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <SectionList
            renderItem={({ item, index, section }) => (
              <TouchableOpacity
                key={index}
                style={styles.sectionItem}
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    humanoid: item
                  })
                }
              >
                <Text style={styles.sectionItemText}>
                  {item.name.first_name} {item.name.last_name}
                </Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
              </View>
            )}
            sections={this.state.sectionedData}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </View>
    );
  }
}
