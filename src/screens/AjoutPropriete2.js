import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
//This import for date format
import moment from 'moment';
import {Formik} from 'formik';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  ArrowBackIcon,
  Input,
  View,
  ScrollView,
  FormControl,
  Divider,
  Checkbox,
  Pressable,
} from 'native-base';
import PlusIcon from '../assets/svg/PlusIcon';
import MinusIcon from '../assets/svg/MinusIcon';
import CalendrierIcon from '../assets/svg/CalendrierIcon';
import style from '../styles/AjoutPropriete2';

const validate = values => {
  const errors = {};

  if (!values.superficie) {
    errors.superficie = 'Ce champ est requis';
  }

  return errors;
};

function AjoutPropriete2({navigation}) {
  const styles = style();
  const [piece, setPiece] = useState(1);
  const [chambre, setChambre] = useState(0);
  const [salleDeBain, setSalleDeBain] = useState(0);
  const [salon, setSalon] = useState(0);
  const [etage, setEtage] = useState(1);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //Format the date
    //const fCurrentDate = moment(new Date(currentDate)).format('DD-MM-YYYY');
    setShow(Platform.OS === 'ios');
    console.log('date :' + currentDate);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const onSubmit = data => {
    console.log('submiting with ', data);
  };

  return (
    <Box flex={1} bg="#FFF">
      <Row
        px={1}
        py={3}
        justifyContent="space-between"
        alignItems="center"
        ml={2}
        mr={2}>
        <Row space={2} alignItems="center">
          <ArrowBackIcon
            size="md"
            color="#3F3D56"
            onPress={() => navigation.goBack()}
          />
        </Row>
        <Row space={2}>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            Ajouter une propriété
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <Column bg="#0B3D91">
        <Row px={1} py={3} justifyContent="space-between" alignItems="center">
          <Row space={2} alignItems="center">
            <View />
          </Row>
          <Row space={2}>
            <Text color="#FFF" fontSize={14}>
              <Text color="#FFF" fontSize={14} bold>
                2/7
              </Text>{' '}
              Informations générales
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '28%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Formik
          initialValues={{
            piece: '',
            chambre: '0',
            salleDeBain:'',
            salon: '0',
            etage: '',
            superficie: '',
            dateDisponibilite: '',
          }}
          onSubmit={onSubmit}
          validate={validate}>
          {({values, handleChange, handleBlur, handleSubmit, errors}) => (
            <Column mt={2} mx={4} space={5}>
              <Text style={styles.textTown} fontSize={20} my={2}>
                Formulaire appartement
              </Text>

              <FormControl isRequired>
                <Row
                  space={8}
                  alignItems="center"
                  justifyContent="space-between">
                  <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                    Pièces*
                  </Text>
                  <View
                    w={40}
                    style={{
                      borderWidth: 1,
                      borderColor: '#000',
                      borderRadius: 6,
                      height: 55,
                    }}>
                    <Picker
                      selectedValue={piece}
                      onValueChange={(itemValue, itemIndex) =>
                        setPiece(itemValue)
                      }>
                      <Picker.Item label="Studio" value="studio" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                      <Picker.Item label="8" value="8" />
                      <Picker.Item label="9" value="9" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                    </Picker>
                  </View>
                </Row>
              </FormControl>
              <Text style={{color: '#000'}} fontSize={12} mt={-3}>
                Cuisine, SDB et toilette ne sont pas à prendre en compte.
              </Text>
              <FormControl isRequired>
                <Row
                  space={8}
                  alignItems="center"
                  justifyContent="space-between">
                  <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                    Chambres*
                  </Text>
                  <Row space={5}>
                    <Pressable
                      onPress={() => {
                        chambre > 0 && setChambre(chambre - 1);
                      }}>
                      <MinusIcon />
                    </Pressable>
                    <Text style={{color: '#000'}} fontSize={18}>
                      {chambre}
                    </Text>
                    <Pressable
                      onPress={() => {
                        setChambre(chambre + 1);
                      }}>
                      <PlusIcon />
                    </Pressable>
                  </Row>
                </Row>
              </FormControl>
              <FormControl isRequired>
                <Row
                  space={8}
                  alignItems="center"
                  justifyContent="space-between">
                  <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                    Salle de bain*
                  </Text>
                  <Row space={5}>
                    <Pressable
                      onPress={() => {
                        salleDeBain > 0 && setSalleDeBain(salleDeBain - 1);
                      }}>
                      <MinusIcon />
                    </Pressable>
                    <Text style={{color: '#000'}} fontSize={18}>
                      {salleDeBain}
                    </Text>
                    <Pressable
                      onPress={() => {
                        setSalleDeBain(salleDeBain + 1);
                      }}>
                      <PlusIcon />
                    </Pressable>
                  </Row>
                </Row>
              </FormControl>
              <FormControl>
                <Row
                  space={8}
                  alignItems="center"
                  justifyContent="space-between">
                  <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                    Salons/Pièces à vivre*
                  </Text>
                  <Row space={5}>
                    <Pressable
                      onPress={() => {
                        salon > 0 && setSalon(salon - 1);
                      }}>
                      <MinusIcon />
                    </Pressable>
                    <Text style={{color: '#000'}} fontSize={18}>
                      {salon}
                    </Text>
                    <Pressable
                      onPress={() => {
                        setSalon(salon + 1);
                      }}>
                      <PlusIcon />
                    </Pressable>
                  </Row>
                </Row>
              </FormControl>
              <FormControl>
                <Row
                  space={8}
                  alignItems="center"
                  justifyContent="space-between">
                  <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                    Étage du bien*
                  </Text>
                  <View
                    w={40}
                    style={{
                      borderWidth: 1,
                      borderColor: '#000',
                      borderRadius: 6,
                      height: 55,
                    }}>
                    <Picker
                      selectedValue={etage}
                      onValueChange={(itemValue, itemIndex) =>
                        setEtage(itemValue)
                      }>
                      <Picker.Item label="RDC" value="rdc" />
                      <Picker.Item label="1" value="1" />
                      <Picker.Item label="2" value="2" />
                      <Picker.Item label="3" value="3" />
                      <Picker.Item label="4" value="4" />
                      <Picker.Item label="5" value="5" />
                      <Picker.Item label="6" value="6" />
                      <Picker.Item label="7" value="7" />
                      <Picker.Item label="8" value="8" />
                      <Picker.Item label="9" value="9" />
                      <Picker.Item label="10" value="10" />
                      <Picker.Item label="11" value="11" />
                    </Picker>
                  </View>
                </Row>
              </FormControl>

              <FormControl isRequired isInvalid={'superficie' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Superficie
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('superficie')}
                  value={values.superficie}
                />
                <FormControl.ErrorMessage>
                  {errors.superficie}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Date de disponibilité*
                </FormControl.Label>
                <Pressable
                  onPress={showDatepicker}
                  mt={2}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 6,
                    height: 55,
                  }}
                  justifyContent="center">
                  <Row space={5} px={2}>
                    <CalendrierIcon />
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="mode"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}
                    <Text mt={1}>{'' + moment(date).format('DD-MM-YYYY')}</Text>
                  </Row>
                </Pressable>
              </FormControl>
              <Row space={1}>
                <Checkbox
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                />
                <Text style={{color: '#3F3D56'}} fontSize={16}>
                  Je ne sais pas
                </Text>
              </Row>

              <Button
                size="lg"
                style={styles.suivantButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                mb={10}
                mt={6}
                alignSelf="center"
                //onPress={() => navigation.navigate('AjoutPropriete3')}
                onPress={onSubmit}>
                Suivant
              </Button>
            </Column>
          )}
        </Formik>
      </ScrollView>
    </Box>
  );
}

export default AjoutPropriete2;
