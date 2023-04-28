import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
  Header: {
    height: "10%",
    backgroundColor: "rgb(255, 194, 51)",
    flexDirection: "row"
  },
  Text: {color: "black", fontWeight: "500"},
  GradientView: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    margin: 10
  },
  GradientViewText: {margin: 10, fontWeight: "bold", fontSize: 14},
  Tab: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: "#ffc73c"
  }
});
export default styles;
