import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  ArrowBackIcon,
  Input,
  Center,
  View,
  ScrollView,
  FormControl,
} from 'native-base';

function GenererBail({navigation}) {
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
            Planifier une visite
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column
          pt={8}
          mx={3}
          space={6}
          alignItems="center"
          justifyContent="center">
          <Image
            source={require('../assets/images/image_planningVisite.png')}
            alt="image base"
            size={180}
          />
          <Text fontSize="xl" style={{textAlign: 'center'}} bold>
            Plus qu’à quelques clics du locataire idéal !
          </Text>
          <Text fontSize="lg" style={{textAlign: 'center'}}>
            Prenez contact avec votre candidat afin de prendre rendez-vous.
          </Text>
          <Box
            mb={5}
            p={3}
            style={{
              shadowOffset: {width: 0, height: 6},
              shadowRadius: 10,
              shadowOpacity: 1.0,
              borderRadius: 10,
              elevation: 2,
              backgroundColor: '#FFF',
              borderWidth: 1,
              borderColor: '#3B69B6',
            }}
            shadow={6}>
            <Text fontSize="lg" style={{textAlign: 'center'}}>
              Contacter mon candidat
            </Text>
            <Row space={10} justifyContent="space-between">
              <Column space={2}>
                <Text fontSize={14} mt={6}>
                  <Text fontSize={14} bold>
                    Nom du locataire :
                  </Text>{' '}
                  Marie PRIEUR
                </Text>
                <Text fontSize={14}>
                  <Text fontSize={14} bold>
                    Email :
                  </Text>{' '}
                  marie.prieur@gmail.com
                </Text>
                <Text fontSize={14}>
                  <Text fontSize={14} bold>
                    Tél. :
                  </Text>{' '}
                  06.26.73.95.64
                </Text>
              </Column>
              <Column>
                <Image
                  size={70}
                  mt={6}
                  alt="Contact Image"
                  borderRadius={100}
                  source={require('../assets/images/contact.jpg')}
                />
              </Column>
            </Row>
            <Center>
              <Button
                size="sm"
                style={styles.messageButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Message')}
                mt={6}>
                Messagerie Apollo
              </Button>
            </Center>
          </Box>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  modalText: {
    fontSize: 14,
  },
  messageButton: {
    width: 160,
    backgroundColor: '#3B69B6',
  },
  cards: {
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 1.0,
    borderRadius: 10,
    elevation: 5,
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

export default GenererBail;
