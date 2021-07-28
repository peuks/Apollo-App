import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Carousel from 'pinar';
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
  Input,
  Stack,
  View,
  ScrollView,
  Pressable,
  Modal,
  Center,
  CircleIcon,
} from 'native-base';

//Modal of contact button
function modalContacter() {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.Header>
          <Text style={styles.modalHeader} bold>
            Contactez le propriétaire dès à présent
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Center>
            <Image
              size={120}
              alt="Contact Image"
              borderRadius={100}
              source={require('../assets/images/contact.jpg')}
            />
            <Text style={styles.modalText} bold mt={6}>
              Adresse de la propriété
            </Text>
            <Text style={styles.modalText}>32, Rue des Champs 75000 Paris</Text>
            <Text style={styles.modalText}>
              <Text style={styles.modalText} bold>
                Loyer :
              </Text>{' '}
              550€ CC
            </Text>
            <Text style={styles.modalText} mt={6}>
              <Text style={styles.modalText} bold>
                Nom du propriétaire :
              </Text>{' '}
              Marie PRIEUR
            </Text>
            <Text style={styles.modalText}>
              <Text style={styles.modalText} bold>
                Email :
              </Text>{' '}
              marie.prieur@gmail.com
            </Text>
            <Text style={styles.modalText}>
              <Text style={styles.modalText} bold>
                Tel :
              </Text>{' '}
              06.26.73.95.64
            </Text>
            <Button
              size="sm"
              rightIcon={<CircleIcon />}
              style={styles.candidaterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}
              onPress={() => navigation.navigate('Propriete')}
              mt={6}>
              Messagerie Apollo
            </Button>
          </Center>
        </Modal.Body>
        <Modal.Footer />
      </Modal.Content>
    </Modal>
  );
}

function Search({navigation}) {
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
          <View />
        </Row>
        <Row space={6}>
          <View />
        </Row>
        <Pressable
            style={{
                elevation:2,
                backgroundColor:"#fff",
                borderRadius:30,
                borderWidth: 1,
                borderColor: '#fff',
            }}
            onPress={() => navigation.navigate('ViewRecherche')}
            >
          <Row justifyContent="space-between" space={4} px={3} py={4} mx={8}>
            <SearchIcon size={4} mt={0.5}/>
            <Text fontSize="sm">
              Où voulez-vous vivre ?
            </Text>
          </Row>
        </Pressable>

        <SunIcon onPress={() => navigation.navigate('Filtres')} />
      </Row>

      <ScrollView>
        <Column mt={2} mx={4}>
          <Row alignItems="center" justifyContent="center" mb={5}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/icons/localize.png')}
              alt="Localize"
            />
            <Text
              style={styles.cartText}
              fontSize="sm"
              onPress={() => navigation.navigate('ViewCarte')}>
              Affichage vue Carte
            </Text>
          </Row>
          <Pressable
            mb={5}
            alignItems="center"
            justifyContent="center"
            style={styles.cards}
            shadow={6}>
            <Carousel height={190} showsDots={false} showsControls={false}>
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={401}
                height={190}
                roundedTop="lg"
              />
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={401}
                height={190}
              />
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={401}
                height={190}
                roundedTop="lg"
              />
            </Carousel>
            <Text
              bold
              position="absolute"
              color="white"
              right={0}
              top={0}
              m={[8, 4, 30]}>
              FAV
            </Text>
            <Row space={5} pl={1} pr={1} mt={5} mb={5}>
              <Column>
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
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      120 m2
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      Meublé
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      3 ch.
                    </Text>
                  </Column>
                </Row>
              </Column>

              <Column space={3} pt={6}>
                <Button
                  size="sm"
                  style={styles.candidaterButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}
                  onPress={() => navigation.navigate('Propriete')}>
                  Candidater
                </Button>
                <Button
                  size="sm"
                  style={styles.contactButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}
                  onPress={() => setShowModal(true)}>
                  Contacter
                </Button>
              </Column>
            </Row>
          </Pressable>
          <Pressable
            mb={5}
            alignItems="center"
            justifyContent="center"
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('Propriete')}>
            <Carousel height={190} showsDots={false} showsControls={false}>
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={401}
                height={190}
                roundedTop="lg"
              />
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={401}
                height={190}
              />
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={401}
                height={190}
                roundedTop="lg"
              />
            </Carousel>
            <Text
              bold
              position="absolute"
              color="white"
              right={0}
              top={0}
              m={[8, 4, 30]}>
              FAV
            </Text>
            <Row space={5} pl={1} pr={1} mt={5} mb={5}>
              <Column>
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
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      120 m2
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      Meublé
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      3 ch.
                    </Text>
                  </Column>
                </Row>
              </Column>

              <Column space={3} pt={6}>
                <Button
                  size="sm"
                  style={styles.candidaterButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}
                  onPress={() => navigation.navigate('Propriete')}>
                  Candidater
                </Button>
                <Button
                  size="sm"
                  style={styles.contactButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}
                  onPress={() => setShowModal(true)}>
                  Contacter
                </Button>
              </Column>
            </Row>
          </Pressable>
          <Pressable
            mb={5}
            alignItems="center"
            justifyContent="center"
            style={styles.cards}
            shadow={6}
            onPress={() => navigation.navigate('Propriete')}>
            <Image
              source={require('../assets/images/appart2.jpg')}
              alt="image base"
              width={401}
              height={190}
              roundedTop="lg"
              onPress={() => navigation.navigate('Propriete')}
            />
            <Text
              bold
              position="absolute"
              color="white"
              right={0}
              top={0}
              m={[8, 4, 30]}>
              FAV
            </Text>
            <Row space={5} pl={1} pr={1} mt={5} mb={5}>
              <Column>
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
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      120 m2
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      Meublé
                    </Text>
                  </Column>
                  <Column>
                    <SunIcon />
                    <Text fontSize="xs" style={styles.IconsText}>
                      3 ch.
                    </Text>
                  </Column>
                </Row>
              </Column>

              <Column space={3} pt={6}>
                <Button
                  size="sm"
                  style={styles.candidaterButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}
                  onPress={() => navigation.navigate('Propriete')}>
                  Candidater
                </Button>
                <Button
                  size="sm"
                  style={styles.contactButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}
                  onPress={() => setShowModal(true)}>
                  Contacter
                </Button>
              </Column>
            </Row>
          </Pressable>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  cards: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  searchBar: {
    textAlign: 'center',
  },
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  candidaterButton: {
    width: 160,
    backgroundColor: '#0B3D91',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  contactButton: {
    width: 160,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  textTown: {
    fontWeight: 'bold',
    color: '#3F3D56',
  },
  textAdress: {
    color: '#3F3D56',
  },
  textPrice: {
    color: '#3F3D56',
    fontWeight: 'bold',
    marginTop: 10,
  },
  IconsText: {
    color: '#3F3D56',
    textAlign: 'center',
  },
});

export default Search;
