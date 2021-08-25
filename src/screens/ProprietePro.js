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
  CircleIcon,
  Switch,
} from 'native-base';
import SurfaceSmIcon from '../assets/svg/SurfaceSmIcon';
import MeubleSmIcon from '../assets/svg/MeubleSmIcon';
import ChambreSmIcon from '../assets/svg/ChambreSmIcon';
import style from '../styles/ProprietePro';

function ProprietePro({navigation}) {
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
              <Row space={8} px={1} my={5} justifyContent="center">
                <Column>
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
                <Column space={3}>
                  <Row alignItems="flex-start" space={2} mt={16}>
                    <Switch
                      size="lg"
                      mt={-0.5}
                      colorScheme="emerald"
                      defaultIsChecked
                    />
                    <Text fontSize="sm" style={{color: '#18AD6E'}}>
                      En ligne
                    </Text>
                  </Row>
                  <Row mt={-2}>
                    <Button
                      size="sm"
                      style={styles.editerButton}
                      borderRadius="pill"
                      _text={{
                        color: '#0B3D91',
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
                Liste des candidatures
              </Text>
              <Box style={styles.candidatureCards} px={3} py={4}>
                <Column space={2}>
                  <Row justifyContent="space-between" space={3}>
                    <Image
                      size={60}
                      alt="Contact Image"
                      borderRadius={100}
                      style={{alignSelf: 'center'}}
                      source={require('../assets/images/contact.jpg')}
                    />
                    <Column>
                      <Text fontSize="sm" style={styles.textTown}>
                        Sophie Brady
                      </Text>
                      <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                        Directrice Marketing
                      </Text>
                      <Text fontSize="sm" style={styles.textPrice}>
                        100k€/an
                      </Text>
                    </Column>
                    <Text
                      mt={4}
                      style={{
                        textAlign: 'right',
                        fontSize: 15,
                        color: '#0B3D91',
                      }}
                      bold>
                      Ouvrir le dossier
                    </Text>
                  </Row>
                  <Row space={4} mt={3} justifyContent="center">
                    <Button
                      size="sm"
                      rightIcon={<CircleIcon />}
                      style={styles.genererButton}
                      borderRadius="pill"
                      _text={{
                        color: '#0B3D91',
                      }}
                      onPress={() => navigation.navigate('GenererBail')}>
                      Générer un bail
                    </Button>
                    <Button
                      size="sm"
                      rightIcon={<CircleIcon />}
                      style={styles.planifierButton}
                      borderRadius="pill"
                      _text={{
                        color: '#FFF',
                      }}
                      onPress={() => navigation.navigate('PlanningVisite')}>
                      Planifier une visite
                    </Button>
                  </Row>
                </Column>
              </Box>
              <Box style={styles.candidatureCards} px={3} py={4}>
                <Column space={2}>
                  <Row justifyContent="space-between" space={3}>
                    <Image
                      size={60}
                      alt="Contact Image"
                      borderRadius={100}
                      style={{alignSelf: 'center'}}
                      source={require('../assets/images/contact.jpg')}
                    />
                    <Column>
                      <Text fontSize="sm" style={styles.textTown}>
                        Sophie Brady
                      </Text>
                      <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                        Directrice Marketing
                      </Text>
                      <Text fontSize="sm" style={styles.textPrice}>
                        100k€/an
                      </Text>
                    </Column>
                    <Text
                      mt={4}
                      style={{
                        textAlign: 'right',
                        fontSize: 15,
                        color: '#0B3D91',
                      }}
                      bold>
                      Ouvrir le dossier
                    </Text>
                  </Row>
                  <Row space={4} mt={3} justifyContent="center">
                    <Button
                      size="sm"
                      rightIcon={<CircleIcon />}
                      style={styles.genererButton}
                      borderRadius="pill"
                      _text={{
                        color: '#0B3D91',
                      }}
                      onPress={() => navigation.navigate('GenererBail')}>
                      Générer un bail
                    </Button>
                    <Button
                      size="sm"
                      rightIcon={<CircleIcon />}
                      style={styles.planifierButton}
                      borderRadius="pill"
                      _text={{
                        color: '#FFF',
                      }}
                      onPress={() => navigation.navigate('PlanningVisite')}>
                      Planifier une visite
                    </Button>
                  </Row>
                </Column>
              </Box>
            </Column>
            <Text
              mt={2}
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#0B3D91',
              }}
              bold>
              Afficher toutes les candidatures ({'12'})
            </Text>

            <Column space={4} my={5} ml={2} mr={2}>
              <Text mt={2} style={styles.descriptionTitle} bold>
                Partager ma propriété
              </Text>
              <Text style={styles.descriptionText}>
                Partagez ce lien pour demander à vos candidats de vous envoyer
                leur dossier via notre plateforme. Simple, sécurisé et rapide.
              </Text>
              <Button
                size="lg"
                style={styles.descriptionButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}>
                Copier le lien
              </Button>
            </Column>
            <Divider my={3} />
            <Column space={4} my={5} ml={2} mr={2}>
              <Text mt={2} style={styles.descriptionTitle} bold>
                Créer mon bail
              </Text>
              <Text style={styles.descriptionText}>
                Créer des contrats en un instant grâce à notre générateur et la
                télé-signature.
              </Text>
              <Button
                size="lg"
                style={styles.descriptionButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}>
                Créer un contrat
              </Button>
            </Column>

            <Divider my={3} />
            <Column space={4} my={5} ml={2} mr={2}>
              <Text mt={2} style={styles.descriptionTitle} bold>
                Créer mon état des lieux
              </Text>
              <Text style={styles.descriptionText}>
                Utilisez notre outil simple et performant afin de réduire la
                durée de cette tâche de plus de 50%.
              </Text>
              <Button
                size="lg"
                style={styles.descriptionButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}>
                Faire un état des lieux
              </Button>
            </Column>
          </Column>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default ProprietePro;
