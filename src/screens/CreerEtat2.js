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

function CreerEtat2({navigation}) {
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
        <Column mt={4} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Électricité
          </Text>
          <Column mx={2} space={4}>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                N° compteur*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Relevé heures creuses*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Relevé heures pleines*
              </FormControl.Label>
              <Input type="email" size="md" style={styles.input} />
            </FormControl>
          </Column>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Gaz
          </Text>
          <Column mx={2} space={4}>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                N° compteur*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Relevé*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
          </Column>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Eau
          </Text>
          <Column mx={2} space={4}>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Eau chaude (m3)*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Eau froide (m3)*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
          </Column>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Chauffage
          </Text>
          <Column mx={2} space={4}>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Modalité de chauffage de l’appartement*
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
                Modalité de chauffage de l’eau*
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
                Chaudière*
              </FormControl.Label>
              <Select
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.input}>
                <Select.Item label="oui" value="o" />
                <Select.Item label="non" value="n" />
              </Select>
            </FormControl>
          </Column>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Équipements
          </Text>
          <Column mx={2} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Interphone*
            </Text>
            <FormControl>
              <Select
                placeholder="Etat"
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
              <Input
                placeholder="Commentaire"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
          </Column>
          <Column mx={2} mt={6} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Boîte aux lettres*
            </Text>
            <FormControl>
              <Select
                placeholder="Etat"
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
              <Input
                placeholder="Commentaire"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
          </Column>
          <Column mx={2} my={6} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Détecteur de fumée*
            </Text>
            <FormControl>
              <Select
                placeholder="Etat"
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
              <Input
                placeholder="Commentaire"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
          </Column>

          <Button
            size="lg"
            style={styles.ajouterButton}
            borderRadius="pill"
            _text={{
              color: '#0B3D91',
            }}
            mt={6}
            alignSelf="center">
            Ajouter un équipement
          </Button>
          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mb={10}
            alignSelf="center"
            onPress={() => navigation.navigate('CreerEtat3')}>
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

export default CreerEtat2;
