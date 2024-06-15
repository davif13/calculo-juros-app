import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  Switch,
  Image,
} from "react-native";
import { useState } from "react";
import { styles } from "./style";
import { Result } from "./Result";

export const Form = () => {
  const [initialValue, setInitialValue] = useState(null);
  const [monthlyValue, setMonthlyValue] = useState(null);
  const [interestValue, setInterestValue] = useState(null);
  const [time, setTime] = useState(null);
  const [finalValue, setFinalValue] = useState(null);
  const [message, setMessage] = useState("Preencha todos os campos");
  const [buttonText, setButtonText] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  const [isCompound, setIsCompound] = useState(false);

  const toggleSwitch = () => setIsCompound((previousState) => !previousState);

  const calculateFinalValue = () => {
    const interestValuePercent = interestValue / 100;
    if (monthlyValue == null) {
      if (isCompound == false) {
        const simpleFinalValue =
          parseFloat(initialValue) + interestValuePercent * time * initialValue;
        setFinalValue(simpleFinalValue.toFixed(2));
        return;
      } else {
        const compoundFinalValue =
          initialValue * (1 + interestValuePercent) ** time;
        setFinalValue(compoundFinalValue.toFixed(2));
        return;
      }
    } else {
      if (isCompound == false) {
        const simpleFinalValue =
          parseFloat(initialValue) * (1 + interestValuePercent * time) +
          monthlyValue *
            ((1 + interestValuePercent * time - 1) / interestValuePercent);
        setFinalValue(simpleFinalValue.toFixed(2));
        return;
      } else {
        const compoundFinalValue =
          parseFloat(initialValue) * (1 + interestValuePercent) ** time +
          (monthlyValue * ((1 + interestValuePercent) ** time - 1)) /
            interestValuePercent;
        setFinalValue(compoundFinalValue.toFixed(2));
        return;
      }
    }
  };

  const inputVerification = () => {
    if (initialValue == null && interestValue == null && time == null) {
      setErrorMessage("Preencha ao menos valor inicial, juros e tempo");
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
      setMonthlyValue(null);
      setMessage("Seu valor futuro é igual a : ");
      setButtonText("Calcular novamente");
      setErrorMessage(null);
      return;
    }
    setFinalValue(null);
    setButtonText("Calcular");
    setMessage("Preencha os campos corretamente");
  };

  return (
    <View style={styles.formContext}>
      {finalValue == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <View style={styles.typeSwitchContainer}>
            <Text style={styles.switchLabel}>Escolha o tipo de juros:</Text>
            <Text style={styles.formLabel}>
              {isCompound ? "Composto" : "Simples"}
            </Text>
            <Switch
              trackColor={{ false: "#005000", true: "#81b0ff" }}
              thumbColor={isCompound ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#005000"
              onValueChange={toggleSwitch}
              value={isCompound}
            />
          </View>
          <Text style={styles.formLabel}>Valor Inicial R$</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInitialValue}
            value={initialValue}
            placeholder="Ex: 5000"
            keyboardType="numbers-and-punctuation"
          />
          <Text style={styles.formLabel}>Aporte Mensal R$</Text>
          <TextInput
            style={styles.input}
            onChangeText={setMonthlyValue}
            value={monthlyValue}
            placeholder="Ex: 500"
            keyboardType="numbers-and-punctuation"
          />
          <Text style={styles.formLabel}>Juros ao mês</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInterestValue}
            value={interestValue}
            placeholder="Ex: 2"
            keyboardType="numbers-and-punctuation"
          />
          <Text style={styles.formLabel}>Tempo (em meses)</Text>
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
          <View style={styles.gifContainer}>
            <Image
              style={styles.gifStyle}
              source={require("../../../assets/money.gif")}
            />
          </View>
        </Pressable>
      ) : (
        <View style={styles.exhibitResult}>
          <Result message={message} finalValue={finalValue} />
          <TouchableOpacity
            onPress={() => calculusValidation()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{buttonText}</Text>
          </TouchableOpacity>
          <View style={styles.gifContainer}>
            <Image
              style={styles.gifStyle}
              source={require("../../../assets/money.gif")}
            />
          </View>
        </View>
      )}
    </View>
  );
};
