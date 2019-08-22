import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";

import Header from "../../assets/img/header.png";
import leftChevron from "../../assets/img/left-chevron.png";

import {
  Container,
  HeaderBackground,
  ButtonBack,
  HeaderTitle,
  Content,
  Title,
  DiaPedido,
  Texto
} from "./style";

const Finalizar = ({ navigation }) => (
  <Container>
    <ImageBackground source={Header} style={{ height: 180 }}>
      <HeaderBackground>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          activeOpacity={0.9}
        >
          <ButtonBack source={leftChevron} />
        </TouchableOpacity>
        <HeaderTitle>Selecione o Tipo</HeaderTitle>
      </HeaderBackground>
      <Content onPress={() => navigation.navigate("Sabor")}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pedido #3</Title>
          <DiaPedido>Ontem as 17h</DiaPedido>
          <Texto>R$ 40,00</Texto>
        </View>
      </Content>
      <Content onPress={() => navigation.navigate("Sabor")}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pedido #3</Title>
          <DiaPedido>Ontem as 17h</DiaPedido>
          <Texto>R$ 40,00</Texto>
        </View>
      </Content>
      <Content onPress={() => navigation.navigate("Sabor")}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pedido #3</Title>
          <DiaPedido>Ontem as 17h</DiaPedido>
          <Texto>R$ 70,00</Texto>
        </View>
      </Content>
    </ImageBackground>
  </Container>
);

Finalizar.navigationOptions = {
  header: null
};

export default Finalizar;
