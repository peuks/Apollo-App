import React, {useState} from 'react';
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
import style from '../styles/AnnoncePubliee';

function AnnoncePubliee({navigation}) {
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
      <ScrollView>
        <Column
          pt={16}
          mx={4}
          space={6}
          alignItems="center"
          justifyContent="center">
          <Image
            source={require('../assets/images/image_genererBail.png')}
            alt="image base"
            size={180}
          />
          <Text fontSize="xl" style={{textAlign: 'center'}} bold>
            Votre annonce a bien été publiée !
          </Text>
          <Text fontSize="md" mx={4} style={{textAlign: 'center'}}>
            Nous vous enverrons un message dès que vous aurez un candidat.
          </Text>
          <Button
            size="lg"
            style={styles.genererButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            onPress={() => navigation.navigate('Mon Espace')}>
            Revenir aux propriétés
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default AnnoncePubliee;