import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  ScrollView,
  Pressable,
  View,
  Tabs,
} from 'native-base';
import SurfaceSmIcon from '../assets/svg/SurfaceSmIcon';
import MeubleSmIcon from '../assets/svg/MeubleSmIcon';
import ChambreSmIcon from '../assets/svg/ChambreSmIcon';
import style from '../styles/EtatDesLieux';

function EtatDesLieux({navigation}) {
  const styles = style();

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
                    <Row px={2} py={4} justifyContent="space-between">
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
                            <Box alignItems="center">
                              <SurfaceSmIcon color="#3F3D56" />
                            </Box>
                            <Text fontSize="xs" style={styles.IconsText}>
                              120 m2
                            </Text>
                          </Column>
                          <Column>
                            <Box alignItems="center">
                              <MeubleSmIcon color="#3F3D56" />
                            </Box>
                            <Text fontSize="xs" style={styles.IconsText}>
                              Meublé
                            </Text>
                          </Column>
                          <Column>
                            <Box alignItems="center">
                              <ChambreSmIcon color="#3F3D56" />
                            </Box>
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
                            textAlign: 'center',
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
                    <Row px={2} py={4} justifyContent="space-between">
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
                            <Box alignItems="center">
                              <SurfaceSmIcon color="#3F3D56" />
                            </Box>
                            <Text fontSize="xs" style={styles.IconsText}>
                              120 m2
                            </Text>
                          </Column>
                          <Column>
                            <Box alignItems="center">
                              <MeubleSmIcon color="#3F3D56" />
                            </Box>
                            <Text fontSize="xs" style={styles.IconsText}>
                              Meublé
                            </Text>
                          </Column>
                          <Column>
                            <Box alignItems="center">
                              <ChambreSmIcon color="#3F3D56" />
                            </Box>
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
                            textAlign: 'center',
                          }}
                          onPress={() =>
                            navigation.navigate('CreerEtatSortie')
                          }>
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

export default EtatDesLieux;
