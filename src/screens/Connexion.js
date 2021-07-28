import React from 'react';
import {StyleSheet} from 'react-native';
import {
  NativeBaseProvider,
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';

function Connexion({navigation}) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff">
        <Column
          alignItems="center"
          ml={8}
          mr={8}
          justifyContent="center"
          space={5}>
          <Image
            source={require('../assets/images/login_header.jpg')}
            alt="Alternate Text"
            size={'lg'}
            style={styles.image}
          />
          <Text color="#3F3D56" fontSize="md" style={styles.bienvenu}>
            Bienvenue chez Apollo, simplifiez vous dès maintenant la location.
          </Text>
        </Column>
      </Box>
      <Box flex={3} bg="#0B3D91" alignItems="center" justifyContent="center">
        <Column space={6} alignItems="center" mx="auto">
          <Column space={3}>
            <FormControl>
              <FormControl.Label _text={{color: '#FFF', fontSize: 'md'}}>
                Adresse email*
              </FormControl.Label>
              <Input size="xs" style={styles.input}/>
            </FormControl>

            <FormControl mb={5}>
              <FormControl.Label _text={{color: '#FFF', fontSize: 'md'}}>
                Mot de passe*
              </FormControl.Label>
              <Input type="password" size="xs" style={styles.input}/>
            </FormControl>
          </Column>

          <Text
            color="#FFF"
            fontSize="md"
            bold
            onPress={() => navigation.navigate('PasswordForgot')}>
            Mot de passe oublié ?
          </Text>
          <Text color="#fff" fontSize="md" bold underline>
            Vous n'avez pas de compte ? Créer un compte !
          </Text>

          <Row>
            <Button
              style={styles.loginButton}
              borderRadius="pill"
              _text={{
                color: '#0B3D91',
                fontWeight: 'bold',
              }}
              mt={9}>
              Se connecter
            </Button>
          </Row>
        </Column>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  bienvenu: {
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  loginButton: {
    width: 220,
    backgroundColor: '#FFF',
  },
  input:{
    width:330,
  },
  image:{
    width: 230,
    height: 70,
    marginTop: 15,
  },
});

export default Connexion;
