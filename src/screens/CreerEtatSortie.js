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
  Circle,
  SunIcon,
  Modal,
  Center,
  Checkbox,
  CircleIcon,
} from 'native-base';

function CreerEtatSortie({navigation}) {
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
              Comparaison entrée / sortie
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
        <Column mt={4} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} mt={2}>
            Budgétisation des différents travaux
          </Text>
          <Text
            style={{
              color: '#3F3D56',
            }}
            fontSize={16}
            mb={2}>
            Les différents éléments ayant subi une détérioration sont :
          </Text>
          <Column mx={2} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Pièce 1
            </Text>
            <Row justifyContent="space-between">
              <Text style={styles.textTown} fontSize={16}>
                Luminaire
              </Text>
              <Text bold fontSize={16}>
                État Très bien -> Mauvais
              </Text>
            </Row>
            <FormControl>
              <Input
                placeholder="Chiffrage"
                type="number"
                size="sm"
                style={styles.input}
              />
            </FormControl>
            <Text style={styles.textTown} fontSize={18}>
              Total*
            </Text>
            <FormControl>
              <Input
                placeholder="Chiffrage"
                type="number"
                size="sm"
                style={styles.input}
              />
            </FormControl>
            <Text
              style={{
                color: '#3F3D56',
              }}
              fontSize={16}
              mb={2}>
              *Ce total est déductible de la caution. Nous vous invitons à en
              discuter avec votre locataire.
            </Text>
          </Column>

          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mt={6}
            mb={10}
            alignSelf="center"
            onPress={() => navigation.navigate('CreerEtatSortie2')}>
            Visionner et signer le contrat
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
    backgroundColor: '#0B3D91',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  ajouterButton: {
    width: 340,
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

export default CreerEtatSortie;
