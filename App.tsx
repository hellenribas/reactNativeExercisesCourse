/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SliderContainer from './src/components/slider';
import Bank from './src/components/Bank';
// import PickerContainer from './src/components/picker';

// import BiscoitoDaSorte from './src/components/biscoitoDaSorte';
// import Cronometro from './src/components/cronometro';

function App(): JSX.Element {
  return (
    // <View style={S.container}></View>
    // <SliderContainer />
    // <PickerContainer />
    // <BiscoitoDaSorte />
    // <Cronometro />
    <Bank />
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // img: {
  //   width: 250,
  //   height: 250,
  // },
  // frase: {
  //   fontSize: 20,
  //   color: '#dd7b22',
  //   margin: 30,
  //   fontStyle: 'italic',
  //   textAlign: 'center',
  // },
  // btnContainer: {
  //   width: 230,
  //   height: 50,
  //   borderWidth: 2,
  //   borderColor: '#dd7b22',
  //   borderRadius: 25,
  // },
  // btnContent: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // btnText: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#dd7b22',
  // },
});

export default App;
