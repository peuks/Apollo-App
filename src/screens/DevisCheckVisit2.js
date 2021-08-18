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
  Pressable,
} from 'native-base';
import CaveIcon from '../assets/svg/CaveIcon';
import JardinIcon from '../assets/svg/JardinIcon';
import BoxIcon from '../assets/svg/BoxIcon';
import {Formik} from 'formik';
import style from '../styles/DevisCheckVisit2';

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
  if (!values.adresseBien) {
    errors.adresseBien = 'Ce champ est requis';
  }
  if (!values.etage) {
    errors.etage = 'Ce champ est requis';
  }
  if (!values.numeroLot) {
    errors.numeroLot = 'Ce champ est requis';
  }
  if (!values.digiCode) {
    errors.digiCode = 'Ce champ est requis';
  }
  if (!values.commentaire) {
    errors.commentaire = 'Ce champ est requis';
  }
  if (!values.typeConstruction) {
    errors.typeConstruction = 'Ce champ est requis';
  }
  if (!values.meuble) {
    errors.meuble = 'Ce champ est requis';
  }
  if (!values.typeBien) {
    errors.typeBien = 'Ce champ est requis';
  }
  if (!values.superficie) {
    errors.superficie = 'Ce champ est requis';
  }
  return errors;
};

function DevisCheckVisit2({navigation}) {
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
            Etat des lieux
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
              Check and Visit
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider w="100%" h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Formik
          initialValues={{
            typeBien: '',
            adresseBien: '',
            ville: '',
            natureLocation: '',
          }}
          onSubmit={onSubmit}
          validate={validate}>
          {({values, handleChange, handleBlur, handleSubmit, errors}) => (
            <Column mt={4} mx={4} space={5}>
              <Text style={styles.textTown} fontSize={20} my={2}>
                Devis Check and Visit
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
              <FormControl isRequired isInvalid={'adresseBien' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Adresse du bien
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('adresseBien')}
                  value={values.adresseBien}
                />
                <FormControl.ErrorMessage>
                  {errors.adresseBien}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'etage' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Etage
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('etage')}
                  value={values.etage}
                />
                <FormControl.ErrorMessage>
                  {errors.etage}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'numeroLot'}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Numéro de lot
                </FormControl.Label>
                <Input size="md" style={styles.input} />
                <FormControl.ErrorMessage>
                  {errors.numeroLot}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'digiCode'}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  DigiCode
                </FormControl.Label>
                <Input
                  type="text"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('digiCode')}
                  value={values.digiCode}
                />
                <FormControl.ErrorMessage>
                  {errors.digiCode}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'commentaire' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Commentaire d’accès au logement
                </FormControl.Label>
                <Input
                  type="email"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('commentaire')}
                  value={values.commentaire}
                />
                <FormControl.ErrorMessage>
                  {errors.commentaire}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'typeConstruction' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Type de construction ?
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('typeConstruction')}
                  value={values.typeConstruction}
                />
                <FormControl.ErrorMessage>
                  {errors.typeConstruction}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'meuble' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Meublé ?
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('meuble')}
                  value={values.meuble}
                />
                <FormControl.ErrorMessage>
                  {errors.meuble}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'typeBien' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Type du bien
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('typeBien')}
                  value={values.typeBien}
                />
                <FormControl.ErrorMessage>
                  {errors.typeBien}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'superficie' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Superficie
                </FormControl.Label>
                <Input
                  type="number"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('superficie')}
                  value={values.superficie}
                />
                <FormControl.ErrorMessage>
                  {errors.superficie}
                </FormControl.ErrorMessage>
              </FormControl>

              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Autres parties du logement ?*
              </Text>
              <Row space={8} alignItems="center" justifyContent="center">
                <Pressable>
                  <Column alignItems="center">
                    <BoxIcon width={70} height={70} />
                    <Text fontSize="md" style={styles.IconsText} noOfLines={2}>
                      Box
                    </Text>
                  </Column>
                </Pressable>
                <Pressable>
                  <Column alignItems="center">
                    <CaveIcon width={70} height={70} />
                    <Text fontSize="md" style={styles.IconsText} noOfLines={2}>
                      Cave
                    </Text>
                  </Column>
                </Pressable>
                <Pressable>
                  <Column alignItems="center">
                    <JardinIcon width={70} height={70} />
                    <Text fontSize="md" style={styles.IconsText} noOfLines={2}>
                      Jardin
                    </Text>
                  </Column>
                </Pressable>
              </Row>

              <Button
                size="lg"
                style={styles.suivantButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                mb={10}
                mt={16}
                alignSelf="center"
                onPress={handleSubmit}>
                Valider ma demande
              </Button>
            </Column>
          )}
        </Formik>
      </ScrollView>
    </Box>
  );
}

export default DevisCheckVisit2;
