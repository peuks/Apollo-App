import React, {useState} from 'react';
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
  ScrollView,
  Pressable,
  Modal,
  Center,
  CircleIcon,
} from 'native-base';

function Espace({navigation}) {
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
          <Column alignItems="center" >
            <SunIcon
              size="md"
              color="#3F3D56"
              onPress={() => navigation.navigate('Compte')}
            />
            <Text color="#3F3D56" fontSize={10} fontWeight="bold" onPress={() => navigation.navigate('Compte')}>
              Mon compte
            </Text>
          </Column>
        </Row>
        <Row space={2}>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            Mes candidatures
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center" >
            <SunIcon
              size="md"
              color="#3F3D56"
              onPress={() => navigation.navigate('ViewPro')}
            />
            <Text color="#3F3D56" fontSize={10} fontWeight="bold" 
              onPress={() => navigation.navigate('ViewPro')} >
              Mode propriétaire
            </Text>
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column mx={4}>
          <Row alignItems="center" justifyContent="space-between" my={5} space={3}>
            <Pressable
              alignItems="center"
              justifyContent="center"
              style={styles.cardStatistics}
              shadow={6}>
              <Column alignItems="center" justifyContent="center" mx={4} my={4}>
                <Text fontSize="4xl" style={styles.textTown}>
                  12
                </Text>
                <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                  Candidatures envoyées
                </Text>
              </Column>
            </Pressable>
            <Pressable
              alignItems="center"
              justifyContent="center"
              style={styles.cardStatistics}
              shadow={6}>
              <Column alignItems="center" justifyContent="center" mx={4} my={4}>
                <Text fontSize="4xl" style={styles.textTown}>
                  2
                </Text>
                <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                  en attente de réponse
                </Text>
              </Column>
            </Pressable>
          </Row>
          <Text style={styles.textTown} fontSize={20} my={5}>
            Mes candidatures en cours
          </Text>
          <Pressable
            mb={5}
            alignItems="center"
            justifyContent="center"
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('Propriete')}>
            <Image
              source={require('../assets/images/appart2.jpg')}
              alt="image base"
              width={401}
              height={190}
              roundedTop="lg"
              onPress={() => navigation.navigate('Propriete')}
            />
            <Row space={5} pl={1} pr={1} mt={5} mb={5}>
              <Column>
                <Text fontSize="sm" style={styles.textTown}>
                  Strasbourg
                </Text>
                <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                  Place de la République
                </Text>
                <Text fontSize="sm" style={styles.textPrice}>
                  1400€
                </Text>
                <Row space={5} mt={5}>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      120 m2
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      Meublé
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      3 ch.
                    </Text>
                  </Column>
                </Row>
              </Column>

              <Column space={3} pt={6}>
                <Button
                  size="sm"
                  style={styles.detailsButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}
                  onPress={() => navigation.navigate('Propriete')}>
                  Détails
                </Button>
                <Button
                  size="sm"
                  style={styles.contactButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}>
                  Annuler candidature
                </Button>
              </Column>
            </Row>
          </Pressable>
          <Pressable
            mb={5}
            alignItems="center"
            justifyContent="center"
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('Propriete')}>
            <Image
              source={require('../assets/images/appart2.jpg')}
              alt="image base"
              width={401}
              height={190}
              roundedTop="lg"
              onPress={() => navigation.navigate('Propriete')}
            />
            <Row space={5} pl={1} pr={1} mt={5} mb={5}>
              <Column>
                <Text fontSize="sm" style={styles.textTown}>
                  Strasbourg
                </Text>
                <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                  Place de la République
                </Text>
                <Text fontSize="sm" style={styles.textPrice}>
                  1400€
                </Text>
                <Row space={5} mt={5}>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      120 m2
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      Meublé
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      3 ch.
                    </Text>
                  </Column>
                </Row>
              </Column>

              <Column space={3} pt={6}>
                <Button
                  size="sm"
                  style={styles.detailsButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}
                  onPress={() => navigation.navigate('Propriete')}>
                  Détails
                </Button>
                <Button
                  size="sm"
                  style={styles.contactButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}>
                  Annuler candidature
                </Button>
              </Column>
            </Row>
          </Pressable>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  ScrollView: {},
  cards: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  cardStatistics: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#fff',
    
  },
  searchBar: {},
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: '#0B3D91',
    backgroundColor: '#0B3D91',
  },
  contactButton: { 
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

export default Espace;
