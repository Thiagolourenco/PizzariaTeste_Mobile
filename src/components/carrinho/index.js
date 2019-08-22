import React from "react";
import {
  Text,
  ImageBackground,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import header from "../../assets/img/header.png";
import pizza from "../../assets/img/pizzas/1.png";
import shoppingCart from "../../assets/img/shoppingcart.png";
import leftChevron from "../../assets/img/left-chevron.png";
import rightChevron from "../../assets/img/right-chevron.png";
import remove from "../../assets/img/waste-bin.png";

import {
  Container,
  HeaderBackground,
  ButtonBack,
  HeaderTitle,
  Total,
  Content,
  ImageProduto,
  Title,
  Tamanho,
  Preco,
  ButtonFinalizar,
  ButtonFinalizarText,
  CarrinhoContainer
} from "./style";

const Carrinho = ({ navigation }) => (
  <Container>
    <ImageBackground source={header} style={{ height: 180 }}>
      <HeaderBackground>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Main")}
            activeOpacity={0.9}
          >
            <ButtonBack source={leftChevron} />
          </TouchableOpacity>
          <HeaderTitle>Carrinho</HeaderTitle>
        </View>
        <Total>R$ 107,00</Total>
      </HeaderBackground>
      <Content onPress={() => navigation.navigate("Sabor")}>
        <ImageProduto source={pizza} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pizza Calabresa</Title>
          <Tamanho>Tamanho Média</Tamanho>
          <Preco>R$ 42,00</Preco>
        </View>
        <TouchableOpacity
          style={{ justifyContent: "flex-end", alignSelf: "center" }}
          onPress={() => {}}
          activeOpacity={0.9}
        >
          <Image source={remove} />
        </TouchableOpacity>
      </Content>
      <Content onPress={() => navigation.navigate("Sabor")}>
        <ImageProduto source={pizza} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pizza Calabresa</Title>
          <Tamanho>Tamanho Média</Tamanho>
          <Preco>R$ 42,00</Preco>
        </View>
        <TouchableOpacity
          style={{ justifyContent: "flex-end", alignSelf: "center" }}
          onPress={() => {}}
          activeOpacity={0.9}
        >
          <Image source={remove} />
        </TouchableOpacity>
      </Content>
      <Content onPress={() => navigation.navigate("Sabor")}>
        <ImageProduto source={pizza} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Title>Pizza Calabresa</Title>
          <Tamanho>Tamanho Média</Tamanho>
          <Preco>R$ 42,00</Preco>
        </View>
        <TouchableOpacity
          style={{ justifyContent: "flex-end", alignSelf: "center" }}
          onPress={() => {}}
          activeOpacity={0.9}
        >
          <Image source={remove} />
        </TouchableOpacity>
      </Content>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CarrinhoContainer>
          <Image source={shoppingCart} />
        </CarrinhoContainer>
        <ButtonFinalizar onPress={() => navigation.navigate("Finalizar")}>
          <ButtonFinalizarText>REALIZAR PEDIDO </ButtonFinalizarText>
          <Image
            source={rightChevron}
            style={{
              marginRight: 8,
              height: 10,
              width: 10
            }}
          />
        </ButtonFinalizar>
      </View>
    </ImageBackground>
  </Container>
);

Carrinho.navigationOptions = {
  header: null
};

export default Carrinho;
