import React, {useState} from 'react';
import Carousel from 'pinar';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  SearchIcon,
  SunIcon,
  View,
  ScrollView,
  Pressable,
  Modal,
  Center,
  CircleIcon,
} from 'native-base';
import SurfaceSmIcon from '../assets/svg/SurfaceSmIcon';
import MeubleSmIcon from '../assets/svg/MeubleSmIcon';
import ChambreSmIcon from '../assets/svg/ChambreSmIcon';
import FiltreIcon from '../assets/svg/FiltreIcon';
import FavIcon from '../assets/svg/FavIcon';
import LocationIcon from '../assets/svg/LocationIcon';
import style from '../styles/Search';

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
          <FiltreIcon />
        </Pressable>
      </Row>

      <ScrollView>
        <Column mt={2} mx={4}>
          <Row alignItems="center" justifyContent="center" mb={5}>
            <Pressable onPress={() => navigation.navigate('ViewCarte')}>
              <LocationIcon />
            </Pressable>
            <Text
              bold
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
            {/*<Box right={0} top={0} m={[8, 4, 30]}>
              <FavIcon/>
            </Box>*/}
            <Row space={5} pl={1} pr={1} mt={5} mb={5}>
              <Column>
                <Text fontSize="sm" style={styles.textTown}>
                  Strasbourg
                </Text>
                <Text fontSize="sm" style={styles.textAdress} noOfLines={2}>
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

export default Search;
