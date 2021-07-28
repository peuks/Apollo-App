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
                4/4
              </Text>{' '}
              Modalités financières
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '100%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Modalités financières
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Loyer*
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
              Type de charges*
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
              Montant charges*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Caution*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Mode de paiement*
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
              Date de paiement*
            </FormControl.Label>
            <Input type="date" size="md" style={styles.input} />
          </FormControl>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Régulation des loyers <InfoIcon size="xs" mt={1} />
          </Text>
          <Text style={styles.textTown} fontSize={15}>
            Le loyer est soumis au décret fixant annuellement le montant maximum
            d’évolution des loyers à la relocation
          </Text>
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
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Montant du loyer du précédent locataire*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <Text style={styles.textTown} fontSize={15}>
            Le loyer du logement est-il soumis au loyer de référence fixé par
            arrêté préfectoral ?
          </Text>
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
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Loyer de référence*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Montant du complément de loyer*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Personnalisation du contrat
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Voulez-vous ajouter une clause travaux à votre contrat ?{""}<InfoIcon size="xs" mt={1} />
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Voulez-vous ajouter une clause à votre contrat ?*
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
            onPress={() => navigation.navigate('Propriete')}>
            Visualiser et signer le contrat
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
