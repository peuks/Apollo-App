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
  Switch,
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
            Générer un bail
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
          <Text fontSize="2xl" style={{textAlign: 'center'}} bold>
            Vous avez trouvé le locataire idéal ?
          </Text>
          <Text fontSize="xl" style={{textAlign: 'center'}}>
            Avant de créer votre contrat de location, Apollo vous conseille de
            contacter votre futur locataire afin de lui communiquer votre RIB et
            de discuter des dernières modalités.
          </Text>
          <Button
            size="lg"
            style={styles.genererButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}>
            Générer le contrat
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  genererButton: {
    width: 280,
    backgroundColor: '#0B3D91',
  },
});

export default GenererBail;
