import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  Divider,
  ArrowBackIcon,
  ScrollView,
  Switch,
} from 'native-base';
import SurfaceSmIcon from '../assets/svg/SurfaceSmIcon';
import MeubleSmIcon from '../assets/svg/MeubleSmIcon';
import ChambreSmIcon from '../assets/svg/ChambreSmIcon';
import ApollomessageIcon from '../assets/svg/ApollomessageIcon';
import style from '../styles/ProprieteProLouee';

function ProprieteProLouee({navigation}) {
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
            <Box my={4} style={styles.cards} shadow={4}>
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                height={170}
                roundedTop="lg"
              />
              <Row space={4} px={1} my={5} justifyContent="center">
                <Column>
                  <Text fontSize="sm" style={styles.textTown}>
                    Strasbourg
                  </Text>
                  <Text fontSize="sm" style={styles.textAdress} noOfLines={2}>
                    Place de la république
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
                <Column space={6}>
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
                      ml={2}
                      size={70}
                      alt="Contact Image"
                      borderRadius={100}
                      style={{alignSelf: 'center'}}
                      source={require('../assets/images/contact.jpg')}
                    />
                    <Column>
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
                      <Text fontSize={14} alignSelf="flex-end">
                        <Text fontSize={14} bold>
                          Tél. :
                        </Text>{' '}
                        06.26.73.95.64
                      </Text>
                      <Button
                        size="sm"
                        mt={1}
                        alignSelf="flex-end"
                        style={styles.messageButton}
                        borderRadius="pill"
                        _text={{
                          color: '#FFF',
                        }}
                        endIcon={<ApollomessageIcon />}
                        onPress={() => navigation.navigate('Message')}>
                        Messagerie Apollo
                      </Button>
                    </Column>
                  </Row>
                </Column>
              </Box>
            </Column>

            <Column space={4} my={5} ml={2} mr={2}>
              <Text mt={2} style={styles.descriptionTitle} bold>
                Générer mes 3 dernières quittances
              </Text>
              <Text style={styles.descriptionText}>
                Créez en quelques secondes une quittance de loyer et envoyez-la
                à votre locataire.
              </Text>
              <Button
                size="lg"
                style={styles.descriptionButton}
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
              <Text mt={2} style={styles.descriptionTitle} bold>
                Gérer et collecter mes loyers
              </Text>
              <Text style={styles.descriptionText}>
                Créez un calendrier de paiements et invitez votre locataire.
                Vous profiterez de plus de sécurité et de fléxibilité.
              </Text>
              <Button
                size="lg"
                style={styles.descriptionButton}
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
              <Text mt={2} style={styles.descriptionTitle} bold>
                Gérer les diagnostics de mon bien
              </Text>
              <Text style={styles.descriptionText}>
                Vous pouvez télécharger toute les annexes relatives à votre
                bien. Nous nous occuperons de les envoyer à votre futur
                locataire.
              </Text>
              <Button
                size="lg"
                style={styles.descriptionButton}
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

export default ProprieteProLouee;
