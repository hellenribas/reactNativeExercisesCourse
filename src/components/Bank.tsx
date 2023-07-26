import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {Controller, FieldValues, useForm} from 'react-hook-form';

export default function Bank() {
  const [limitNow, setLimitNow] = useState(0);
  const [review, setReview] = useState(false);
  const genders = [
    {
      key: 0,
      gender: 'Feminino',
    },
    {
      key: 1,
      gender: 'Masculino',
    },
    {
      key: 2,
      gender: 'Outros',
    },
  ];

  const {control, handleSubmit, watch} = useForm({
    defaultValues: {
      name: '',
      age: '',
      gender: 0,
      limit: 0,
      isStudent: false,
    },
  });

  function openCount(data: FieldValues) {
    const {name, age, gender, limit} = data;
    if (name && age) {
      setReview(true);
    } else {
      Alert.alert('Preencha todos os campos');
    }
  }

  const values = watch();

  return (
    <View style={S.container}>
      <Text style={S.title}>React Bank</Text>
      {review ? (
        <View style={S.reviewContainer}>
          <Text style={S.textForm}>Nome: {values.name}</Text>
          <Text style={S.textForm}>Idade: {values.age}</Text>
          <Text style={S.textForm}>
            Gênero:{' '}
            {values.gender === 0
              ? 'Feminino'
              : values.gender === 1
              ? 'Masculino'
              : 'Outros'}
          </Text>
          <Text style={S.textForm}>Limite: {values.limit}</Text>
          <Text style={S.textForm}>
            É Estudante: {values.isStudent ? 'Sim' : 'Não'}
          </Text>
        </View>
      ) : (
        <View style={S.form}>
          <View style={S.formContent}>
            <Text style={S.textForm}>Nome:</Text>
            <Controller
              control={control}
              name="name"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Digite seu nome"
                  style={S.nameInput}
                />
              )}
            />
          </View>
          <View style={S.formContent}>
            <Text style={S.textForm}>Idade:</Text>
            <Controller
              control={control}
              name="age"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Digite sua idade"
                  style={S.nameInput}
                />
              )}
            />
          </View>
          <View style={S.formContent}>
            <Text style={S.textForm}>Sexo:</Text>
            <Controller
              control={control}
              name="gender"
              render={({field: {onChange, onBlur, value}}) => (
                <Picker
                  onBlur={onBlur}
                  selectedValue={value}
                  onValueChange={valueSelect => {
                    onChange(valueSelect);
                  }}>
                  {genders.map((g, i) => (
                    <Picker.Item key={i} value={i} label={g.gender} />
                  ))}
                </Picker>
              )}
            />
          </View>
          <View style={S.formContent}>
            <Text style={S.textForm}>Seu Limite: {limitNow.toFixed(0)}</Text>
            <Controller
              control={control}
              name="limit"
              render={({field: {onChange, value}}) => (
                <Slider
                  minimumValue={0}
                  maximumValue={10000}
                  onValueChange={valueSelect => {
                    onChange(valueSelect);
                    setLimitNow(valueSelect);
                  }}
                  value={value}
                  minimumTrackTintColor="#00ff00"
                  maximumTrackTintColor="#0044ff"
                />
              )}
            />
          </View>
          <View style={S.isStudent}>
            <Text style={S.isStudentText}>É Estudante ? </Text>
            <Controller
              control={control}
              name="isStudent"
              render={({field: {onChange, value}}) => (
                <Switch
                  thumbColor="#1748d1"
                  value={value}
                  onValueChange={onChange}
                />
              )}
            />
          </View>
          <TouchableOpacity
            style={S.btnContainer}
            onPress={handleSubmit(openCount)}>
            <View style={S.btnContent}>
              <Text style={S.btnText}>Abrir Conta</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },

  form: {
    marginTop: 20,
    justifyContent: 'center',
  },
  formContent: {
    marginVertical: 20,
  },
  title: {
    fontSize: 32,
    color: 'blue',
    textAlign: 'center',
  },
  textForm: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  isStudent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  isStudentText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  btnContainer: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#002aff',
    borderRadius: 25,
    marginTop: 20,
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
    color: '#002aff',
  },
  reviewContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});
