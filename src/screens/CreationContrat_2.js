import React, {useState} from 'react';
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
} from 'native-base';
import {Formik} from 'formik';
import style from '../styles/CreationContrat_2';

const validate = values => {
  const errors = {};

  if (!values.nom) {
    errors.nom = 'Ce champ est requis';
  }
  if (!values.prenom) {
    errors.prenom = 'Ce champ est requis';
  }
  if (!values.email) {
    errors.email = 'Ce champ est requis';
  }
  if (!values.tel) {
    errors.tel = 'Ce champ est requis';
  }
  return errors;
};

function CreationContrat_2({navigation}) {
  const styles = style();
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
            Création contrat
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
                2/4
              </Text>{' '}
              Parties concernées
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider w={40} h={1} bg="#FFDA41" />
      </Column>
      <ScrollView>
        <Formik
          initialValues={{
            nom: '',
            prenom: '',
            email: '',
            tel: '',
          }}
          onSubmit={onSubmit}
          validate={validate}>
          {({values, handleChange, handleBlur, handleSubmit, errors}) => (
            <Column mt={2} mx={4} space={5}>
              <Text style={styles.textTown} fontSize={20} my={2}>
                Qui sera sur le bail ?
              </Text>
              <Text style={styles.textTown} fontSize={16} my={2}>
                Propriétaire
              </Text>
              <FormControl isRequired isInvalid={'nom' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Nom
                </FormControl.Label>
                <Input
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('nom')}
                  value={values.nom}
                />
                <FormControl.ErrorMessage>
                  {errors.nom}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={'prenom' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Prenom
                </FormControl.Label>
                <Input
                  type="text"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('prenom')}
                  value={values.prenom}
                />
                <FormControl.ErrorMessage>
                  {errors.prenom}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={'email' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Email
                </FormControl.Label>
                <Input
                  type="email"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
                <FormControl.ErrorMessage>
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={'tel' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Téléphone
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('tel')}
                  value={values.tel}
                  keyboardType="numeric"
                />
                <FormControl.ErrorMessage>
                  {errors.tel}
                </FormControl.ErrorMessage>
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
                onPress={() => navigation.navigate('CreationContrat_3')}
                //onPress={handleSubmit}
                >
                Suivant
              </Button>
            </Column>
          )}
        </Formik>
      </ScrollView>
    </Box>
  );
}

export default CreationContrat_2;
