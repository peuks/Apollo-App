import React from 'react';
import {StyleSheet} from 'react-native';
import {
  NativeBaseProvider,
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  SearchIcon,
  SunIcon,
  ArrowUpIcon,
  Input,
  Stack,
  View,
  Pressable,
} from 'native-base';

function ViewCarte({navigation}) {
  return (
    <Box flex={1} bg="#FAFAFA">
      <Row
        px={1}
        py={3}
        justifyContent="space-between"
        alignItems="center"
        ml={2}
        mr={2}>
        <Row space={4} alignItems="center">
          <View />
        </Row>
        <Row space={6}>
          <View />
        </Row>
        <Pressable
            style={{
                elevation:2,
                backgroundColor:"#fff",
                borderRadius:30,
                borderWidth: 1,
                borderColor: '#fff',
            }}
            onPress={() => navigation.navigate('ViewRecherche')}
            >
          <Row justifyContent="space-between" space={4} px={3} py={4} mx={8}>
            <SearchIcon size={4} mt={0.5}/>
            <Text fontSize="sm">
              Où voulez-vous vivre ?
            </Text>
          </Row>
        </Pressable>
        <SunIcon />
      </Row>
      <Column mt={1} space={5}>
        <Row alignItems="center" justifyContent="center" space={2}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/icons/icone-liste.png')}
            alt="Localize"
          />
          <Text
            style={styles.cartText}
            fontSize="sm"
            onPress={() => navigation.navigate('Recherche')}>
            Affichage vue liste
          </Text>
        </Row>
        <Box alignItems="center" justifyContent="center" style={styles.cards}>
          <Image
            source={require('../assets/images/Map.jpg')}
            alt="image base"
            width={400}
            height={590}
          />
        </Box>
      </Column>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  cards: {},
  searchBar: {
    borderColor: '#000',
  },
  searchBar: {
    textAlign: 'center',
  },
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  candidaterButton: {
    width: 160,
    backgroundColor: '#0B3D91',
  },
  contactButton: {
    width: 160,
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

export default ViewCarte;
