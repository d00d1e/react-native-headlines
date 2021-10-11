import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import { NewsContext } from "../API/Context";
import { categories, sources } from "../API/api";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Search from "../components/Search";

export default function DiscoverScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 4);

  return (
    <View style={styles.discover}>
      {/* SEARCH */}
      <Search />

      {/* CATEGORIES */}
      <Text style={{ ...styles.subtitle, color: darkTheme ? "#fff" : "#000" }}>
        Categories
      </Text>
      <Carousel
        layout={"default"}
        data={categories}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        loop={true}
        enableSnap={true}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(item.name)}
          >
            <Image source={{ uri: item.img }} style={styles.categoryImage} />
            <Text
              style={{ ...styles.name, color: darkTheme ? "#fff" : "#000" }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* <Pagination
        dotsLength={7}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "transparent" }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 14,
          marginHorizontal: 5,
          marginVertical: -2,
          backgroundColor: darkTheme ? "#fff" : "#000",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}

      {/* SOURCES */}
      <Text style={{ ...styles.subtitle, color: darkTheme ? "#fff" : "#000" }}>
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            key={s.id}
            style={styles.sourceContainer}
            onPress={() => setSource(s.id)}
          >
            <Image source={{ uri: s.img }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "50%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 13,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#fff",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});
