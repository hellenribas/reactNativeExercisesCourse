import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SliderContainer() {
  const [value, setValue] = useState(0);
  return (
    <View style={S.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={valueSelecionado => setValue(valueSelecionado)}
        value={value}
        minimumTrackTintColor="#00ff00"
        maximumTrackTintColor="#ff0000"
      />
      <Text style={S.textValue}>Você tem {value.toFixed(1)} kg</Text>
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
  textValue: {
    textAlign: 'center',
    fontSize: 30,
  },
});
