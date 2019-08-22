import React from "react";
import { TouchableOpacity, ImageBackground, Image, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import header from "../../assets/img/header.png";
import pizza1 from "../../assets/img/pizzas/1.png";
import pizza2 from "../../assets/img/pizzas/2.png";
import pizza3 from "../../assets/img/pizzas/3.png";
import pizza4 from "../../assets/img/pizzas/4.png";
import pizza5 from "../../assets/img/pizzas/5.png";
import pizza6 from "../../assets/img/pizzas/6.png";
import leftChevron from "../../assets/img/left-chevron.png";

import {
  Container,
  HeaderBackground,
  ButtonBack,
  HeaderTitle,
  Content,
  SaborName
} from "./style";

const Sabor = ({ navigation }) => (
  <Container>
    <ImageBackground source={header} style={{ height: 180 }}>
      <HeaderBackground>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}
        >
          <ButtonBack source={leftChevron} />
        </TouchableOpacity>
        <HeaderTitle>Selecione o Tipo</HeaderTitle>
      </HeaderBackground>

      <View style={{ flexDirection: "row" }}>
        <Content onPress={() => navigation.navigate("Tamanho")}>
          <Image source={pizza1} />
          <SaborName>Portuguesa</SaborName>
        </Content>
        <Content>
          <Image source={pizza2} />
          <SaborName>Calabresa</SaborName>
        </Content>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Content>
          <Image source={pizza3} />
          <SaborName>Frago Frito</SaborName>
        </Content>
        <Content>
          <Image source={pizza4} />
          <SaborName>Marguerita</SaborName>
        </Content>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Content>
          <Image source={pizza5} />
          <SaborName>Portuguesa</SaborName>
        </Content>
        <Content>
          <Image source={pizza6} />
          <SaborName>Portuguesa</SaborName>
        </Content>
      </View>
    </ImageBackground>
  </Container>
);

Sabor.navigationOptions = {
  header: null
};

export default Sabor;
