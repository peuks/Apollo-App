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
  ArrowBackIcon,
  Input,
  Stack,
  View,
  ScrollView,
  Pressable,
  Modal,
  Center,
  CircleIcon,
  SmallCloseIcon,
  Divider
} from 'native-base';

function ViewRecherche({navigation}) {
  const [showModal, setShowModal] = useState(false);
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
          shadow={8}
          style={styles.searchBar}
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
        <SunIcon onPress={() => navigation.navigate('Filtres')}/>
      </Row>
      <ScrollView>
        <Column mt={4} ml={4} mr={4}>
          <Row space={3}>
            <Image
              style={{width: 20, height: 20}}
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
              style={{width: 20, height: 20}}
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

const styles = StyleSheet.create({
  container: {},
  searchBar: {
  },
  textAdress: {
    color: '#3F3D56',
  },
  IconsText: {
    color: '#3F3D56',
    textAlign: 'center',
  },
});

export default ViewRecherche;
