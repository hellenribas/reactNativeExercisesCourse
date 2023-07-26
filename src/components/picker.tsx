import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function PickerContainer() {
  const [pizza, setPizza] = useState(0);
  const [pizzas, setPizzas] = useState([
    {
      key: 1,
      nome: 'Calabresa',
      valor: 37.9,
    },
    {
      key: 2,
      nome: 'Brigadeiro',
      valor: 59.9,
    },
    {
      key: 3,
      nome: 'Quatro queijos',
      valor: 40,
    },
    {
      key: 4,
      nome: 'Palmito',
      valor: 62.34,
    },
  ]);
  return (
    <View style={S.container}>
      <Text style={S.logo}>Menu Pizza</Text>
      <Picker
        selectedValue={pizza}
        onValueChange={(item, index) => setPizza(item)}>
        {pizzas.map((pizza, key) => (
          <Picker.Item key={key} value={key} label={pizza.nome} />
        ))}
      </Picker>
      <Text style={S.pizzas}>Você escolheu: {pizzas[pizza].nome}</Text>
      <Text style={S.pizzas}>R$: {pizzas[pizza].valor.toFixed(2)}</Text>
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
});
