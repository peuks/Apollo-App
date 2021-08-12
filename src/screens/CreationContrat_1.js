import React, {useState} from 'react';
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
  Pressable,
} from 'native-base';
import CalendrierIcon from '../assets/svg/CalendrierIcon';
import style from '../styles/CreationContrat_1';

function CreationContrat_1({navigation}) {
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
                1/4
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
        <Divider w={20} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Qui sera sur le bail ?
          </Text>
          <Text style={styles.textTown} fontSize={16} my={2}>
            Locataire
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Nom*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Prenom*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Email*
            </FormControl.Label>
            <Input type="email" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Téléphone*
            </FormControl.Label>
            <Input type="tel" size="md" style={styles.input} />
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
                <Text mt={1}>{""+ moment(date).format('DD-MM-YYYY')}</Text>
              </Row>
            </Pressable>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Lieu de naissance*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Adresse complète*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>

          <Text
            style={{color: '#0B3D91', textAlign: 'center'}}
            fontSize={14}
            my={5}
            bold>
            Ajouter un garant pour ce locataire
          </Text>

          <Row
            space={2}
            pt={4}
            alignItems="center"
            justifyContent="center"
            mb={10}
            mx={2}>
            <Button
              size="lg"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#0B3D91',
              }}
              onPress={() => setShowModal(true)}>
              + Ajouter locataire
            </Button>
            <Button
              size="lg"
              style={styles.suivantButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}
              onPress={() => navigation.navigate('CreationContrat_2')}>
              Suivant
            </Button>
          </Row>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default CreationContrat_1;