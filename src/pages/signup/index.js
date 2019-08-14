import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView
} from "react-native";

import styles from "./style";
import fundo from "../../assets/img/fundo.png";
import logo from "../../assets/img/logo.png";

class SignUp extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <ImageBackground style={styles.imgBackground} source={fundo}>
          <Image style={styles.logo} source={logo} alt="logo" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            placeholder="Nome completo"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            autoFocus
            returnKeyType="next"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            placeholder="Seu e-mail"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            autoFocus
            returnKeyType="next"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            placeholder="Sua senha"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
          />
          <TouchableOpacity
            style={styles.buttonEntrar}
            onPress={() => {}}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonEntrarText}>Criar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Text style={styles.textCriar}>Já tenho login</Text>
          </TouchableOpacity>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

SignUp.navigationOptions = {
  header: null
};

export default SignUp;
