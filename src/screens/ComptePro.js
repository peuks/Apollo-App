import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
//This import for date format
import moment from 'moment';
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import {
  Text,
  Box,
  Column,
  Row,
  Icon,
  Button,
  Pressable,
  ArrowBackIcon,
  Input,
  Switch,
  View,
  ScrollView,
  FormControl,
} from 'native-base';
import AddpicIcon from '../assets/svg/AddpicIcon';
import CalendrierIcon from '../assets/svg/CalendrierIcon';
import style from '../styles/ComptePro';

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
  if (!values.adresse) {
    errors.adresse = 'Ce champ est requis';
  }
  if (!values.codePostal) {
    errors.codePostal = 'Ce champ est requis';
  }
  if (!values.ville) {
    errors.ville = 'Ce champ est requis';
  }
  if (!values.pays) {
    errors.pays = 'Ce champ est requis';
  }
  if (!values.dateNaissance) {
    errors.dateNaissance = 'Ce champ est requis';
  }
  if (!values.villeNaissance) {
    errors.villeNaissance = 'Ce champ est requis';
  }
  if (!values.paysNaissance) {
    errors.paysNaissance = 'Ce champ est requis';
  }
  if (!values.rib) {
    errors.rib = 'Ce champ est requis';
  }
  if (!values.description) {
    errors.description = 'Ce champ est requis';
  }
  return errors;
};

function ComptePro({navigation}) {
  const styles = style();
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
    <Box flex={1} bg="#FAFAFA">
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
            Mon compte
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Formik
          initialValues={{
            nom: '',
            prenom: '',
            email: '',
            tel: '',
            adresse: '',
            codePostal: '',
            ville: '',
            pays: '',
            dateNaissance: '',
            paysNaissance: '',
            rib: '',
            genre: 'masculin',
            description: '',
          }}
          onSubmit={onSubmit}
          validate={validate}>
          {({values, handleChange, handleBlur, handleSubmit, errors}) => (
            <Column mt={0} mx={4} space={5}>
              <Text style={styles.textTown} fontSize={20} my={2}>
                Identité et coordonnées
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

              <FormControl isRequired isInvalid={'adresse' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Adresse
                </FormControl.Label>
                <Input
                  type="text"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('adresse')}
                  value={values.adresse}
                />
                <FormControl.ErrorMessage>
                  {errors.adresse}
                </FormControl.ErrorMessage>
              </FormControl>

              <Row alignItems="center" justifyContent="space-between">
                <FormControl
                  width="40"
                  isRequired
                  isInvalid={'codePostal' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Code Postal
                  </FormControl.Label>
                  <Input
                    type="number"
                    size="md"
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange('codePostal')}
                    value={values.codePostal}
                  />
                  <FormControl.ErrorMessage>
                    {errors.codePostal}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl
                  width="40"
                  isRequired
                  isInvalid={'ville' in errors}>
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
              </Row>
              <FormControl isRequired isInvalid={'pays' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Pays
                </FormControl.Label>
                <Input
                  type="text"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('pays')}
                  value={values.pays}
                />
                <FormControl.ErrorMessage>
                  {errors.pays}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Date de naissance*
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
              <FormControl isRequired isInvalid={'pays' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Ville de naissance
                </FormControl.Label>
                <Input
                  type="text"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('pays')}
                  value={values.pays}
                />
                <FormControl.ErrorMessage>
                  {errors.villeNaissance}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'paysNaissance' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Pays de naissance
                </FormControl.Label>
                <Input
                  type="text"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('paysNaissance')}
                  value={values.paysNaissance}
                />
                <FormControl.ErrorMessage>
                  {errors.paysNaissance}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'rib' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  RIB
                </FormControl.Label>
                <Input
                  type="text"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('rib')}
                  value={values.rib}
                />
                <FormControl.ErrorMessage>
                  {errors.rib}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={'genre' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Genre
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
                    selectedValue={values.genre}
                    onValueChange={handleChange('genre')}>
                    <Picker.Item label="Masculin" value="masculin" />
                    <Picker.Item label="Féminin" value="feminin" />
                  </Picker>
                </View>
              </FormControl>
              <Text style={styles.textTown} fontSize={20} my={5}>
                Profil public
              </Text>
              <FormControl>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Photo de profil*
                </FormControl.Label>
                <Input
                  type="file"
                  size="md"
                  style={styles.input}
                  placeholder="Cliquez ici pour ajouter une photo"
                  InputLeftElement={<AddpicIcon />}
                />
              </FormControl>
              <FormControl isRequired isInvalid={'description' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Description
                </FormControl.Label>
                <Input
                  type="text"
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('description')}
                  value={values.description}
                />
                <FormControl.ErrorMessage>
                  {errors.description}
                </FormControl.ErrorMessage>
              </FormControl>
              <Column space={5}>
                <Text bold>Afficher le nombre de logements*</Text>
                <Row space={1}>
                  <Text>Oui</Text>
                  <Switch
                    size="lg"
                    colorScheme="emerald"
                    mt={-0.5}
                    offTrackColor="#cddefa"
                    onTrackColor="#cddefa"
                    onThumbColor="#0B3D91"
                    offThumbColor="#0B3D91"
                  />
                  <Text ml={-1}>Non</Text>
                </Row>
              </Column>
              <Column
                space={3}
                pt={6}
                alignItems="center"
                justifyContent="center"
                mb={10}>
                <Button
                  size="lg"
                  style={styles.modifierButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}>
                  Modifier mon mot de passe
                </Button>
                <Button
                  size="lg"
                  style={styles.supprimerButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}
                  onPress={handleSubmit}>
                  Supprimer mon compte
                </Button>
              </Column>
            </Column>
          )}
        </Formik>
      </ScrollView>
    </Box>
  );
}

export default ComptePro;
