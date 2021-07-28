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
  SunIcon,
} from 'native-base';

function DevisCheckVisit2({navigation}) {
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
              Check and Visit
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider w="100%" h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={4} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Devis Check and Visit
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
            <Input type="email" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Téléphone*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
           <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Adresse du bien*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
           <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Etage*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Numéro de lot*
            </FormControl.Label>
            <Input size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              DigiCode*
            </FormControl.Label>
            <Input type="password" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Commentaire d’accès au logement*
            </FormControl.Label>
            <Input type="email" size="md" style={styles.input} />
          </FormControl>
           <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Type de construction ?*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
           <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Meublé ?*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
           <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Type du bien*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
           <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Superficie*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
            Autres parties du logement ?*
          </Text>
          <Row space={8} alignItems="center" justifyContent="center">
            <Column alignItems="center" >
              <SunIcon size="lg" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Box
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="lg" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Cave
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="lg" />
              <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                Jardin
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
            mt={16}
            alignSelf="center">
            Valider ma demande
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

export default DevisCheckVisit2;
