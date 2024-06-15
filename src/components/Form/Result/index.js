import { styles } from "./style";
import { View, Text } from "react-native";

export const Result = (props) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>{props.message}</Text>
      <Text style={styles.resultText}>R$ {props.finalValue}</Text>
    </View>
  );
};
