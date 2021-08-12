import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  ArrowBackIcon,
  Input,
  View,
  ScrollView,
  Pressable,
  Center,
  FormControl,
} from 'native-base';
import SurfaceSmIcon from '../assets/svg/SurfaceSmIcon';
import MeubleSmIcon from '../assets/svg/MeubleSmIcon';
import ChambreSmIcon from '../assets/svg/ChambreSmIcon';
import style from '../styles/MessageProContent';

function MessageProContent({navigation}) {
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
          <ArrowBackIcon
            size="md"
            color="#3F3D56"
            onPress={() => navigation.goBack()}
          />
        </Row>
        <Row space={2}>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            {'Sophie'}
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column mt={4} mx={4} space={2}>
          <Row mb={2} space={2} justifyContent="space-between">
            <Image
              size={45}
              alt="Contact Image"
              borderRadius={100}
              source={require('../assets/images/contact.jpg')}
            />
            <Column space={1}>
              <Text fontSize="sm" style={styles.textName} bold>
                Sophie
              </Text>
              <Text fontSize="sm" noOfLines={2}>
                Bonjour, je suis très intéressé par votre{'\n'}appartement :
              </Text>
            </Column>

            <Column>
              <Text fontSize="sm" style={{color: '#7D7D8B'}}>
                14h
              </Text>
            </Column>
          </Row>
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
                height={149}
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
                <View />
              </Column>
            </Row>
          </Pressable>
          <Pressable
            alignItems="center"
            justifyContent="center"
            mb={5}
            py={4}
            style={styles.cards}>
            <Column space={3}>
              <Text
                fontSize="sm"
                style={{
                  fontWeight: 'bold',
                  color: '#3F3D56',
                  textAlign: 'center',
                }}>
                Demande de visite
              </Text>
              <Text fontSize="lg" style={styles.textDate} noOfLines={2}>
                14/06/2021 à 10h
              </Text>
              <Row space={2} my={3}>
                <Button
                  size="sm"
                  style={styles.refuserButton}
                  borderRadius="pill"
                  _text={{
                    color: '#F53A3A',
                  }}>
                  Refuser
                </Button>
                <Button
                  size="sm"
                  style={styles.accepterButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}>
                  Accepter
                </Button>
              </Row>
            </Column>
          </Pressable>
        </Column>
      </ScrollView>
      <Input
        mx={4}
        bg="#fff"
        mb={1}
        style={styles.input}
        placeholder="Écrire un message"
        variant="filled"
        borderRadius={30}
        _light={{
          placeholderTextColor: '#7D7D8B',
        }}
      />
    </Box>
  );
}

export default MessageProContent;
