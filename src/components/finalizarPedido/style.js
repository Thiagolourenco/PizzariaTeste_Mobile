import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderBackground = styled.ImageBackground`
  flex-direction: row;
  margin-top: 25px;
  margin-left: 20px;
  justify-content: space-between;
`;

export const ButtonBack = styled.Image`
  margin-right: 10px;
  height: 15px;
  width: 15px;
  margin-top: 5px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  letter-spacing: 0;
  text-align: left;
`;

export const Total = styled.Text`
  font-size: 18px;
  color: #fff;
  letter-spacing: 0;
  text-align: right;
  margin-right: 15px;
`;

export const Content = styled.View`
  flex-direction: row;
  width: 90%;
  margin-left: 20px;
  border-radius: 8px;
  padding: 15px;
  flex-direction: column;
  margin-top: 25px;
`;

export const InputTextArea = styled.TextInput`
  height: 155px;
  background-color: #fff;
  border-width: 1px;
  border-bottom-width: 0;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 100%;
  padding-bottom: 100px;
  padding-left: 20px;
  font-size: 15px;
  color: #999999;
  text-align: left;
  letter-spacing: 0;
`;

export const Input = styled.TextInput`
  height: 55px;
  width: 100%;
  background-color: #fff;
  border-width: 1px;
  border-bottom-width: 0;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.5);
  color: #999999;
  font-size: 15px;
  text-align: left;
  padding: 20px;
  letter-spacing: 0;
  border-radius: 10px;
  margin-top: 10px;
`;

export const InputRua = styled.TextInput`
  height: 55px;
  width: 77%;
  background-color: #fff;
  border-width: 1px;
  border-bottom-width: 0;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.5);
  color: #999999;
  text-align: left;
  font-size: 15px;
  padding: 20px;
  letter-spacing: 0;
  border-radius: 10px;
  margin-top: 10px;
`;

export const InputNumero = styled.TextInput`
  height: 55px;
  width: 20%;
  background-color: #fff;
  border-width: 1px;
  border-bottom-width: 0;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.5);
  color: #999999;
  text-align: left;
  padding: 20px;
  letter-spacing: 0;
  border-radius: 10px;
  font-size: 15px;
  margin-top: 10px;
  margin-left: 8px;
`;

export const ButtonFinalizar = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 40%;
  background-color: #eb4d4b;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 20px;
  flex-direction: row;
`;

export const ButtonFinalizarText = styled.Text`
  padding: 10px;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
`;

export const TextoModal = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #fff;
`;
