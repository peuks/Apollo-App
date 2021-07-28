import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  SearchIcon,
  SunIcon,
  Input,
  View,
  ScrollView,
  Pressable,
  Center,
  SmallCloseIcon,
  Checkbox,
  FormControl,
  ArrowUpIcon,
} from 'native-base';

function Filtres({navigation}) {
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
          <SmallCloseIcon
            size="md"
            color="#3F3D56"
            onPress={() => navigation.goBack()}
          />
        </Row>
        <Row space={2}>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            Filtres
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column mt={0} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} mt={4}>
            Nature du bien
          </Text>
          <Row  space={8} alignItems="center" justifyContent="flex-start">
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="md" style={styles.IconsText} noOfLines={2}>
                Appartement
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="md" style={styles.IconsText} noOfLines={2}>
                Maison
              </Text>
            </Column>
            <Column alignItems="center">
              <SunIcon size="md" />
              <Text fontSize="md" style={styles.IconsText} noOfLines={2}>
                Res. étudiante
              </Text>
            </Column>
          </Row>
          <Text style={styles.textTown} fontSize={20} mt={5}>
            Nombre de chambres ?
          </Text>
          <Row mt={6} space={5} alignItems="center" justifyContent="flex-start">
            <Box
              bg="primary.400"
              p={4}
              style={styles.cards}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              1
            </Box>
            <Box
              bg="primary.400"
              p={4}
              style={styles.cards}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              2
            </Box>
            <Box
              bg="primary.400"
              p={4}
              style={styles.cards}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              3
            </Box>
            <Box
              bg="primary.400"
              p={4}
              style={styles.cards}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              4+
            </Box>
          </Row>
          <Text style={styles.textTown} fontSize={20} mt={5}>
            Budget
          </Text>
          <Row
            space={10}
            alignItems="center"
            justifyContent="flex-start">
            <Row space={3}>
              <Text style={{color: '#3F3D56'}} fontSize={20}>
                Min
              </Text>
              <Input
                type="number"
                size="sm"
                style={styles.input}
                width={90}
                height={10}
                mt={-1}
                keyboardType="numeric"
                p={2}
                InputRightElement="€"
              />
            </Row>

            <Row space={3}>
              <Text style={{color: '#3F3D56'}} fontSize={20}>
                Max
              </Text>
              <Input
                type="number"
                size="sm"
                style={styles.input}
                width={90}
                height={10}
                mt={-1}
                keyboardType="numeric"
                InputRightElement="€"
              />
            </Row>
          </Row>
          <Text style={styles.textTown} fontSize={20} mt={5}>
            Nombre de pièces ?
          </Text>
          <Row space={5} alignItems="center" justifyContent="flex-start">
            <Box
              bg="primary.400"
              p={4}
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                elevation: 2,
                borderWidth: 1,
                borderColor: '#fff',
                width: 90,
                alignItems: 'center',
              }}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              Studio
            </Box>
            <Box
              bg="primary.400"
              p={4}
              style={styles.cards}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              2
            </Box>
            <Box
              bg="primary.400"
              p={4}
              style={styles.cards}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              3
            </Box>
            <Box
              bg="primary.400"
              p={4}
              style={styles.cards}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              4+
            </Box>
          </Row>
          <Text style={styles.textTown} fontSize={20} mt={5}>
            Type de contrat
          </Text>
          <Row space={5} alignItems="center" justifyContent="flex-start">
            <Column space={5} alignItems="flex-start">
              <Checkbox value="meublé">Meublé</Checkbox>
              <Checkbox value="colocation">Colocation</Checkbox>
            </Column>
            <Column space={5} alignItems="flex-start">
              <Checkbox value="non meublé">Non meublé</Checkbox>
              <Checkbox value="coliving">Coliving</Checkbox>
            </Column>
          </Row>
          <Text style={styles.textTown} fontSize={20} my={5}>
            Surface
          </Text>
          <Button
            size="lg"
            style={styles.validerButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            onPress={() => navigation.navigate('Recherche')}>
            Valider
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  cards: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#fff',
    width: 60,
    alignItems: 'center',
  },
  input: {},
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  validerButton: {
    width: 190,
    backgroundColor: '#0B3D91',
    alignSelf: 'center',
    marginBottom: 40,
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

export default Filtres;
