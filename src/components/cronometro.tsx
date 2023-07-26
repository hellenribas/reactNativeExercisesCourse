import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';

export default function Cronometro() {
  const [timer, setTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState<null | NodeJS.Timeout>(
    null,
  );

  function start() {
    if (timerInterval != null) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    } else {
      const id = setInterval(() => {
        setTimer(prevState => prevState + 0.1);
      }, 100);
      setTimerInterval(id);
    }
  }

  function clear() {
    setTimer(0);
  }

  return (
    <View style={S.container}>
      <Text style={S.timer}>{timer.toFixed(1)}</Text>
      <View style={S.btnContainer}>
        <TouchableOpacity style={S.btn} onPress={start}>
          <Text style={S.btnText}>VAI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={S.btn} onPress={clear}>
          <Text style={S.btnText}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 65,
    color: '#FFF',
    fontWeight: 'bold',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 17,
    height: 40,
    borderRadius: 9,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 60,
    height: 40,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
});
