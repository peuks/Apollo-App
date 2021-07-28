import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  SunIcon,
  Divider,
  ArrowBackIcon,
  ScrollView,
  CircleIcon,
  Switch,
} from 'native-base';

function ProprieteProLouee({navigation}) {
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
          <ArrowBackIcon
            size="md"
            color="#3F3D56"
            onPress={() => navigation.goBack()}
          />
        </Row>
        <Row space={2}>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            Ma propriété
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column mt={1} space={6} ml={3} mr={3}>
          <Column>
            <Box
              my={4}
              alignItems="center"
              justifyContent="center"
              style={styles.cards}
              shadow={4}>
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={401}
                height={170}
                roundedTop="lg"
              />
              <Row space={3} px={1} my={5} justifyContent="flex-start">
                <Column ml={2}>
                  <Text fontSize="sm" style={styles.textTown}>
                    Strasbourg
                  </Text>
                  <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                    Place de la république
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
                <Column space={6} mr={2}>
                  <Text
                    fontSize="xs"
                    style={{color: '#000'}}
                    underline
                    italic
                    mt={2}>
                    En location depuis le 23 juin 2021
                  </Text>
                  <Row alignItems="flex-start">
                    <Switch
                      size="lg"
                      mt={-0.5}
                      colorScheme="white"
                      onTrackColor="#CBCBCB"
                      onThumbColor="#fff"
                      defaultIsChecked
                    />
                    <Text fontSize="sm">Annonce diffusée</Text>
                  </Row>
                  <Row mt={-2}>
                    <Button
                      size="sm"
                      style={styles.editerButton}
                      borderRadius="pill"
                      _text={{
                        color: '#FFF',
                      }}>
                      Editer
                    </Button>
                  </Row>
                </Column>
              </Row>
            </Box>

            <Column space={4} my={5} ml={2} mr={2}>
              <Text
                mt={2}
                style={{
                  textAlign: 'left',
                  fontSize: 20,
                }}
                bold>
                Votre locataire
              </Text>
              <Box style={styles.candidatureCards} px={3} py={4}>
                <Column space={2}>
                  <Row justifyContent="space-between" space={3}>
                    <Image
                      size={70}
                      alt="Contact Image"
                      borderRadius={100}
                      style={{alignSelf: 'center'}}
                      source={require('../assets/images/contact.jpg')}
                    />
                    <Column alignItems="flex-end">
                      <Text fontSize="lg" mb={2}>
                        Contacter votre locataire
                      </Text>
                      <Text fontSize={14}>
                        <Text fontSize={14} bold>
                          Nom du locataire :
                        </Text>{' '}
                        Sophie Brady
                      </Text>
                      <Text fontSize={14}>
                        <Text fontSize={14} bold>
                          Email :
                        </Text>{' '}
                        sophie.brady@gmail.com
                      </Text>
                      <Text fontSize={14}>
                        <Text fontSize={14} bold>
                          Tél. :
                        </Text>{' '}
                        06.26.73.95.64
                      </Text>
                      <Button
                        size="sm"
                        mt={1}
                        style={styles.messageButton}
                        borderRadius="pill"
                        _text={{
                          color: '#FFF',
                        }}
                        onPress={() => navigation.navigate('Message')}>
                        Messagerie Apollo
                      </Button>
                    </Column>
                  </Row>
                </Column>
              </Box>
            </Column>

            <Column space={4} my={5} ml={2} mr={2}>
              <Text
                mt={2}
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                }}
                bold>
                Générer mes 3 dernières quittances
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#3F3D56',
                  textAlign: 'center',
                }}>
                Créez en quelques secondes une quittance de loyer et envoyez-la
                à votre locataire.
              </Text>
              <Button
                size="lg"
                style={{
                  width: 240,
                  backgroundColor: '#0B3D91',
                  alignSelf: 'center',
                  marginBottom: 40,
                }}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}>
                Envoyer les quittances
              </Button>
            </Column>
            <Divider my={3} />
            <Column space={4} my={5} ml={2} mr={2}>
              <Text
                mt={2}
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                }}
                bold>
                Gérer et collecter mes loyers
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#3F3D56',
                  textAlign: 'center',
                }}>
                Créez un calendrier de paiements et invitez votre locataire.
                Vous profiterez de plus de sécurité et de fléxibilité.
              </Text>
              <Button
                size="lg"
                style={{
                  width: 240,
                  backgroundColor: '#0B3D91',
                  alignSelf: 'center',
                  marginBottom: 40,
                }}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}>
                Configurer les loyers
              </Button>
            </Column>

            <Divider my={3} />
            <Column space={4} my={5} ml={2} mr={2}>
              <Text
                mt={2}
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                }}
                bold>
                Gérer les diagnostics de mon bien
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#3F3D56',
                  textAlign: 'center',
                }}>
                Vous pouvez télécharger toute les annexes relatives à votre
                bien. Nous nous occuperons de les envoyer à votre futur
                locataire.
              </Text>
              <Button
                size="lg"
                style={{
                  width: 240,
                  backgroundColor: '#0B3D91',
                  alignSelf: 'center',
                  marginBottom: 40,
                }}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}>
                Gérer les annexes
              </Button>
            </Column>
          </Column>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  editerButton: {
    backgroundColor: '#0B3D91',
    borderWidth: 1,
    borderColor: '#0B3D91',
    width: 160,
  },
  messageButton: {
    width: 160,
    backgroundColor: '#3B69B6',
  },
  IconsText: {
    color: '#3F3D56',
    textAlign: 'center',
  },
  cards: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  candidatureCards: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#fff',
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
  descriptionTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#3F3D56',
  },
  descriptionText: {
    color: '#3F3D56',
    textAlign: 'justify',
    alignItems: 'flex-start',
    width: 360,
  },
  container: {
    flexDirection: 'row',
  },

  planifierButton: {
    backgroundColor: '#0B3D91',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  genererButton: {
    width: 140,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
});

export default ProprieteProLouee;
