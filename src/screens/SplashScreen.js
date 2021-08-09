import 'react-native-gesture-handler';
import React from 'react';
import {
  NativeBaseProvider,
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
} from 'native-base';
import style from '../styles/SplashScreen';

function SplashScreen({navigation}) {
  const styles = style();

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#0B3D91" alignItems="center" justifyContent="center">
        {/*<Icon viewBox="0 0 1000 1003" style={styles.appoloIcon}>
          <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
            <Path
              d="M36.4702 26.4193L32.3436 23.1079L23.4787 16L14.6137 23.1079L10.4871 26.4193L0 34.8118H6.9013L10.7148 31.7574C10.8002 32.471 10.8998 33.1989 11.0279 33.9126C11.5259 36.7101 12.3227 39.4362 13.4326 42.0624L15.9086 48H15.937C17.3173 47.4434 20.1916 47.058 23.5071 47.058C26.8226 47.058 29.6969 47.4434 31.0772 48H31.1057L33.5816 42.0624C34.6773 39.4505 35.4883 36.7101 35.9864 33.9126C36.1144 33.1989 36.2141 32.471 36.2994 31.7574L40.1129 34.8118H47L36.4702 26.4193ZM32.5428 31.2007C32.1871 34.4407 31.3618 37.6236 30.0954 40.6209L28.587 44.2462H18.3987L16.8904 40.6209C15.624 37.6236 14.7987 34.4407 14.4429 31.2007C14.3576 30.4442 14.3006 29.6735 14.2864 28.917L23.5071 21.5379L32.7278 28.917C32.6851 29.6592 32.6282 30.43 32.5428 31.2007Z"
              fill="#FFF"
            />
            <Path
              d="M435 .1C194.8.1.1 194.8.1 435c0 187.3 118.4 346.9 284.4 408.1 3.3-29.9 15-57.2 32.7-79.6 12.1-15.4 26.9-28.5 43.9-38.4 2.1-5 4.6-10.6 7.1-16.6-50.3-26-84.7-78.1-84.7-138.6 0-51.7 25.3-97.7 64-125.9-10.9-20.6-21.3-40.2-31.8-58.2-18.1-31.5-46.7-59.7-68.4-78.9-21 11.9-47.8 4.7-59.7-16.3-11.9-21-4.7-47.8 16.3-59.7 21-11.9 47.4-4.7 59.7 15.9v.4c7.2 12.7 7.2 27.5 1.8 39.8 22.8 19.5 56.8 52.5 77.8 89 9.8 17 19.5 34.7 29.3 53.5 20.3-9.4 42.7-14.8 66.2-14.8 21.3 0 41.6 4.3 60.1 11.9 9.8-18.5 19.5-36.2 28.9-52.8 21-36.2 54.6-68.7 77.4-88.3-5.4-12.3-5.4-26.8 1.8-39.4v-.4c12.3-20.6 38.7-27.9 59.3-15.9 21 11.9 28.2 38.7 16.3 59.3-11.9 21-38.4 28.2-59.3 16.3-21.7 18.8-49.9 47.4-68 78.5-10.1 17.4-20.3 36.5-30.8 56.4 42 27.9 69.8 75.3 69.8 129.5 0 63-36.9 116.9-90.4 141.5.9 2.7 2 4.9 3 7.2 47 22.3 81.1 67.4 87.9 121.1C755.9 776 869.9 618.8 869.9 435 869.9 194.8 675.2.1 435 .1z"
              fill="#FFF"
            />
            <Path
              d="M185 28.5C185 24.2203 188.017 21 192.5 21C196.954 21 200 24.2203 200 28.5C200 32.7797 196.968 36 192.5 36C188.003 36.0139 185 32.7936 185 28.5ZM198.042 28.5C198.042 25.1124 195.866 22.6032 192.5 22.6032C189.105 22.6032 186.958 25.0985 186.958 28.5C186.958 31.8736 189.105 34.3968 192.5 34.3968C195.866 34.3968 198.042 31.8736 198.042 28.5Z"
              fill="#FFF"
            />
          </G>
        </Icon>*/}
        <Column space={6} alignItems="center" ml={6} mr={6}>
          <Image
            source={require('../assets/images/welcome.jpg')}
            style={styles.apolloImage}
            alt="Apollo immo image"
          />
          <Column alignItems="center" ml={6} mr={6} justifyContent="center">
            <Text color="#FFF" fontSize="xl">
              Bienvenue chez Apollo,
            </Text>
            <Text color="#FFF" fontSize="xl">
              simplifiez vous dès maintenant la
            </Text>
            <Text color="#FFF" fontSize="xl">
              location.
            </Text>
          </Column>

          <Text color="#fff" fontSize="xl">
            Vous êtes ...
          </Text>

          <Row>
            <Button.Group
              variant="outline"
              isAttached
              size="md"
              colorScheme="light">
              <Button
                style={styles.button}
                borderRadius="pill"
                _text={{
                  color: 'white',
                }}
                mr={5}
                onPress={() => navigation.navigate('ViewPro')}>
                Propriétaire
              </Button>
              <Button
                style={styles.button}
                borderRadius="pill"
                _text={{
                  color: 'white',
                }}
                onPress={() => navigation.navigate('ViewLoc')}>
                Locataire
              </Button>
            </Button.Group>
          </Row>
        </Column>
      </Box>
    </NativeBaseProvider>
  );
}

export default SplashScreen;