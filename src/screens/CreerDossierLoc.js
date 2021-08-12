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
  Icon,
  Pressable,
  ArrowBackIcon,
  Input,
  View,
  ScrollView,
  FormControl,
  Divider,
} from 'native-base';
import CalendrierIcon from '../assets/svg/CalendrierIcon';
import AddpicIcon from '../assets/svg/AddpicIcon';
import style from '../styles/CreerDossierLoc';

function CreerDossierLoc({navigation}) {
  const styles = style();
  const [typeContrat, setTypeContrat] = useState();
  const [profession, setProfession] = useState();
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
            Mon dossier locataire
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
                1/2
              </Text>{' '}
              Identité et coordonnées
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '50%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Identité et coordonnées
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Photo de profil*
            </FormControl.Label>
            <Input
              type="file"
              size="md"
              style={styles.input}
              pl={3}
              placeholder="Cliquez ici pour ajouter une photo"
              InputLeftElement={<AddpicIcon />}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Adresse*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Description*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
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
              Profession*
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
                selectedValue={profession}
                onValueChange={(itemValue, itemIndex) =>
                  setProfession(itemValue)
                }>
                <Picker.Item label="Étudiant" value="etudiant" />
                <Picker.Item label="Salarié" value="salarie" />
                <Picker.Item label="Artisan" value="artisan" />
                <Picker.Item label="Indépendant" value="independant" />
                <Picker.Item label="Fonctionnaire" value="fonctionnaire" />
                <Picker.Item
                  label="Profession libérale"
                  value="profession liberale"
                />
                <Picker.Item
                  label="Chef d'entreprise"
                  value="chef entreprise"
                />
                <Picker.Item
                  label="Retraité ou sans activité"
                  value="retraite"
                />
              </Picker>
            </View>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Type de contrat*
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
                selectedValue={typeContrat}
                onValueChange={(itemValue, itemIndex) =>
                  setTypeContrat(itemValue)
                }>
                <Picker.Item label="Meublé" value="meuble" />
                <Picker.Item label="Non meublé" value="non meuble" />
              </Picker>
            </View>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Revenu mensuel net*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
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
            onPress={() => navigation.navigate('CreerDossierLoc2')}>
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default CreerDossierLoc;
