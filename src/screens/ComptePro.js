import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
//This import for date format
import moment from 'moment';
import {Picker} from '@react-native-picker/picker'
import {
  Text,
  Box,
  Column,
  Row,
  Icon,
  Button,
  ArrowUpIcon,
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

function Compte({navigation}) {
  const styles = style();
  const [genre, setgenre] = useState();
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
        <Column mt={0} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Identité et coordonnées
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Nom*
            </FormControl.Label>
            <Input size="md" style={styles.input} />
          </FormControl>

          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Prenom*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Email*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Téléphone*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Adresse*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <Row alignItems="center" justifyContent="space-between">
            <FormControl width="40">
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Code Postal*
              </FormControl.Label>
              <Input type="password" size="md" style={styles.input} />
            </FormControl>
            <FormControl width="40">
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Ville*
              </FormControl.Label>
              <Input type="password" size="md" style={styles.input} />
            </FormControl>
          </Row>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Pays*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
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
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Ville de naissance*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Pays de naissance*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              RIB*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Genre*
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
                selectedValue={genre}
                onValueChange={(itemValue, itemIndex) => setgenre(itemValue)}>
                <Picker.Item label="Masculin" value="m" />
                <Picker.Item label="Féminin" value="f" />
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
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Description*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
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
              }}
              onPress={() => navigation.navigate('Propriete')}>
              Modifier mon mot de passe
            </Button>
            <Button
              size="lg"
              style={styles.supprimerButton}
              borderRadius="pill"
              _text={{
                color: '#0B3D91',
              }}
              onPress={() => setShowModal(true)}>
              Supprimer mon compte
            </Button>
          </Column>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default Compte;
