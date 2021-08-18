import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  ArrowBackIcon,
  Input,
  View,
  Pressable,
  ScrollView,
  FormControl,
  Divider,
} from 'native-base';
import AppartementIcon from '../assets/svg/AppartementIcon';
import MaisonIcon from '../assets/svg/MaisonIcon';
import ResidenceEtudiantIcon from '../assets/svg/ResidenceEtudiantIcon';
import style from '../styles/AjoutPropriete';
import {Formik} from 'formik';

const validate = values => {
  const errors = {};

  if (!values.adresseBien) {
    errors.adresseBien = 'Ce champ est requis';
  }
  if (!values.ville) {
    errors.ville = 'Ce champ est requis';
  }
  if (values.adresseBien.length > 0 && values.adresseBien.length < 3) {
    errors.adresseBien = 'La chaîne doit avoir minimum 3 caractères';
  }

  return errors;
};

function AjoutPropriete({navigation}) {
  const styles = style();
  const onSubmit = data => {
    console.log('submiting with ', data);
  };

  //const [natureLocation, setNatureLocation] = useState('vide');

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
                1/7
              </Text>{' '}
              Adresse du bien
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '14%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Formulaire appartement
          </Text>
          <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
            Type de bien*
          </Text>
          <Row space={8} alignItems="center" justifyContent="flex-start">
            <Pressable>
              <Column alignItems="center">
                <AppartementIcon width={70} height={70} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Appartement
                </Text>
              </Column>
            </Pressable>

            <Pressable>
              <Column alignItems="center">
                <MaisonIcon width={70} height={70} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Maison
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <ResidenceEtudiantIcon width={70} height={70} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Res. étudiante
                </Text>
              </Column>
            </Pressable>
          </Row>
          <Formik
            initialValues={{
              typeBien: '',
              adresseBien: '',
              ville: '',
              natureLocation: 'meuble',
            }}
            onSubmit={onSubmit}
            validate={validate}>
            {({values, handleChange, handleBlur, handleSubmit, errors}) => (
              
              <Column space={4}>
                <FormControl isRequired isInvalid={'adresseBien' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Adresse du bien
                  </FormControl.Label>
                  <Input
                    type="text"
                    size="md"
                    style={styles.input}
                    onChangeText={handleChange('adresseBien')}
                    value={values.adresseBien}
                  />
                  <FormControl.ErrorMessage>
                    {errors.adresseBien}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'ville' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Ville
                  </FormControl.Label>
                  <Input
                    type="text"
                    size="md"
                    style={styles.input}
                    onChangeText={handleChange('ville')}
                    value={values.ville}
                  />
                  <FormControl.ErrorMessage>
                    {errors.ville}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'natureLocation' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Nature de la location
                  </FormControl.Label>
                  <View
                    mt={2}
                    style={{
                      borderWidth: 1,
                      borderColor: '#000',
                      borderRadius: 6,
                      height: 55,
                    }}>
                    <Picker
                      selectedValue={values.natureLocation}
                      onValueChange={handleChange('natureLocation')}>
                      <Picker.Item label="Meublée" value="meublee" />
                      <Picker.Item label="Vide" value="vide" />
                    </Picker>
                  </View>
                </FormControl>
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
                  onPress={() => { navigation.navigate('AjoutPropriete2'); handleSubmit}}
                  //onPress={handleSubmit}
                  >
                  Suivant
                </Button>
              </Column>
            )}
          </Formik>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default AjoutPropriete;
