import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Image,
  Pressable,
  ArrowBackIcon,
  Input,
  View,
  ScrollView,
  SmallCloseIcon,
  Divider,
} from 'native-base';
import FiltreIcon from '../assets/svg/FiltreIcon';
import style from '../styles/ViewRecherche';

function ViewRecherche({navigation}) {

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
        <Row space={4} alignItems="center">
          <ArrowBackIcon onPress={() => navigation.goBack()}/>
        </Row>
        <Row space={6}>
          <View />
        </Row>
        <Input
          bg="#fff"
          placeholder="Où voulez-vous vivre ?"
          variant="filled"
          width="70%"
          size="sm"
          borderRadius={30}
          py={1}
          pl={5}
          autoFocus={true}
          InputRightElement={<SmallCloseIcon size={6} mr={6} />}
        />
        <Pressable onPress={() => navigation.navigate('Filtres')}>
          <FiltreIcon  />
        </Pressable>
      </Row>
      <ScrollView>
        <Column mt={4} ml={4} mr={4}>
          <Row space={3}>
            <Image
              style={styles.iconAdress}
              source={require('../assets/icons/localize.png')}
              alt="Localize"
            />
            <Text
              fontSize="md"
              onPress={() => navigation.navigate('ViewCarte')}>
              Strasbourg
            </Text>
          </Row>
          <Divider my={4} />
          <Row space={3}>
            <Image
              style={styles.iconAdress}
              source={require('../assets/icons/localize.png')}
              alt="Localize"
            />
            <Text
              fontSize="md"
              onPress={() => navigation.navigate('ViewCarte')}>
              Strasbourg
            </Text>
          </Row>
          
        </Column>
      </ScrollView>
    </Box>
  );
}

export default ViewRecherche;