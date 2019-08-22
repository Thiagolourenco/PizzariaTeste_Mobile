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
  background-color: #fff;
  border-width: 1px;
  border-bottom-width: 0;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.5);
  padding: 15px;
  margin-top: 25px;
`;

export const ImageProduto = styled.Image`
  margin-right: 8px;
  border-radius: 3px;
  width: 79px;
  height: 79px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const Tamanho = styled.Text`
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
  margin-top: 5px;
`;

export const Preco = styled.Text`
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  font-weight: bold;
  margin-top: 5px;
`;

export const ButtonFinalizar = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 50%;
  background-color: #eb4d4b;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-top: 20px;
  border-radius: 30px;
  margin-right: 20px;
  flex-direction: row;
`;

export const ButtonFinalizarText = styled.Text`
  padding: 13px;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
`;

export const CarrinhoContainer = styled.View`
  width: 50px;
  height: 50px;
  background-color: #ccc;
  margin-top: 25px;
  margin-left: 25px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
