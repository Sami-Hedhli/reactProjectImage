import React from "react";
import {  View, Image } from "react-native";
import { Dimensions } from "react-native";

const ImageScreen = ({ route, navigation }) => {
  const { image } = route.params;
  navigation.setOptions({ title: image.alt_description });
  return (
    <View>
      <Image
        style={{
          height: Math.round(Dimensions.get("window").height),
          resizeMode: "contain"
        }}
        source={{ uri: image.urls.full }}
      />
    </View>
  );
};

export default ImageScreen;
