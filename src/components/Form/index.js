import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { styles } from "./style";

export const Form = () => {
  const [initialValue, setInitialValue] = useState(null);
  const [interestValue, setInterestValue] = useState(null);
  const [time, setTime] = useState(null);
  const [finalValue, setFinalValue] = useState(null);
  const [message, setMessage] = useState("Preencha todos os campos");
  const [buttonText, setButtonText] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  const calculateFinalValue = () => {};

  const inputVerification = () => {
    if (initialValue == null && interestValue == null && time == null) {
      setErrorMessage("Preencha todos os campos");
      Vibration.vibrate();
    }
  };

  const calculusValidation = () => {
    inputVerification();
    if (initialValue != null && interestValue != null && time != null) {
      calculateFinalValue();
      setInitialValue(null);
      setInterestValue(null);
      setTime(null);
      setMessage("Seu valor futuro é igual a : ");
      setButtonText("Calcular novamente");
      setErrorMessage(null);
      return;
    }
    setFinalValue(null);
    setButtonText("Calcular");
    setMessage("Preencha o peso e altura");
  };

  return (
    <View style={styles.formContext}>
      {finalValue == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Valor Inicial R$</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInitialValue}
            value={initialValue}
            placeholder="Ex: 5000"
            keyboardType="numbers-and-punctuation"
          />
          <Text style={styles.formLabel}>Juros</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInterestValue}
            value={interestValue}
            placeholder="Ex: 2"
            keyboardType="numbers-and-punctuation"
          />
          <Text style={styles.formLabel}>Tempo</Text>
          <TextInput
            style={styles.input}
            onChangeText={setTime}
            value={time}
            placeholder="Ex: 12"
            keyboardType="numbers-and-punctuation"
          />
          <TouchableOpacity
            onPress={() => calculusValidation()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{buttonText}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitResult}>
          <TouchableOpacity
            onPress={() => calculusValidation()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
