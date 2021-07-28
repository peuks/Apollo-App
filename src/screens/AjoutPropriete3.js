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
  Checkbox,
  SunIcon,
} from 'native-base';

function AjoutPropriete3({navigation}) {
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
                3/7
              </Text>{' '}
              Les agréments
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '42%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Les agréments
          </Text>
          <Row justifyContent="space-evenly">
            <Column alignItems="center" justifyContent="flex-start">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Meublé
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Machine a{"\n"} laver
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Orienté sud
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Belle vue
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Cuisine{"\n"} équipée
              </Text>
            </Column>
          </Row>
          <Row  space={7} justifyContent="flex-start" >
            <Column alignItems="center" justifyContent="flex-start">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Balcon
              </Text>
            </Column>
            <Column alignItems="center" justifyContent="flex-start">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Terrasse
              </Text>
            </Column>
            <Column alignItems="center" justifyContent="flex-start">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Internet{"\n"}inclus
              </Text>
            </Column>
            <Column alignItems="center" justifyContent="flex-start">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Lave{"\n"}vaisselle
              </Text>
            </Column>
            <Column>
              <View/>
            </Column>
            
          </Row>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Les autres parties
          </Text>
          <Row  justifyContent="space-evenly">
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Grenier
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Garage
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Cave
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Parking
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Jardin
              </Text>
            </Column>
          </Row>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Les plus de votre immeuble
          </Text>
          <Row  justifyContent="space-between">
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Salle de sport
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Concierge
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Laverie
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Ascenseur
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Local vélo
              </Text>
            </Column>
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
            onPress={() => navigation.navigate('AjoutPropriete4')}>
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
  select: {
    borderColor: '#000',
    width: 50,
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

export default AjoutPropriete3;
