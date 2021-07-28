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
  View,
  ScrollView,
} from 'native-base';

function AnnonceEnregistree({navigation}) {
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
      <ScrollView>
        <Column
          pt={16}
          mx={4}
          space={3}
          alignItems="center"
          justifyContent="center">
          <Image
            source={require('../assets/images/image_genererBail.png')}
            alt="image base"
            size={180}
          />
          <Text fontSize="xl" mx={4} mb={8} style={{textAlign: 'center'}} bold>
            Votre annonce a bien été enregistrée !
          </Text>
          <Button
            size="lg"
            style={styles.revenirButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            onPress={() => navigation.navigate('Mon espace')}>
            Revenir aux propriétés
          </Button>
          <Button
            size="lg"
            style={styles.autreButton}
            borderRadius="pill"
            _text={{
              color: '#0B3D91',
              textAlign: 'center',
            }}
            onPress={() => navigation.navigate('Contrat_')}>
            Créer un contrat
          </Button>
          <Button
            size="lg"
            style={styles.autreButton}
            borderRadius="pill"
            _text={{
              color: '#0B3D91',
              textAlign: 'center',
            }}
            onPress={() => navigation.navigate('EtatDesLieux_')}>
            Créer un état des lieux
          </Button>
          <Button
            size="lg"
            style={styles.autreButton}
            borderRadius="pill"
            _text={{
              color: '#0B3D91',
                textAlign: 'center',
            }}
            onPress={() => navigation.navigate('AnnoncePubliee')}>
            Publier
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  revenirButton: {
    width: 230,
    backgroundColor: '#0B3D91',
  },
  autreButton: {
    width: 230,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
});

export default AnnonceEnregistree;
