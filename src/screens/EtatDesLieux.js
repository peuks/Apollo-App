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
  ArrowUpIcon,
  ScrollView,
  Pressable,
  Modal,
  Center,
  View,
  CircleIcon,
  Checkbox,
  Tabs,
  Switch,
} from 'native-base';

function EtatDesLieux({navigation}) {
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
          <Column alignItems="center">
            <View />
          </Column>
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
      <ScrollView>
        <Column mx={4}>
          <Box>
            <Tabs isFitted colorScheme="blue" size="sm">
              <Tabs.Bar>
                <Tabs.Tab>Etat des lieux d'entrée</Tabs.Tab>
                <Tabs.Tab>Etat des lieux de sortie</Tabs.Tab>
              </Tabs.Bar>
              <Tabs.Views>
                <Tabs.View>
                  <Pressable
                    mb={5}
                    style={styles.cards}
                    shadow={6}
                    onPress={() => navigation.navigate('ProprietePro')}>
                    <Image
                      source={require('../assets/images/appart2.jpg')}
                      alt="image base"
                      width={401}
                      height={140}
                      roundedTop="lg"
                      onPress={() => navigation.navigate('ProprietePro')}
                    />
                    <Row px={2} py={4} justifyContent="space-between" >
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
                          <Column justifyContent="center" alignItems="center">
                            <SunIcon size="sm"/>
                            <Text fontSize="xs" style={styles.IconsText}>
                              120 m2
                            </Text>
                          </Column>
                          <Column justifyContent="center" alignItems="center">
                            <SunIcon size="sm"/>
                            <Text fontSize="xs" style={styles.IconsText}>
                              Meublé
                            </Text>
                          </Column>
                          <Column justifyContent="center" alignItems="center">
                            <SunIcon size="sm"/>
                            <Text fontSize="xs" style={styles.IconsText}>
                              3 ch.
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column>
                        <Button
                         
                          mt={24}
                          size="sm"
                          style={styles.creerButton}
                          borderRadius="pill"
                          _text={{
                            color: '#0B3D91',
                            textAlign:'center',
                          }}
                          onPress={() => navigation.navigate('CreerEtatBien')}>
                          Créer un E.D.L
                        </Button>
                      </Column>
                    </Row>
                  </Pressable>
                </Tabs.View>
                <Tabs.View>
                  <Pressable
                    mb={5}
                    style={styles.cards}
                    shadow={6}
                    onPress={() => navigation.navigate('ProprietePro')}>
                    <Image
                      source={require('../assets/images/appart2.jpg')}
                      alt="image base"
                      width={401}
                      height={140}
                      roundedTop="lg"
                      onPress={() => navigation.navigate('ProprietePro')}
                    />
                    <Row px={2} py={4} justifyContent="space-between" >
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
                          <Column justifyContent="center" alignItems="center">
                            <SunIcon size="sm"/>
                            <Text fontSize="xs" style={styles.IconsText}>
                              120 m2
                            </Text>
                          </Column>
                          <Column justifyContent="center" alignItems="center">
                            <SunIcon size="sm"/>
                            <Text fontSize="xs" style={styles.IconsText}>
                              Meublé
                            </Text>
                          </Column>
                          <Column justifyContent="center" alignItems="center">
                            <SunIcon size="sm"/>
                            <Text fontSize="xs" style={styles.IconsText}>
                              3 ch.
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column>
                        <Button
                          mt={24}
                          size="sm"
                          style={styles.creerButton}
                          borderRadius="pill"
                          _text={{
                            color: '#0B3D91',
                            textAlign:'center',
                          }}
                          onPress={() => navigation.navigate('CreerEtatSortie')}>
                          Créer un E.D.L
                        </Button>
                      </Column>
                    </Row>
                  </Pressable>
                </Tabs.View>
              </Tabs.Views>
            </Tabs>
          </Box>

          <Button
            size="md"
            style={styles.creerButton2}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            onPress={() => navigation.navigate('CreerEtat')}>
            Créer un état des lieux pour un autre bien
          </Button>
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
    height: 100,
    width: 170,
  },
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  creerButton: {
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
  creerButton2: {
    backgroundColor: '#0B3D91',
    marginTop: 115,
  },
});

export default EtatDesLieux;
