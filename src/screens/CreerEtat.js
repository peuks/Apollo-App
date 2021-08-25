import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
//This import for date format
import moment from 'moment';
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
  Select,
  Pressable,
  CheckIcon,
  SunIcon,
} from 'native-base';
import {Formik} from 'formik';
import AppartementIcon from '../assets/svg/AppartementIcon';
import MaisonIcon from '../assets/svg/MaisonIcon';
import ResidenceEtudiantIcon from '../assets/svg/ResidenceEtudiantIcon';
import PlusIcon from '../assets/svg/PlusIcon';
import MinusIcon from '../assets/svg/MinusIcon';
import CalendrierIcon from '../assets/svg/CalendrierIcon';
import style from '../styles/CreerEtat';

const validate = values => {
  const errors = {};
  if (!values.nom) {
    errors.nom = 'Ce champ est requis';
  }
  if (!values.nomAncienOccupant) {
    errors.nomAncienOccupant = 'Ce champ est requis';
  }
  if (!values.prenom) {
    errors.prenom = 'Ce champ est requis';
  }
  if (!values.email) {
    errors.email = 'Ce champ est requis';
  }
  if (!values.superficie) {
    errors.superficie = 'Ce champ est requis';
  }
  if (!values.dateD) {
    errors.dateD = 'Ce champ est requis';
  }

  return errors;
};

 
function CreerEtat({navigation}) {
  const styles = style();
  const [bien, setBien] = useState(null);

  const [chambre, setChambre] = useState(0);
  const [salleDeBain, setSalleDeBain] = useState(0);
  const [salon, setSalon] = useState(0);

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
    console.log('submiting with :', data);
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
            Création état des lieux
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
              Parties concernées
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
      </Column>

      <ScrollView>
        <Formik
          initialValues={{
            typeBien:bien,
            adresseBien:'',
            nom: '',
            nomAncienOccupant: '',
            prenom: '',
            email: '',
            piece: 'studio',
            chambre: chambre,
            salleDeBain: salleDeBain,
            salon: salon,
            dateEtatLieux: date,
          }}
          onSubmit={onSubmit}
          validate={validate}>
          {({values, handleChange, handleBlur, handleSubmit, errors}) => (
            <Column mt={4} mx={4} space={5}>
              <Text style={{color: '#3F3D56'}} fontSize={16} mt={2}>
                Type de bien*
              </Text>
              <Row space={8} alignItems="center" justifyContent="flex-start">
                <Pressable
                  onPress={() =>
                    setBien(prev =>
                      prev === 'appartement' ? null : 'appartement',
                    )
                  }>
                  <Column alignItems="center">
                    <AppartementIcon
                      width={70}
                      height={70}
                      color={bien === 'appartement' ? '#0B3D91' : '#3F3D56'}
                    />
                    <Text
                      fontSize="sm"
                      style={[
                        styles.IconsText,
                        bien === 'appartement'
                          ? styles.activeText
                          : styles.inactiveText,
                      ]}
                      noOfLines={2}>
                      Appartement
                    </Text>
                  </Column>
                </Pressable>

                <Pressable
                  onPress={() =>
                    setBien(prev => (prev === 'maison' ? null : 'maison'))
                  }>
                  <Column alignItems="center">
                    <MaisonIcon
                      width={70}
                      height={70}
                      color={bien === 'maison' ? '#0B3D91' : '#3F3D56'}
                    />
                    <Text
                      fontSize="sm"
                      style={[
                        styles.IconsText,
                        bien === 'maison'
                          ? styles.activeText
                          : styles.inactiveText,
                      ]}
                      noOfLines={2}>
                      Maison
                    </Text>
                  </Column>
                </Pressable>
                <Pressable
                  onPress={() =>
                    setBien(prev => (prev === 'residence' ? null : 'residence'))
                  }>
                  <Column alignItems="center">
                    <ResidenceEtudiantIcon
                      width={70}
                      height={70}
                      color={bien === 'residence' ? '#0B3D91' : '#3F3D56'}
                    />
                    <Text
                      fontSize="sm"
                      style={[
                        styles.IconsText,
                        bien === 'residence'
                          ? styles.activeText
                          : styles.inactiveText,
                      ]}
                      noOfLines={2}>
                      Res. étudiante
                    </Text>
                  </Column>
                </Pressable>
              </Row>
              <Text style={{color: '#3F3D56'}} fontSize={16} mt={2}>
                Adresse du bien :
              </Text>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={16}
                mt={-2}
                mb={2}
                bold>
                4 place de la République, 67100 Strasbourg
              </Text>

              <Text style={styles.textTown} fontSize={20} my={2}>
                Locataire
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
              <FormControl>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Date de la réalisation de l’état des lieux*
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
              <FormControl isRequired isInvalid={'nomAncienOccupant' in errors}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Nom de l’ancien occupant
                </FormControl.Label>
                <Input
                  size="md"
                  style={styles.input}
                  onChangeText={handleChange('nomAncienOccupant')}
                  value={values.nomAncienOccupant}
                />
                <FormControl.ErrorMessage>
                  {errors.nomAncienOccupant}
                </FormControl.ErrorMessage>
              </FormControl>

              <Text style={styles.textTown} fontSize={20} my={2}>
                Composition du logement
              </Text>
              <FormControl isRequired isInvalid={'piece' in errors}>
                <Row
                  space={8}
                  alignItems="center"
                  justifyContent="space-between">
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Pièces
                  </FormControl.Label>
                  <View
                    w={40}
                    style={{
                      borderWidth: 1,
                      borderColor: '#000',
                      borderRadius: 6,
                      height: 55,
                    }}>
                    <Picker
                      selectedValue={values.piece}
                      onValueChange={handleChange('piece')}>
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
                onPress={() => navigation.navigate('CreerEtat2')}
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

export default CreerEtat;
