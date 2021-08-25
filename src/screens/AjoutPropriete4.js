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
import style from '../styles/AjoutPropriete4';

const validate = values => {
  const errors = {};

  if (!values.loyerHorsCharges) {
    errors.loyerHorsCharges = 'Ce champ est requis';
  }
  if (!values.charges) {
    errors.charges = 'Ce champ est requis';
  }
  if (!values.service) {
    errors.service = 'Ce champ est requis';
  }
  if (!values.caution) {
    errors.caution = 'Ce champ est requis';
  }

  return errors;
};

function AjoutPropriete4({navigation}) {
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
                4/7
              </Text>{' '}
              Informations financières
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '56%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Formik
          initialValues={{
            loyerHorsCharges: ' ',
            charges: '',
            service: '',
            caution: '',
          }}
          onSubmit={onSubmit}
          validate={validate}>
          {({values, handleChange, handleBlur, handleSubmit, errors}) => (
            <Column mt={2} mx={4} space={5}>
              <Text style={styles.textTown} fontSize={20} my={2}>
                Informations financières
              </Text>
              <FormControl isRequired isInvalid={'loyerHorsCharges' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Loyer hors charges
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('loyerHorsCharges')}
                  value={values.loyerHorsCharges}
                />
                <FormControl.ErrorMessage>
                  {errors.loyerHorsCharges}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'charges' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Charges
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('charges')}
                  value={values.charges}
                />
                <FormControl.ErrorMessage>
                  {errors.charges}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'service' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Services inclus dans les charges
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('service')}
                  value={values.service}
                />
                <FormControl.ErrorMessage>
                  {errors.service}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'caution' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Caution demandée
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('caution')}
                  value={values.caution}
                />
                <FormControl.ErrorMessage>
                  {errors.caution}
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
                onPress={() => navigation.navigate('AjoutPropriete5')}
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

export default AjoutPropriete4;
