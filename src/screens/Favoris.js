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

function Favoris({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box flex={1} bg="#FAFAFA">
      <Row
        px={1}
        py={3}
        justifyContent="space-between"
        alignItems="center"
        ml={2}
        mr={2}
        mt={2}>
        <Row space={2} alignItems="center">
          <View />
        </Row>
        <Row space={2}>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            Mes favoris
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column mt={4} mx={4}>
          <Pressable
            mb={5}
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('Propriete')}>
            <Row justifyContent="space-between">
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={160}
                height={145}
                style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
                onPress={() => navigation.navigate('Propriete')}
              />
              <Column>
                <Row space={5}  >
                  <Column p={2}>
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
                      <Column  alignItems="center" justifyContent="center">
                        <SunIcon size="sm"/>
                        <Text fontSize="xs" style={styles.IconsText}>
                          120 m2
                        </Text>
                      </Column>
                      <Column  alignItems="center" justifyContent="center">
                        <SunIcon size="sm"/>
                        <Text fontSize="xs" style={styles.IconsText}>
                          Meublé
                        </Text>
                      </Column>
                      <Column alignItems="center" justifyContent="center">
                        <SunIcon size="sm"/>
                        <Text fontSize="xs" style={styles.IconsText}>
                          3 ch.
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column pr={2} pt={2} justifyContent="flex-start">
                <SunIcon size="sm" style={{color:'red'}}/>
              </Column>
            </Row>
          </Pressable>
          <Pressable
            mb={5}
            style={styles.cards}
            onPress={() => navigation.navigate('Propriete')}>
            <Row justifyContent="space-between">
              <Image
                source={require('../assets/images/appart1.jpeg')}
                alt="image bas"
                width={160}
                height={145}
                style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
                onPress={() => navigation.navigate('Propriete')}
              />
              <Column>
                <Row space={5}  >
                  <Column p={2}>
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
                      <Column  alignItems="center" justifyContent="center">
                        <SunIcon size="sm"/>
                        <Text fontSize="xs" style={styles.IconsText}>
                          120 m2
                        </Text>
                      </Column>
                      <Column  alignItems="center" justifyContent="center">
                        <SunIcon size="sm"/>
                        <Text fontSize="xs" style={styles.IconsText}>
                          Meublé
                        </Text>
                      </Column>
                      <Column alignItems="center" justifyContent="center">
                        <SunIcon size="sm"/>
                        <Text fontSize="xs" style={styles.IconsText}>
                          3 ch.
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column pr={2} pt={2} justifyContent="flex-start">
                <SunIcon size="sm" style={{color:'red'}}/>
              </Column>
            </Row>
          </Pressable>
          <Pressable
            mb={5}
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('Propriete')}>
            <Row justifyContent="space-between">
              <Image
                source={require('../assets/images/propriétaire21.png')}
                alt="image base"
                width={160}
                height={145}
                style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
                onPress={() => navigation.navigate('Propriete')}
              />
              <Column>
                <Row space={5}  >
                  <Column p={2}>
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
                      <Column  alignItems="center" justifyContent="center">
                        <SunIcon size="sm"/>
                        <Text fontSize="xs" style={styles.IconsText}>
                          120 m2
                        </Text>
                      </Column>
                      <Column  alignItems="center" justifyContent="center">
                        <SunIcon size="sm"/>
                        <Text fontSize="xs" style={styles.IconsText}>
                          Meublé
                        </Text>
                      </Column>
                      <Column alignItems="center" justifyContent="center">
                        <SunIcon size="sm" />
                        <Text fontSize="xs" style={styles.IconsText}>
                          3 ch.
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column pr={2} pt={2} justifyContent="flex-start">
                <SunIcon size="sm" style={{color:'red'}} />
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
  cards: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
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
  IconsText: {
    color: '#3F3D56',
    textAlign: 'center',
  },
});

export default Favoris;
