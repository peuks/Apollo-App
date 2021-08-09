import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Icon,
  Image,
  SunIcon,
  ScrollView,
  Pressable,
  Center,
  View,
  CircleIcon,
  Divider,
} from 'native-base';
import NewMessageIcon from '../assets/svg/NewMessageIcon';
import style from '../styles/MessagePro';

function MessagePro({navigation}) {
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
            <View />
          </Column>
        </Row>
        <Row space={2}>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            Mes messages
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column mt={6} mx={4}>
          <Pressable
            style={styles.cardMessage}
            shadow={6}
            onPress={() => navigation.navigate('MessageProContent')}>
            <Row justifyContent="space-between">
              <Image
                size={66}
                alt="Contact Image"
                borderRadius={100}
                style={{alignSelf: 'center'}}
                source={require('../assets/images/contact.jpg')}
              />
              <Column  space={1}>
                <Row justifyContent="space-between">
                  <Text fontSize="md" style={styles.textName}>
                    Sophie
                  </Text>
                  <Text fontSize="md" style={styles.textDate}>
                    28 mai 2021
                  </Text>
                </Row>
                <Row justifyContent="space-between" space={2}>
                  <Text fontSize="md" style={styles.textMessage} bold>
                    Bonjour, Merci pour votre répons...
                  </Text>
                  <NewMessageIcon color="#0B3D91"/>
                </Row>

                <Text fontSize="md" style={styles.textAdress} italic>
                  Strasbourg, Place de la république
                </Text>
              </Column>
            </Row>
          </Pressable>
          <Divider my={6}/>
          <Pressable
            style={styles.cardMessage}
            shadow={6}
            onPress={() => navigation.navigate('MessageProContent')}>
            <Row justifyContent="space-between">
              <Image
                size={66}
                alt="Contact Image"
                borderRadius={100}
                style={{alignSelf: 'center'}}
                source={require('../assets/images/contact.jpg')}
              />
              <Column  space={1}>
                <Row justifyContent="space-between">
                  <Text fontSize="md" style={styles.textName}>
                    Tom
                  </Text>
                  <Text fontSize="md" style={styles.textDate}>
                    22 mai 2021
                  </Text>
                </Row>
                <Row justifyContent="space-between" space={2}>
                  <Text fontSize="md" style={styles.textMessage} >
                    Bonjour, Merci pour votre réponse...
                  </Text>
                  <NewMessageIcon/>
                </Row>

                <Text fontSize="md" style={styles.textAdress} italic>
                  Strasbourg, Place de la république
                </Text>
              </Column>
            </Row>
          </Pressable>
          <Divider my={6}/>
          <Pressable
            style={styles.cardMessage}
            shadow={6}
            onPress={() => navigation.navigate('MessageProContent')}>
            <Row justifyContent="space-between">
              <Image
                size={66}
                alt="Contact Image"
                borderRadius={100}
                style={{alignSelf: 'center'}}
                source={require('../assets/images/contact.jpg')}
              />
              <Column  space={1}>
                <Row justifyContent="space-between">
                  <Text fontSize="md" style={styles.textName}>
                   Benoît
                  </Text>
                  <Text fontSize="md" style={styles.textDate}>
                    11 mai 2021
                  </Text>
                </Row>
                <Row justifyContent="space-between" space={2}>
                  <Text fontSize="md" style={styles.textMessage} >
                    Bonjour, Merci pour votre réponse...
                  </Text>
                  <NewMessageIcon/>
                </Row>

                <Text fontSize="md" style={styles.textAdress} italic>
                  Strasbourg, Place de la république
                </Text>
              </Column>
            </Row>
          </Pressable>
          <Divider my={6}/>
          <Pressable
            style={styles.cardMessage}
            shadow={6}
            onPress={() => navigation.navigate('MessageProContent')}>
            <Row justifyContent="space-between">
              <Image
                size={66}
                alt="Contact Image"
                borderRadius={100}
                style={{alignSelf: 'center'}}
                source={require('../assets/images/contact.jpg')}
              />
              <Column  space={1}>
                <Row justifyContent="space-between">
                  <Text fontSize="md" style={styles.textName}>
                    Raph
                  </Text>
                  <Text fontSize="md" style={styles.textDate}>
                    12 avril 2021
                  </Text>
                </Row>
                <Row justifyContent="space-between" space={2}>
                  <Text fontSize="md" style={styles.textMessage} >
                    Bonjour, Merci pour votre réponse...
                  </Text>
                  <NewMessageIcon/>
                </Row>

                <Text fontSize="md" style={styles.textAdress} italic>
                  Strasbourg, Place de la république
                </Text>
              </Column>
            </Row>
          </Pressable>
        </Column>
      </ScrollView>
    </Box>
  );
}



export default MessagePro;
