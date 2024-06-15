import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#000",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 30,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#fffff1",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "95%",
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    height: 40,
    margin: 12,
    paddingLeft: 5,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#005000",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitResult: {
    width: "100%",
    height: "50%",
  },
});
