import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderBackground = styled.ImageBackground`
  flex-direction: row;
  margin-top: 20px;
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

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border-radius: 8px;
  background-color: #fff;
  border-width: 1px;
  border-bottom-width: 0;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.5);
  padding: 15px;
  margin-top: 25px;
`;

export const SaborName = styled.Text`
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  font-family: "Arial, Helvetica, sans-serif";
  font-weight: bold;
  margin-top: 15px;
`;
