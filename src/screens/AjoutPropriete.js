import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
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
  SunIcon,
} from 'native-base';

function AjoutPropriete({navigation}) {
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
                1/7
              </Text>{' '}
              Adresse du bien
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '14%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Formulaire appartement
          </Text>
          <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
            Type de bien*
          </Text>
          <Row space={8} alignItems="center" justifyContent="flex-start">
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Appartement
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Maison
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Res. étudiante
              </Text>
            </Column>
          </Row>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Adresse du bien*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Ville*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Nature de la location*
            </FormControl.Label>
            <Select
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={10} />,
              }}
              mt={1}
              style={styles.input}>
              <Select.Item label="Male" value="m" />
              <Select.Item label="Female" value="f" />
            </Select>
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
            onPress={() => navigation.navigate('AjoutPropriete2')}>
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  cards: {
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 1.0,
    borderRadius: 10,
    elevation: 5,
  },
  searchBar: {
    borderColor: '#000',
  },
  input: {
    borderColor: '#000',
  },
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  suivantButton: {
    width: 200,
    backgroundColor: '#0B3D91',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  ajouterButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  textTown: {
    fontWeight: 'bold',
    color: '#3F3D56',
  },
  textAdress: {
    color: '#3F3D56',
  },
  textPrice: {
    color: '#3F3D56',
    fontWeight: 'bold',
    marginTop: 10,
  },
  IconsText: {
    color: '#3F3D56',
    textAlign: 'center',
  },
});

export default AjoutPropriete;
