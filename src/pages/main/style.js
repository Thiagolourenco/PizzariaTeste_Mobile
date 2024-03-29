import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderBackground = styled.ImageBackground`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 44px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0;
`;

export const HeaderRelogio = styled.Image`
  height: 20px;
  width: 20px;
`;

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  flex-direction: row;
  width: 90%;
  background-color: #fff;
  margin-left: 20px;
  border-width: 1px;
  border-bottom-width: 0;
  box-shadow: 5px 10px 5px #ccc;
  border-radius: 8px;
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

export const Description = styled.Text`
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
`;

export const ImageTemp = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;

export const Texto = styled.Text`
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
  text-align: left;
`;
