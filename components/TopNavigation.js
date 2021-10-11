import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { NewsContext } from "../API/Context";

export default function TopNavigation({ index, setIndex }) {
  const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282c35" : "#fff",
      }}
    >
      {index === 0 ? (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setDarkTheme(!darkTheme)}
        >
          <Text
            style={{ ...styles.text, color: darkTheme ? "lightgrey" : "#000" }}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007FFF"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
          <Text
            style={{ ...styles.text, color: darkTheme ? "lightgrey" : "#000" }}
          >
            Discover
          </Text>
        </TouchableOpacity>
      )}

      <Text
        style={{ ...styles.center, color: darkTheme ? "lightgrey" : "#000" }}
      >
        {index ? "All News" : "Discover"}
      </Text>

      {index ? (
        <TouchableOpacity
          style={styles.right}
          onPress={() => fetchNews("general")}
        >
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007fff" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 1 ? 0 : 1)}
        >
          <Text
            style={{ ...styles.text, color: darkTheme ? "lightgrey" : "#000" }}
          >
            All News
          </Text>
          <SimpleLineIcons name="arrow-right" size={15} color="#007fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  right: {
    width: 80,
    alignItems: "flex-end",
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007fff",
    borderBottomWidth: 4,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
  },
});
