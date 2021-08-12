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
  InfoIcon,
  Pressable,
} from 'native-base';
import CalendrierIcon from '../assets/svg/CalendrierIcon';
import style from '../styles/CreationContrat_3';

function CreationContrat_3({navigation}) {
  const styles = style();
  const [typeBail, setTypeBail] = useState();
  const [destination, setDestination] = useState();
  const [regime, setRegime] = useState();
  const [modaliteChauffage, setModaliteChauffage] = useState();
  const [modaliteEau, setModaliteEau] = useState();
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
                3/4
              </Text>{' '}
              Modalités du contrat
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider w={80} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Modalités du contrat
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Type de bail*{" "} <InfoIcon size="xs" mt={1} />
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
                selectedValue={typeBail}
                onValueChange={(itemValue, itemIndex) => setTypeBail(itemValue)}>
                <Picker.Item label="Meublé" value="meuble" />
                <Picker.Item label="Vide" value="vide" />
              </Picker>
            </View>
          </FormControl>
          {/*
            Si meublé : durée bail = 9 mois pour un étudiant sinon 1 an
            Si vide : durée bail = 3 ans   
          */}
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Durée du bail*
            </FormControl.Label>
            <Input size="md" style={styles.input} value="9 mois"/>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Date de début du contrat*
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
                <Text mt={1}>{""+ moment(date).format('DD-MM-YYYY')}</Text>
              </Row>
            </Pressable>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Destination des locaux*
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
                selectedValue={destination}
                onValueChange={(itemValue, itemIndex) => setDestination(itemValue)}>
                <Picker.Item label="Mixe" value="mixe" />
                <Picker.Item label="Habitation" value="habitation" />
              </Picker>
            </View>
          </FormControl>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Informations du bien
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Régime juridique de l’immeuble*
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
                selectedValue={regime}
                onValueChange={(itemValue, itemIndex) => setRegime(itemValue)}>
                <Picker.Item label="Mono-propriété" value="monopropriete" />
                <Picker.Item label="Copropriété" value="copropriete" />
              </Picker>
            </View>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Numéro de lot*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>

          <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
            Période de construction ?*
          </Text>
          <Row space={2} justifyContent="space-evenly">
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Avant 1949
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                1949 - 1974
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                1949 - 1989
              </Text>
            </Pressable>
          </Row>
          <Row space={4} justifyContent="flex-start" ml={2}>
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                1989 - 2005
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Après 2005
              </Text>
            </Pressable>
          </Row>

          <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
            Le bien a-t-il d’autres parties ?*
          </Text>
          <Row space={2} justifyContent="space-evenly">
            <Pressable
              alignItems="center"
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
                width:110,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Garage
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Parking
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Cave
              </Text>
            </Pressable>
          </Row>
          <Row space={4} justifyContent="flex-start" ml={2}>
            <Pressable
              alignItems="center"
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
                width:110,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Grenier
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
                width:110,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Jardin
              </Text>
            </Pressable>
          </Row>

          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Modalité de chauffage de l’appartement ?*
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
                selectedValue={modaliteChauffage}
                onValueChange={(itemValue, itemIndex) => setModaliteChauffage(itemValue)}>
                <Picker.Item label="Collectif" value="collectif" />
                <Picker.Item label="Individuel" value="individuel" />
              </Picker>
            </View>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Modalité de production d’eau chaude ?*
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
                selectedValue={modaliteEau}
                onValueChange={(itemValue, itemIndex) => setModaliteEau(itemValue)}>
                <Picker.Item label="Collectif" value="collectif" />
                <Picker.Item label="Individuel" value="individuel" />
              </Picker>
            </View>
          </FormControl>
          <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
            L'appartement est-il raccordé à :
          </Text>
          <Row space={2} justifyContent="space-evenly">
            <Pressable
              alignItems="center"
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
                width:110,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Fibre
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                TNT
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              style={{
                width:110,
                borderWidth: 1,
                borderColor: '#fff',
                elevation: 2,
                backgroundColor: '#fff',
                borderRadius: 4,
              }}>
              <Text
                style={{color: '#3F3D56'}}
                fontSize={14}
                my={2}
                px={4}
                py={2}>
                Câble
              </Text>
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
            mt={6}
            alignSelf="center"
            onPress={() => navigation.navigate('CreationContrat_4')}>
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default CreationContrat_3;