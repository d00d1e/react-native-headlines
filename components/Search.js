import { Entypo } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { NewsContext } from "../API/Context";
import SingleNews from "./SingleNews";

export default function Search() {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  const handleSearch = (text) => {
    if (!text || text === "" || text === null) {
      setSearchResults([]);
    } else {
      setSearchResults(articles?.filter((query) => query.title.includes(text)));
    }
  };

  const handleModal = (n) => {
    setModalVisible(true);
    setCurrentNews(n);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={{
          ...styles.searchInput,
          backgroundColor: darkTheme ? "#fff" : "#000",
          color: darkTheme ? "#000" : "#fff",
        }}
        placeholder="Search for news"
        placeholderTextColor={darkTheme ? "#000" : "#fff"}
        onChangeText={(text) => handleSearch(text)}
      />

      <View style={{ ...styles.searchResults }}>
        {searchResults?.slice(0, 10).map((n) => (
          <TouchableOpacity
            key={n.title}
            activeOpacity={0.7}
            onPress={() => handleModal(n)}
          >
            <Text
              style={{
                ...styles.singleResult,
                backgroundColor: darkTheme ? "#000" : "#fff",
                color: darkTheme ? "#fff" : "#000",
              }}
            >
              {n.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity
          style={styles.modal}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Entypo name="circle-with-cross" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.modalContent}>
          <SingleNews item={currentNews} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    position: "relative",
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 20,
  },
  searchResults: {
    position: "absolute",
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: "#000",
    elevation: 5,
  },
  modal: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: 20,
  },
  modalContent: {
    height: "100%",
    transform: [{ scaleY: -1 }],
  },
});
