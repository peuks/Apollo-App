import React from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Image,
  SearchIcon,
  SunIcon,
  View,
  Pressable,
} from 'native-base';
import FiltreIcon from '../assets/svg/FiltreIcon';
import ListIcon from '../assets/svg/ListIcon';
import style from '../styles/ViewCarte';

function ViewCarte({navigation}) {
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
          <View />
        </Row>
        <Row space={6}>
          <View />
        </Row>
        <Pressable
          style={styles.searchBar}
          onPress={() => navigation.navigate('ViewRecherche')}>
          <Row justifyContent="space-between" space={4} px={3} py={4} mx={8}>
            <SearchIcon size={4} mt={0.5} />
            <Text fontSize="sm">Où voulez-vous vivre ?</Text>
          </Row>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Filtres')}>
          <FiltreIcon  />
        </Pressable>
      </Row>
      <Column mt={1} space={5}>
        <Row alignItems="center" justifyContent="center" space={2}>
          <Pressable onPress={() => navigation.navigate('Recherche')}>
              <ListIcon />
          </Pressable>
          <Text
            bold
            fontSize="sm"
            onPress={() => navigation.navigate('Recherche')}>
            Affichage vue liste
          </Text>
        </Row>
        <Box alignItems="center" justifyContent="center" style={styles.cards}>
          <Image
            source={require('../assets/images/Map.jpg')}
            alt="image base"
            width={400}
            height={590}
          />
        </Box>
      </Column>
    </Box>
  );
}

export default ViewCarte;
