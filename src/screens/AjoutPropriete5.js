import React, {useState} from 'react';
import {Picker} from 'react-native';
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
  InfoIcon,
  CheckIcon,
  Switch,
  ArrowUpIcon,
  Checkbox,
  SunIcon,
  Radio,
} from 'native-base';
import style from '../styles/AjoutPropriete5';

function AjoutPropriete5({navigation}) {
  const styles = style();
  const [typeChauffage, setTypeChauffage] = useState();

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
                5/7
              </Text>{' '}
              Informations environnementales
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '70%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Informations environnementales
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Type de chauffage principal*
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
                selectedValue={typeChauffage}
                onValueChange={(itemValue, itemIndex) =>
                  setTypeChauffage(itemValue)
                }>
                <Picker.Item label="Collectif" value="collectif" />
                <Picker.Item label="Individuel" value="individuel" />
              </Picker>
            </View>
          </FormControl>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#3F3D56',
              textAlign: 'center',
            }}
            fontSize={20}
            my={2}>
            DPE
          </Text>

          <Row justifyContent="space-between">
            <Column alignItems="center" justifyContent="center">
              
              <Text fontSize="md">A</Text>
              <Text fontSize="xs">{'<'}50</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">B</Text>
              <Text fontSize="xs">51 à 90</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">C</Text>
              <Text fontSize="xs">91 à 150</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">D</Text>
              <Text fontSize="xs">151 à 230</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">E</Text>
              <Text fontSize="xs">231 à 330</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">F</Text>
              <Text fontSize="xs">331 à 450</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">G</Text>
              <Text fontSize="xs">{'>'}450</Text>
            </Column>
          </Row>
          <Row space={1}>
            <Checkbox
              value="test"
              accessibilityLabel="This is a dummy checkbox"
            />
            <Text style={{color: '#3F3D56'}} fontSize={16}>
              Je ne sais pas
            </Text>
          </Row>

          <Text
            style={{
              fontWeight: 'bold',
              color: '#3F3D56',
              textAlign: 'center',
            }}
            fontSize={20}
            my={2}>
            GES
          </Text>
          <Row justifyContent="space-between">
            <Column alignItems="center" justifyContent="center">
              
              <Text fontSize="md">A</Text>
              <Text fontSize="xs">{'<'}5</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">B</Text>
              <Text fontSize="xs">6 à 10</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">C</Text>
              <Text fontSize="xs">11 à 20</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">D</Text>
              <Text fontSize="xs">21 à 35</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">E</Text>
              <Text fontSize="xs">36 à 55</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">F</Text>
              <Text fontSize="xs">56 à 80</Text>
            </Column>
            <Column alignItems="center" justifyContent="center">
              <Text fontSize="md">G</Text>
              <Text fontSize="xs">{'>'}80</Text>
            </Column>
          </Row>

          <Row space={1}>
            <Checkbox
              value="test"
              accessibilityLabel="This is a dummy checkbox"
            />
            <Text style={{color: '#3F3D56'}} fontSize={16}>
              Je ne sais pas
            </Text>
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
            onPress={() => navigation.navigate('AjoutPropriete61')}>
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}


export default AjoutPropriete5;