import React, { Component } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import header from "../../assets/img/header.png";
import tamanhogg from "../../assets/img/tamanhos/tamanho-gg.png";
import tamanhom from "../../assets/img/tamanhos/tamanho-m.png";
import tamanhop from "../../assets/img/tamanhos/tamanho-p.png";
import tamanhog from "../../assets/img/tamanhos/tamanhog.png";
import leftChevron from "../../assets/img/left-chevron.png";

import {
  Container,
  HeaderBackground,
  ButtonBack,
  HeaderTitle,
  Content,
  TituloTamanho,
  Preco,
  ButtonContinuar,
  ButtonContinuarText,
  ButtonVoltar,
  ButtonVoltarText,
  TextoModal
} from "./style";
import Modal from "../modal";

class Tamanho extends Component {
  state = {
    visible: false
  };

  onOpenModal = () => {
    this.setState({ visible: true });
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  handleNavigationCar = () => {
    const { navigation } = this.props;

    navigation.navigate("Carrinho");
    this.closeModal();
  };

  handleNavigationContinue = () => {
    const { navigation } = this.props;

    navigation.navigate("Main");
    this.closeModal();
  };

  render() {
    const { navigation } = this.props;
    const { visible } = this.state;

    return (
      <Container>
        <ImageBackground source={header} style={{ height: 180 }}>
          <HeaderBackground>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.9}
            >
              <ButtonBack source={leftChevron} />
            </TouchableOpacity>
            <HeaderTitle>Selecione um tamanho </HeaderTitle>
          </HeaderBackground>

          <View style={{ flexDirection: "row" }}>
            <Content onPress={this.onOpenModal}>
              <Image source={tamanhogg} />
              <TituloTamanho>Gigante</TituloTamanho>
              <Preco>R$ 72,00</Preco>
            </Content>
            <Content>
              <Image source={tamanhog} />
              <TituloTamanho>Grande</TituloTamanho>
              <Preco>R$ 59,00</Preco>
            </Content>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Content>
              <Image source={tamanhom} />
              <TituloTamanho>Média</TituloTamanho>
              <Preco>R$ 42,00</Preco>
            </Content>
            <Content>
              <Image source={tamanhop} />
              <TituloTamanho>Pequena</TituloTamanho>
              <Preco>R$ 29,00</Preco>
            </Content>
          </View>
          <Modal visible={visible} onRequestClose={() => {}}>
            <TextoModal>Deseja continuar adquirindo mais produtos?</TextoModal>
            <ButtonContinuar onPress={this.handleNavigationContinue}>
              <ButtonContinuarText>Continuar Comprando</ButtonContinuarText>
            </ButtonContinuar>
            <ButtonVoltar onPress={this.handleNavigationCar}>
              <ButtonVoltarText>Finalizar Compra</ButtonVoltarText>
            </ButtonVoltar>
          </Modal>
        </ImageBackground>
      </Container>
    );
  }
}

Tamanho.navigationOptions = {
  header: null
};

export default Tamanho;
