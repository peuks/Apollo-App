import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  View,
  ScrollView,
  Pressable,
  Modal,
  Center,
} from 'native-base';
import SurfaceSmIcon from '../assets/svg/SurfaceSmIcon';
import MeubleSmIcon from '../assets/svg/MeubleSmIcon';
import ChambreSmIcon from '../assets/svg/ChambreSmIcon';
import SwitchIcon from '../assets/svg/SwitchIcon';
import CompteIcon from '../assets/svg/CompteIcon';
import style from '../styles/Espace';

function Espace({navigation}) {
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
            <Pressable onPress={() => navigation.navigate('Compte')}>
              <CompteIcon/>
            </Pressable>
            <Text
              color="#3F3D56"
              fontSize={10}
              fontWeight="bold"
              onPress={() => navigation.navigate('Compte')}>
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
          <Column alignItems="center">
            <Pressable onPress={() => navigation.navigate('ViewPro')}>
              <SwitchIcon/>
            </Pressable>
            <Text
              color="#3F3D56"
              fontSize={10}
              fontWeight="bold"
              onPress={() => navigation.navigate('ViewPro')}>
              Mode propriétaire
            </Text>
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column mx={4}>
          <Row
            alignItems="center"
            justifyContent="space-between"
            my={5}
            space={3}>
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
                    <Box alignItems="center">
                      <SurfaceSmIcon color="#3F3D56"/>
                    </Box>
                    <Text fontSize="xs" style={styles.IconsText}>
                      120 m2
                    </Text>
                  </Column>
                  <Column>
                    <Box alignItems="center">
                      <MeubleSmIcon color="#3F3D56"/>
                    </Box>
                    <Text fontSize="xs" style={styles.IconsText}>
                      Meublé
                    </Text>
                  </Column>
                  <Column>
                    <Box alignItems="center">
                      <ChambreSmIcon color="#3F3D56"/>
                    </Box>
                    <Text fontSize="xs" style={styles.IconsText}>
                      3 ch.
                    </Text>
                  </Column>
                </Row>
              </Column>

              <Column space={3} alignSelf="flex-end">
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
                <Text fontSize="sm" style={styles.textAdress} noOfLines={2}>
                  Place de la République
                </Text>
                <Text fontSize="sm" style={styles.textPrice}>
                  1400€
                </Text>
                <Row space={5} mt={5}>
                  <Column>
                    <Box alignItems="center">
                      <SurfaceSmIcon color="#3F3D56"/>
                    </Box>
                    <Text fontSize="xs" style={styles.IconsText}>
                      120 m2
                    </Text>
                  </Column>
                  <Column>
                    <Box alignItems="center">
                      <MeubleSmIcon color="#3F3D56"/>
                    </Box>
                    <Text fontSize="xs" style={styles.IconsText}>
                      Meublé
                    </Text>
                  </Column>
                  <Column>
                    <Box alignItems="center">
                      <ChambreSmIcon color="#3F3D56"/>
                    </Box>
                    <Text fontSize="xs" style={styles.IconsText}>
                      3 ch.
                    </Text>
                  </Column>
                </Row>
              </Column>

              <Column space={3} alignSelf="flex-end">
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

export default Espace;
