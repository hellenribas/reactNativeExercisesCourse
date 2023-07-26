import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {frases} from '../utils/frases';

export default function BiscoitoDaSorte() {
  const [frase, setFrase] = useState(frases[0]);
  const [img, setImg] = useState(require('../assets/images/biscoito.png'));

  function fraseAleatoria() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    return frases[numeroAleatorio];
  }

  function quebraBiscoito() {
    setImg(require('../assets/images/biscoitoAberto.png'));
    const frase = `"${fraseAleatoria()}"`;
    setFrase(frase);
  }

  return (
    <View style={S.container}>
      <Image style={S.img} source={img} />
      <Text style={S.frase}>{frase}</Text>
      <TouchableOpacity style={S.btnContainer} onPress={quebraBiscoito}>
        <View style={S.btnContent}>
          <Text style={S.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btnContainer: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
