import { createAppContainer, createStackNavigator } from "react-navigation";

import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import Main from "../pages/main";

export default createAppContainer(
  createStackNavigator(
    {
      SignIn,
      SignUp,
      Main
    },
    { initialRouteName: "Main" }
  )
);
