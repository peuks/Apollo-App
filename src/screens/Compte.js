import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  NativeBaseProvider,
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  SearchIcon,
  SunIcon,
  ArrowUpIcon,
  ArrowBackIcon,
  Input,
  Stack,
  View,
  ScrollView,
  Pressable,
  Modal,
  Center,
  CircleIcon,
  Select,
  FormControl,
  CheckIcon,
} from 'native-base';

function Compte({navigation}) {
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
        <Column mt={0} mx={4}>
          <Text style={styles.textTown} fontSize={20} my={5}>
            Identité et coordonnées
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Nom*
            </FormControl.Label>
            <Input size="md" style={styles.input} />
          </FormControl>

          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Prenom*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Email*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Téléphone*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Adresse*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <Row alignItems="center" justifyContent="space-between">
            <FormControl mb={5} width="40">
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Code Postal*
              </FormControl.Label>
              <Input type="password" size="md" style={styles.input} />
            </FormControl>
            <FormControl mb={5} width="40">
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Ville*
              </FormControl.Label>
              <Input type="password" size="md" style={styles.input} />
            </FormControl>
          </Row>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Pays*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Date de naissance*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Ville de naissance*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Pays de naissance*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              RIB*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Genre*
            </FormControl.Label>
            <Select
             _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={10} />,
              }}
              mt={1}
              style={styles.input} 
              >
              <Select.Item label="Male" value="m" />
              <Select.Item label="Female" value="f" />
            </Select>
          </FormControl>
          <Text style={styles.textTown} fontSize={20} my={5}>
            Profil public
          </Text>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Photo de profil*
            </FormControl.Label>
            <Input
              type="file"
              size="md"
              style={styles.input}
              placeholder="Cliquez ici pour ajouter une photo"
              InputLeftElement={
                <ArrowUpIcon
                  size="sm"
                  m={2}
                  _light={{
                    color: 'black',
                  }}
                  _dark={{
                    color: 'gray.300',
                  }}
                />
              }
            />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Description*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
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

const styles = StyleSheet.create({
  container: {},
  input: {
    borderColor: '#000',
  },
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  modifierButton: {
    width: 280,
    backgroundColor: '#0B3D91',
  },
  supprimerButton: {
    width: 280,
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

export default Compte;
