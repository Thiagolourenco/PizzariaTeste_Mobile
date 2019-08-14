import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 20
  },
  input: {
    height: 55,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    paddingLeft: 20
  },
  buttonEntrar: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginHorizontal: 20,
    height: 55,
    backgroundColor: "#eb4d4b",
    marginTop: 30,
    borderRadius: 8
  },
  buttonEntrarText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },
  textCriar: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20
  }
});

export default styles;
