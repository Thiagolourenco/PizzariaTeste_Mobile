import React from "react";
import { Text, Image, ImageBackground, View } from "react-native";

import header from "../../assets/img/header.png";
import relogio from "../../assets/img/relogio.png";
import sacola from "../../assets/img/sacola.png";

import styles from "./style";

const Main = () => (
  <View style={styles.container}>
    <ImageBackground source={header} style={{ height: 180 }}>
      <View style={styles.headerContainer}>
        <Image style={styles.relogio} source={relogio} />
        <Text style={styles.headerTitle}>Pizzaria Don Juan</Text>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20
          }}
        >
          <Image style={styles.sacola} source={sacola} />
        </View>
      </View>
    </ImageBackground>
  </View>
);

Main.navigationOptions = {
  header: null
};

export default Main;
