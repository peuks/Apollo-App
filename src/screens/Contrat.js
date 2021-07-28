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

function Contrat({navigation}) {
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
            Mes contrats
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
            <Tabs isFitted colorScheme="blue" size="md">
              <Tabs.Bar>
                <Tabs.Tab>Nouveau contrat</Tabs.Tab>
                <Tabs.Tab>Vos contrats</Tabs.Tab>
              </Tabs.Bar>
              <Tabs.Views>
                <Tabs.View>
                  <Pressable
                    mb={5}
                    alignItems="center"
                    justifyContent="center"
                    style={styles.cards}
                    shadow={6}>
                    <Image
                      source={require('../assets/images/appart2.jpg')}
                      alt="image base"
                      width={401}
                      height={140}
                      roundedTop="lg"
                    />
                    <Row space={8} px={1} my={5}>
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

                      <Column space={3}>
                        <Button
                          mt={24}
                          size="sm"
                          style={styles.creerButton}
                          borderRadius="pill"
                          _text={{
                            color: '#0B3D91',
                          }}
                          onPress={() => navigation.navigate('CreationContrat_1')}>
                          Créer contrat
                        </Button>
                      </Column>
                    </Row>
                  </Pressable>
                </Tabs.View>
                <Tabs.View>VOS CONTRATS</Tabs.View>
              </Tabs.Views>
            </Tabs>
          </Box>

          <Button
            size="lg"
            style={styles.creerButton2}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            onPress={() => navigation.navigate('CreationContrat_1')}>
            Créer un contrat pour un autre bien
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
    marginTop: 125,
  },
});

export default Contrat;
