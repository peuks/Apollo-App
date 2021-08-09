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
  FormControl,
  Input
} from 'native-base';
import style from '../styles/AjoutPropriete62';

function AjoutPropriete62({navigation}) {
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
        <Column mt={2} mx={4} space={4} alignItems="center">
          <Text px={4} fontSize="xl" mt={6} bold>
            Ajouter des photos à votre annonce
          </Text>
          <Text fontSize="sm" style={{textAlign: 'left'}}>
            Télécharger des photos et des vidéos de votre appartement. {"\n"}Conseil :
            Les annonces avec des vidéos et photos obtiennent plus de visibilité
            et d'engagement !
          </Text>

          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mb={2}
            mt={6}
            onPress={() => navigation.navigate('AjoutPropriete7')}>
            Télécharger mes photos
          </Button>
          <Divider style={{width: '90%'}} bg="#3F3D56" />
          
          <FormControl alignItems="center">
            <Input w="70%" type="text" size="md" placeholder="URL de vidéo*" style={styles.input}  />
          </FormControl>
          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mt={2}
            onPress={() => navigation.navigate('AjoutPropriete7')}>
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default AjoutPropriete62;