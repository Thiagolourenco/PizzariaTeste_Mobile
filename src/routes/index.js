import { createAppContainer, createStackNavigator } from "react-navigation";

import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import Main from "../pages/main";
import Sabor from "../components/sabor";
import Tamanho from "../components/tamanho";
import Carrinho from "../components/carrinho";
import Finalizar from "../components/finalizarPedido";
import Historico from "../components/historico";

export default createAppContainer(
  createStackNavigator(
    {
      SignIn,
      SignUp,
      Main,
      Sabor,
      Tamanho,
      Carrinho,
      Finalizar,
      Historico
    },
    {
      initialRouteName: "SignIn"
    }
  )
);
