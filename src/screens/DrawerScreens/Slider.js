import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

const img = [
        require('../../assets/Image/slider/1.png'),
        require('../../assets/Image/slider/2.jpg'),
        require('../../assets/Image/slider/3.jpg'),
        require('../../assets/Image/slider/4.jpg'),
        require('../../assets/Image/slider/5.gif'),
      ];
export default  class Slider extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={img}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          autoplay
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1/2
  }
});