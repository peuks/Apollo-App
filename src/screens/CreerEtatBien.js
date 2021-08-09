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
import style from '../styles/CreerEtatBien';

function CreerEtatBien({navigation}) {
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
            <View />
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
            onPress={() => navigation.navigate('CreerEtat')}>
            Utiliser notre outil gratuit
          </Button>
          <Row space={2} alignItems="center" justifyContent="space-between">
            <Divider style={{width: '40%', opacity: 0.2}} bg="#3F3D56" />
            <Text fontSize="xs" style={{opacity: 0.5}}>
              OU
            </Text>
            <Divider style={{width: '40%', opacity: 0.2}} bg="#3F3D56" />
          </Row>
          <Text  style={{textAlign:'center'}} fontSize="xl" bold>
            Nous réalisons pour vous un état des lieux certifié
          </Text>
          <Text mt={-3} fontSize="xs">
            Prestations sécurisées par l'assurance AXA
          </Text>

          <Image
            source={require('../assets/images/image_check_visit.png')}
            alt="image base"
            width={115}
            height={81}
          />
          <Text  style={{textAlign:'left'}} fontSize="md" bold>
            Découvrez notre partenaire Check {'&'} Visit
          </Text>
          <Text fontSize="sm" style={{textAlign: 'center'}}>
            Check {'&'} Visit réalise pour vous votre état des lieux. Fini les
            services médiocres et les états des lieux compliqués. Check {'&'}{' '}
            Visit permet à tout bailleur de déléguer simplement son état des
            lieux en toute sérénité. Sans vous déplacer.
          </Text>

          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mt={2}
            onPress={() => navigation.navigate('DevisCheckVisit2')}>
            Faire un devis et prendre RDV
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}


export default CreerEtatBien;