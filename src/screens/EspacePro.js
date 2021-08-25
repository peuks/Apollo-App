import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  ScrollView,
  Pressable,
  Switch,
  Checkbox,
} from 'native-base';
import SurfaceSmIcon from '../assets/svg/SurfaceSmIcon';
import MeubleSmIcon from '../assets/svg/MeubleSmIcon';
import ChambreSmIcon from '../assets/svg/ChambreSmIcon';
import AlarmIcon from '../assets/svg/AlarmIcon';
import SwitchIcon from '../assets/svg/SwitchIcon';
import CompteIcon from '../assets/svg/CompteIcon';
import style from '../styles/EspacePro';

function EspacePro({navigation}) {
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
              <CompteIcon />
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
            Mon dashboard
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <Pressable onPress={() => navigation.navigate('ViewLoc')}>
              <SwitchIcon />
            </Pressable>
            <Text color="#3F3D56" fontSize={10} fontWeight="bold">
              Mode locataire
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
              <Column alignItems="center" justifyContent="center">
                <Text fontSize="4xl" style={styles.textTown}>
                  2
                </Text>
                <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                  propriétés en ligne
                </Text>
              </Column>
            </Pressable>
            <Pressable
              alignItems="center"
              justifyContent="center"
              style={styles.cardStatistics}
              shadow={6}
              onPress={() => navigation.navigate('ListeCandidaturePro')}>
              <Column alignItems="center" justifyContent="center">
                <Text fontSize="4xl" style={styles.textTown}>
                  8
                </Text>
                <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                  candidatures
                </Text>
              </Column>
            </Pressable>
          </Row>
          <Text style={styles.textTown} fontSize={20} my={5}>
            Mes propriétés
          </Text>
          <Row space={1} mb={5} mt={-2}>
            <Checkbox
              value="showOffLine"
              accessibilityLabel="Show offline properties"
            />
            <Text style={{color: '#3F3D56'}} fontSize="sm">
              Afficher également les propriétés hors ligne
            </Text>
          </Row>
          <Pressable
            mb={5}
            alignItems="center"
            justifyContent="center"
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('ProprietePro')}>
            <Image
              source={require('../assets/images/appart2.jpg')}
              alt="image base"
              width={401}
              height={155}
              roundedTop="lg"
              onPress={() => navigation.navigate('ProprietePro')}
            />
            <Row space={8} justifyContent="space-between" px={1} my={5}>
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

              <Column space={3}>
                <Row justifyContent="space-between" space={4}>
                  <Row alignItems="flex-start">
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
                  <AlarmIcon />
                </Row>
                <Button
                  size="sm"
                  style={styles.detailsButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}
                  onPress={() => navigation.navigate('ProprietePro')}>
                  Détails
                </Button>
                <Button
                  size="sm"
                  style={styles.editerButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}>
                  Editer
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
            onPress={() => navigation.navigate('ProprieteProLouee')}>
            <Image
              source={require('../assets/images/appart2.jpg')}
              alt="image base"
              width={401}
              height={155}
              roundedTop="lg"
              style={{backgroundColor: '#0B3D91', opacity: 0.5}}
              onPress={() => navigation.navigate('ProprieteProLouee')}
            />
            <Text
              fontSize="sm"
              bold
              position="absolute"
              left={0}
              top={0}
              py={1}
              px={8}
              m={[4, 4, 30]}
              style={{color: '#fff', backgroundColor: '#0B3D91'}}>
              LOUÉ
            </Text>
            <Row space={8} justifyContent="space-between" px={1} my={5}>
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

              <Column space={3}>
                <Row justifyContent="space-between" space={4}>
                  <Row alignItems="flex-start">
                    <Switch size="lg" mt={-0.5} colorScheme="emerald" />
                    <Text fontSize="sm" ml={-2}>
                      Hors ligne
                    </Text>
                  </Row>
                  <AlarmIcon />
                </Row>
                <Button
                  size="sm"
                  style={styles.detailsButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}
                  onPress={() => navigation.navigate('ProprieteProLouee')}>
                  Détails
                </Button>
                <Button
                  size="sm"
                  style={styles.editerButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}>
                  Editer
                </Button>
              </Column>
            </Row>
          </Pressable>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default EspacePro;
