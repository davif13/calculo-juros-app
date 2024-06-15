import { View, Text } from "react-native";
import { styles } from "./style";

export const Title = () => {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>Cálculo de Juros Simples & Compostos</Text>
    </View>
  );
};
