import React from "react";
import {
  ScrollView,
  Image,
  ImageBackground,
  View,
  TouchableOpacity
} from "react-native";

import header from "../../assets/img/header.png";
import relogio from "../../assets/img/relogio.png";
import sacola from "../../assets/img/sacola.png";
import pizza from "../../assets/img/pizza.png";
import massa from "../../assets/img/massa.png";
import refri from "../../assets/img/refri.png";
import calzones from "../../assets/img/calzones.png";
import alcool from "../../assets/img/alcool.png";

import {
  Container,
  HeaderBackground,
  HeaderTitle,
  HeaderRelogio,
  Content,
  ImageProduto,
  Title,
  Description,
  ImageTemp,
  Texto
} from "./style";

const Main = ({ navigation }) => (
  <Container>
    <ImageBackground source={header} style={{ height: 180 }}>
      <HeaderBackground>
        <TouchableOpacity
          onPress={() => navigation.navigate("Historico")}
          activeOpacity={0.8}
        >
          <HeaderRelogio source={relogio} />
        </TouchableOpacity>
        <HeaderTitle>Pizzaria Don Juan</HeaderTitle>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20
          }}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Image source={sacola} />
        </TouchableOpacity>
      </HeaderBackground>
      <Content onPress={() => navigation.navigate("Sabor")}>
        <ImageProduto source={pizza} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pizzas</Title>
          <Description>
            Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome
          </Description>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <ImageTemp source={relogio} />
            <Texto>30 mins</Texto>
          </View>
        </View>
      </Content>
      <Content>
        <ImageProduto source={massa} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pizzas</Title>
          <Description>
            Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome
          </Description>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <ImageTemp source={relogio} />
            <Texto>30 mins</Texto>
          </View>
        </View>
      </Content>
      <Content>
        <ImageProduto source={calzones} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pizzas</Title>
          <Description>
            Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome
          </Description>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <ImageTemp source={relogio} />
            <Texto>30 mins</Texto>
          </View>
        </View>
      </Content>
      <Content>
        <ImageProduto source={refri} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pizzas</Title>
          <Description>
            Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome
          </Description>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <ImageTemp source={relogio} />
            <Texto>30 mins</Texto>
          </View>
        </View>
      </Content>
      <Content>
        <ImageProduto source={alcool} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pizzas</Title>
          <Description>
            Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome
          </Description>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <ImageTemp source={relogio} />
            <Texto>30 mins</Texto>
          </View>
        </View>
      </Content>
    </ImageBackground>
  </Container>
);

Main.navigationOptions = {
  header: null
};

export default Main;
