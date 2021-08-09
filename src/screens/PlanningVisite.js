import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  ArrowBackIcon,
  Input,
  Center,
  View,
  ScrollView,
  FormControl,
} from 'native-base';
import ApollomessageIcon from '../assets/svg/ApollomessageIcon';
import style from '../styles/PlanningVisite';

function PlanningVisite({navigation}) {
  const styles = style();
  return (
    <Box flex={1} bg="#FFF">
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
            Planifier une visite
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column
          pt={8}
          mx={3}
          space={6}
          alignItems="center"
          justifyContent="center">
          <Image
            source={require('../assets/images/image_planningVisite.png')}
            alt="image base"
            size={180}
          />
          <Text fontSize="xl" style={{textAlign: 'center'}} bold>
            Plus qu’à quelques clics du locataire idéal !
          </Text>
          <Text fontSize="lg" style={{textAlign: 'center'}}>
            Prenez contact avec votre candidat afin de prendre rendez-vous.
          </Text>
          <Box mb={5} p={3} style={styles.contactBox} shadow={6}>
            <Text fontSize="lg" style={{textAlign: 'center'}}>
              Contacter mon candidat
            </Text>
            <Row space={10} justifyContent="space-between">
              <Column space={2}>
                <Text fontSize={14} mt={6}>
                  <Text fontSize={14} bold>
                    Nom du locataire :
                  </Text>{' '}
                  Marie PRIEUR
                </Text>
                <Text fontSize={14}>
                  <Text fontSize={14} bold>
                    Email :
                  </Text>{' '}
                  marie.prieur@gmail.com
                </Text>
                <Text fontSize={14}>
                  <Text fontSize={14} bold>
                    Tél. :
                  </Text>{' '}
                  06.26.73.95.64
                </Text>
              </Column>
              <Column>
                <Image
                  size={70}
                  mt={6}
                  alt="Contact Image"
                  borderRadius={100}
                  source={require('../assets/images/contact.jpg')}
                />
              </Column>
            </Row>
            <Center>
              <Button
                size="sm"
                style={styles.messageButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Message')}
                mt={6}
                endIcon={<ApollomessageIcon />}>
                Messagerie Apollo
              </Button>
            </Center>
          </Box>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default PlanningVisite;
