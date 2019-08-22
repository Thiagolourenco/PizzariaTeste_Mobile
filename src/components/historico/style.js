import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderBackground = styled.ImageBackground`
  flex-direction: row;
  margin-top: 25px;
  margin-left: 20px;
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

export const DiaPedido = styled.Text`
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
`;

export const Texto = styled.Text`
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
  font-weight: bold;
`;
