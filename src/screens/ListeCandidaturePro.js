import React, {useState} from 'react';
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
  View,
  Pressable,
  CircleIcon,
} from 'native-base';
import CloseIcon from '../assets/svg/CloseIcon';
import style from '../styles/ListeCandidaturePro';

function ListeCandidaturePro({navigation}) {
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
            Liste des candidatures
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
          <Column space={4} my={5} ml={2} mr={2}>
            <Text
              mt={2}
              style={{
                textAlign: 'left',
                fontSize: 23,
              }}
              bold>
              4 quai des pêcheurs, 67000
            </Text>
            <Box style={styles.candidatureCards} px={3} py={4}>
              <Pressable position="absolute" right={0} top={0} mr={-1} mt={-2} >
                <CloseIcon/>
              </Pressable>
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
              <Pressable position="absolute" right={0} top={0} mr={-1} mt={-2} >
                <CloseIcon />
              </Pressable>
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
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: '#0B3D91',
            }}
            bold>
            Afficher toutes les candidatures ({'3'})
          </Text>

          <Column space={4} mt={5} ml={2} mr={2}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 23,
              }}
              bold>
              36 place de la République
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
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: '#0B3D91',
            }}
            bold>
            Afficher toutes les candidatures ({'4'})
          </Text>
          <View mt={10} />
        </Column>
      </ScrollView>
    </Box>
  );
}

export default ListeCandidaturePro;
