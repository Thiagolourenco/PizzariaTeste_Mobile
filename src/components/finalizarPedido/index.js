import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

import Header from "../../assets/img/header.png";
import leftChevron from "../../assets/img/left-chevron.png";
import rightChevron from "../../assets/img/right-chevron.png";

import {
  Container,
  HeaderBackground,
  ButtonBack,
  HeaderTitle,
  Total,
  Content,
  InputTextArea,
  Input,
  InputRua,
  InputNumero,
  ButtonFinalizar,
  ButtonFinalizarText,
  TextoModal
} from "./style";

import Modal from "../modal";

class Finalizar extends Component {
  state = {
    visible: false
  };

  onOpenModal = () => {
    this.setState({ visible: true });
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  handleFinalizar = () => {
    const { navigation } = this.props;

    this.onOpenModal();

    setTimeout(() => {
      navigation.navigate("Main");
      this.closeModal();
    }, 3000);
  };

  render() {
    const { navigation } = this.props;
    const { visible } = this.state;

    return (
      <Container>
        <ImageBackground source={Header} style={{ height: 180 }}>
          <HeaderBackground>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.9}
              >
                <ButtonBack source={leftChevron} />
              </TouchableOpacity>
              <HeaderTitle>Realizar Pedido</HeaderTitle>
            </View>
            <Total>R$ 107,00</Total>
          </HeaderBackground>
          <Content>
            <InputTextArea placeholder="Alguma Observação?" />
            <Input placeholder="Qual seu CEP" />
            <View style={{ flexDirection: "row" }}>
              <InputRua placeholder="Rua" />
              <InputNumero placeholder="Nº" />
            </View>
            <Input placeholder="Bairro" />
            <ButtonFinalizar onPress={this.handleFinalizar}>
              <ButtonFinalizarText>Finalizar</ButtonFinalizarText>
              <Image
                source={rightChevron}
                style={{
                  marginRight: 10,
                  height: 10,
                  width: 10
                }}
              />
            </ButtonFinalizar>
          </Content>

          <Modal visible={visible} onRequestClose={() => {}}>
            <TextoModal>
              Pedido Realizado com sucesso, aguarde entrega....
            </TextoModal>
          </Modal>
        </ImageBackground>
      </Container>
    );
  }
}

Finalizar.navigationOptions = {
  header: null
};

export default Finalizar;
