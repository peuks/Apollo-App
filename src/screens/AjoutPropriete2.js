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

function AjoutPropriete2({navigation}) {
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
                2/7
              </Text>{' '}
              Informations générales
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '28%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Formulaire appartement
          </Text>
        
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Pièces*
              </Text>
              <Select
                w={40}
                placeholder="Studio"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.select}>
                <Select.Item label="Studio" value="studio" />
                <Select.Item label="Studio" value="f" />
              </Select>
            </Row>
          </FormControl>
          <Text style={{color: '#000'}} fontSize={12} mt={-3}>
              Cuisine, SDB et toilette ne sont pas à prendre en compte.
          </Text>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Chambres*
              </Text>
              <Select
                w={40}
                placeholder="1"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.select}>
                <Select.Item label="1" value="1" />
                <Select.Item label="2" value="2" />
              </Select>
            </Row>
          </FormControl>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Salle de bain*
              </Text>
              <Select
                w={40}
                placeholder="1"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.select}>
                <Select.Item label="1" value="1" />
                <Select.Item label="2" value="2" />
              </Select>
            </Row>
          </FormControl>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Salons/Pièces  à vivre*
              </Text>
              <Select
                w={40}
                placeholder="1"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.select}>
                <Select.Item label="1" value="1" />
                <Select.Item label="2" value="2" />
              </Select>
            </Row>
          </FormControl>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Couloirs*
              </Text>
              <Select
                w={40}
                placeholder="1"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.select}>
                <Select.Item label="1" value="1" />
                <Select.Item label="2" value="2" />
              </Select>
            </Row>
          </FormControl>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Étage du bien*
              </Text>
              <Select
                w={40}
                placeholder="RDC"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.select}>
                <Select.Item label="RDC" value="rdc" />
                <Select.Item label="RDC" value="rdc" />
              </Select>
            </Row>
          </FormControl>

          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Superficie*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Date de disponibilité*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <Row space={1}>
            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
            <Text style={{color: '#3F3D56'}} fontSize={16} >
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
            onPress={() => navigation.navigate('AjoutPropriete3')}>
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

export default AjoutPropriete2;
