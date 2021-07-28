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
  CircleIcon,
  Checkbox,
  Switch,
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
          <Column alignItems="center">
            <SunIcon
              size="md"
              color="#3F3D56"
              onPress={() => navigation.navigate('Compte')}
            />
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
            <SunIcon
              size="md"
              color="#3F3D56"
              onPress={() => navigation.navigate('ViewLoc')}
            />
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
              shadow={6}>
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

          {/* <Checkbox value="cgu" style={{fontSize:5,textAlign:'left',}}>
            Afficher également les propriétés hors ligne
          </Checkbox>
          */}

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
                  <SunIcon size="sm" />
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
              style={{backgroundColor:"#0B3D91",opacity:0.5}}
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
              m={[4 , 4, 30]}
              style={{color: '#fff', backgroundColor: '#0B3D91',transform: [{ rotate: "-45deg" }]}}>
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
                <Row justifyContent="space-between" space={4}>
                  <Row alignItems="flex-start">
                    <Switch size="lg" mt={-0.5} colorScheme="emerald" />
                    <Text fontSize="sm" ml={-2}>
                      Hors ligne
                    </Text>
                  </Row>
                  <SunIcon size="sm" />
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
    height: 105,
    width: 175,
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
  editerButton: {
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
