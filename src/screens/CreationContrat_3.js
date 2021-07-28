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
  Pressable,
} from 'native-base';

function CreationContrat_2({navigation}) {
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
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Durée du bail*
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
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Date de début du contrat*
            </FormControl.Label>
            <Input type="date" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Destination des locaux*
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

          <Text style={styles.textTown} fontSize={20} my={2}>
            Informations du bien
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Régime juridique de l’immeuble*
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
          <Row space={4} justifyContent="flex-start">
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
          <Row space={4} justifyContent="flex-start">
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

export default CreationContrat_2;
