import React from 'react';
import {
  NativeBaseProvider,
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  FormControl,
  Input,
  Link,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';
import style from '../styles/Password_forgot';

function PasswordForgot() {
  const styles = style();
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
          <Text color="#3F3D56" fontSize="md">
            Mot de passe oublié
          </Text>
        </Column>
      </Box>
      <Box flex={3} bg="#0B3D91" alignItems="center" justifyContent="center">
        <Column space={7} alignItems="center" ml={6} mr={6}>
         <Text color="#FFF" fontSize="md" style={styles.passwordText} mt={-10}>
            Merci de nous renseigner votre adresse email ci-desous.
          </Text>
          <Text color="#fff" fontSize="md" style={styles.passwordText}>
            Nous vous enverrons un email pour réinitialiser votre mot de passe.
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#FFF', fontSize: 'md'}}>
              Adresse email*
            </FormControl.Label>
            <Input size="xs" style={styles.input}/>
          </FormControl>

          <Row>
            <Button
              style={styles.loginButton}
              borderRadius="pill"
              _text={{
                color: '#0B3D91',
                fontWeight: 'bold',
              }}
              mt={9}>
              Valider
            </Button>
          </Row>
        </Column>
      </Box>
    </NativeBaseProvider>
  );
}


export default PasswordForgot;
