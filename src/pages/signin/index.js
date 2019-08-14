import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  Platform
} from "react-native";

import styles from "./style";
import fundo from "../../assets/img/fundo.png";
import logo from "../../assets/img/logo.png";

class SignIn extends Component {
  handleSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

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
            <Text style={styles.buttonEntrarText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleSignUp} activeOpacity={0.8}>
            <Text style={styles.textCriar}>Criar Conta gratuita</Text>
          </TouchableOpacity>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

SignIn.navigationOptions = {
  header: null
};

export default SignIn;
