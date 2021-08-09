import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  ArrowBackIcon,
  View,
  ScrollView,
  Divider,
  Image,
} from 'native-base';
import style from '../styles/AjoutPropriete61';

function AjoutPropriete61({navigation}) {
  const styles = style();
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
                6/7
              </Text>{' '}
              Photo du logement
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '84%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5} alignItems="center">
          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mb={2}
            mt={6}
            onPress={() => navigation.navigate('AjoutPropriete62')}>
            Télécharger mes photos
          </Button>
          <Row space={2} alignItems="center" justifyContent="space-between">
            <Divider style={{width: '40%', opacity: 0.2}} bg="#3F3D56" />
            <Text fontSize="xs" style={{ opacity: 0.5}}>
              OU
            </Text>
            <Divider style={{width: '40%', opacity: 0.2}} bg="#3F3D56" />
          </Row>
          <Text px={4} fontSize="xl"  bold>
            Nous réalisons pour vous un reportage photo professionel
          </Text>
          <Text mt={-3} fontSize="xs" >
            Prestations sécurisées par l'assurance AXA
          </Text>

          <Image
            source={require('../assets/images/rocket.jpg')}
            alt="image base"
            width={115}
            height={81}
          />
          <Text px={4} fontSize="xl"  bold>
            Offrez le meilleur à votre bien
          </Text>
          <Text fontSize="sm" style={{textAlign: 'center'}}>
            Apollo Immo vous envoie un photographe qui réalisera des photos HDR
            ainsi qu’une visite virtuelle en moins de 48h. Grâce à la qualité de
            nos annonces, votre appartement se démarque et se loue beaucoup plus
            rapidement.
          </Text>

          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mt={2}
            onPress={() => navigation.navigate('AjoutPropriete62')}>
            Faire un devis et prendre RDV
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default AjoutPropriete61;