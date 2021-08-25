import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Image,
  SunIcon,
  View,
  ScrollView,
  Pressable,
} from 'native-base';
import SurfaceSmIcon from '../assets/svg/SurfaceSmIcon';
import MeubleSmIcon from '../assets/svg/MeubleSmIcon';
import ChambreSmIcon from '../assets/svg/ChambreSmIcon';
import FavredIcon from '../assets/svg/FavredIcon';
import style from '../styles/Favoris';

function Favoris({navigation}) {
  const styles = style();

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
        <Column my={4} mx={4} space={5}>
          <Pressable
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('Propriete')}>
            <Row justifyContent="space-between">
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={160}
                height={150}
                style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
                onPress={() => navigation.navigate('Propriete')}
              />
              <Column>
                <Row space={5}>
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
                </Row>
              </Column>
              <Column pr={2} pt={2} justifyContent="flex-start">
                <FavredIcon />
              </Column>
            </Row>
          </Pressable>
          <Pressable
            style={styles.cards}
            onPress={() => navigation.navigate('Propriete')}>
            <Row justifyContent="space-between">
              <Image
                source={require('../assets/images/img-appart4.png')}
                alt="image bas"
                width={160}
                height={150}
                style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
                onPress={() => navigation.navigate('Propriete')}
              />
              <Column>
                <Row space={5}>
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
                </Row>
              </Column>
              <Column pr={2} pt={2} justifyContent="flex-start">
                <FavredIcon />
              </Column>
            </Row>
          </Pressable>
          <Pressable
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('Propriete')}>
            <Row justifyContent="space-between">
              <Image
                source={require('../assets/images/img-appart5.png')}
                alt="image base"
                width={160}
                height={150}
                style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
                onPress={() => navigation.navigate('Propriete')}
              />
              <Column>
                <Row space={5}>
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
                </Row>
              </Column>
              <Column pr={2} pt={2} justifyContent="flex-start">
                <FavredIcon />
              </Column>
            </Row>
          </Pressable>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default Favoris;
