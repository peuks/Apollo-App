import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  ArrowBackIcon,
  Input,
  View,
  ScrollView,
  FormControl,
  Divider,
  Select,
  InfoIcon,
  CheckIcon,
  Switch,
  ArrowUpIcon,
  Circle,
  SunIcon,
  Modal,
  Center,
  Checkbox,
  CircleIcon,
} from 'native-base';

function CreerEtat3({navigation}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box flex={1} bg="#FFF">
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Center>
              <Text style={styles.candidatermodalHeader} bold>
                Ajouter une nouvelle ligne
              </Text>
              <Text style={styles.candidatermodalText} mb={2}>
                Veuillez indiquer le nom de la nouvelle ligne que vous souhaitez
                ajouter :
              </Text>
              <FormControl mb={3}>
                <Input size="xs" style={styles.input} />
              </FormControl>
              <Row space={4} my={3}>
                <Button
                  size="sm"
                  rightIcon={<CircleIcon />}
                  style={styles.fermerButton}
                  borderRadius="pill"
                  _text={{
                    color: '#0B3D91',
                  }}
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Annuler
                </Button>
                <Button
                  size="sm"
                  rightIcon={<CircleIcon />}
                  style={styles.inscrireButton}
                  borderRadius="pill"
                  _text={{
                    color: '#FFF',
                  }}
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Ajouter
                </Button>
              </Row>
            </Center>
          </Modal.Header>
        </Modal.Content>
      </Modal>
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
            Création état des lieux
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <Column bg="#0B3D91">
        <Row px={1} py={3} justifyContent="space-between" alignItems="center">
          <Row space={2} alignItems="center">
            <View />
          </Row>
          <Row space={2}>
            <Text color="#FFF" fontSize={14}>
              Parties concernées
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
      </Column>

      <ScrollView>
        <Column mt={4} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Pièces
          </Text>
          <Text
            style={{
              color: '#3F3D56',
            }}
            fontSize={20}
            my={2}>
            État des lieux - Chambre 1
          </Text>
          <Column mx={2} space={4}>
            <Row justifyContent="space-between">
              <Text style={styles.textTown} fontSize={18}>
                Porte, menuiserie
              </Text>
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={18}>
                Supprimer
              </Text>
            </Row>

            <FormControl>
              <Select
                placeholder="État"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.input}>
                <Select.Item label="Male" value="m" />
                <Select.Item label="Female" value="f" />
              </Select>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Commentaire"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <Text
              style={{color: '#0B3D91', textAlign: 'center'}}
              fontSize={16}
              my={2}
              bold>
              Ajouter photo
            </Text>
          </Column>
          <Column mx={2} space={4}>
            <Row justifyContent="space-between">
              <Text style={styles.textTown} fontSize={18}>
                Fenêtres, volets
              </Text>
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={18}>
                Supprimer
              </Text>
            </Row>

            <FormControl>
              <Select
                placeholder="État"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.input}>
                <Select.Item label="Male" value="m" />
                <Select.Item label="Female" value="f" />
              </Select>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Commentaire"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <Text
              style={{color: '#0B3D91', textAlign: 'center'}}
              fontSize={16}
              my={2}
              bold>
              Ajouter photo
            </Text>
          </Column>
          <Column mx={2} space={4}>
            <Row justifyContent="space-between">
              <Text style={styles.textTown} fontSize={18}>
                Plafond
              </Text>
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={18}>
                Supprimer
              </Text>
            </Row>

            <FormControl>
              <Select
                placeholder="État"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.input}>
                <Select.Item label="Male" value="m" />
                <Select.Item label="Female" value="f" />
              </Select>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Commentaire"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <Text
              style={{color: '#0B3D91', textAlign: 'center'}}
              fontSize={16}
              my={2}
              bold>
              Ajouter photo
            </Text>
          </Column>
          <Button
            size="lg"
            style={styles.ajouterButton}
            borderRadius="pill"
            _text={{
              color: '#0B3D91',
            }}
            mt={6}
            alignSelf="center"
            onPress={() => {
              setShowModal(true);
            }}>
            Ajouter une nouvelle ligne
          </Button>

          <Text
            style={{
              color: '#3F3D56',
            }}
            fontSize={20}
            my={2}>
            Inventaire - Chambre 1
          </Text>
          <Column mx={2} space={4}>
            <Row justifyContent="space-between">
              <Text style={styles.textTown} fontSize={18}>
                Lit
              </Text>
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={18}>
                Supprimer
              </Text>
            </Row>
            <Row justifyContent="space-between">
              <Text style={{}} fontSize={18}>
                Quantité*
              </Text>
              <Row space={8}>
                <Circle
                  size={21}
                  style={{backgroundColor: '#0B3D91'}}
                  justifyContent="center">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}
                    fontSize={22}>
                    -
                  </Text>
                </Circle>
                <Text style={{color: '#000'}} fontSize={18}>
                  {'1'}
                </Text>
                <Circle
                  size={21}
                  style={{backgroundColor: '#0B3D91'}}
                  justifyContent="center">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}
                    fontSize={22}>
                    +
                  </Text>
                </Circle>
              </Row>
            </Row>

            <FormControl>
              <Select
                placeholder="État"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.input}>
                <Select.Item label="Male" value="m" />
                <Select.Item label="Female" value="f" />
              </Select>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Commentaire"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <Text
              style={{color: '#0B3D91', textAlign: 'center'}}
              fontSize={16}
              my={2}
              bold>
              Ajouter photo
            </Text>
          </Column>
          <Column mx={2} space={4}>
            <Row justifyContent="space-between">
              <Text style={styles.textTown} fontSize={18}>
                Couette
              </Text>
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={18}>
                Supprimer
              </Text>
            </Row>
            <Row justifyContent="space-between">
              <Text style={{}} fontSize={18}>
                Quantité*
              </Text>
              <Row space={8}>
                <Circle
                  size={21}
                  style={{backgroundColor: '#0B3D91'}}
                  justifyContent="center">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}
                    fontSize={22}>
                    -
                  </Text>
                </Circle>
                <Text style={{color: '#000'}} fontSize={18}>
                  {'1'}
                </Text>
                <Circle
                  size={21}
                  style={{backgroundColor: '#0B3D91'}}
                  justifyContent="center">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}
                    fontSize={22}>
                    +
                  </Text>
                </Circle>
              </Row>
            </Row>

            <FormControl>
              <Select
                placeholder="État"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={10} />,
                }}
                mt={1}
                style={styles.input}>
                <Select.Item label="Male" value="m" />
                <Select.Item label="Female" value="f" />
              </Select>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Commentaire"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <Text
              style={{color: '#0B3D91', textAlign: 'center'}}
              fontSize={16}
              my={2}
              bold>
              Ajouter photo
            </Text>
          </Column>
          <Button
            size="lg"
            style={styles.ajouterButton}
            borderRadius="pill"
            _text={{
              color: '#0B3D91',
            }}
            mt={6}
            alignSelf="center"
            onPress={() => {
              setShowModal(true);
            }}>
            Ajouter une nouvelle ligne
          </Button>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Remise des clés
          </Text>
          <Column mx={2} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Clé appartement*
            </Text>
            <FormControl>
              <Input
                placeholder="Nombre"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Commentaire"
                type="text"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <Text
              style={{color: '#0B3D91', textAlign: 'center'}}
              fontSize={16}
              my={2}
              bold>
              Ajouter photo
            </Text>
          </Column>
          <Column mx={2} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Clé boîte aux lettres*
            </Text>
            <FormControl>
              <Input
                placeholder="Nombre"
                type="number"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Commentaire"
                type="text"
                size="md"
                style={styles.input}
              />
            </FormControl>
            <Text
              style={{color: '#0B3D91', textAlign: 'center'}}
              fontSize={16}
              my={2}
              bold>
              Ajouter photo
            </Text>
          </Column>

          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mt={6}
            mb={10}
            alignSelf="center"
            onPress={() => navigation.navigate('AjoutPropriete2')}>
            Visionner et signer le contrat
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  cards: {
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 1.0,
    borderRadius: 10,
    elevation: 5,
  },
  searchBar: {
    borderColor: '#000',
  },
  input: {
    borderColor: '#000',
  },
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  suivantButton: {
    backgroundColor: '#0B3D91',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  ajouterButton: {
    width: 340,
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
  //Candidater1 modal
  candidatermodalHeader: {
    fontSize: 20,
    marginBottom: 5,
    color: '#225FC7',
  },
  candidatermodalTitle: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 10,
  },
  candidatermodalText: {
    fontSize: 12,
    textAlign: 'center',
  },
  inscrireButton: {
    width: 140,
    backgroundColor: '#0B3D91',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  fermerButton: {
    width: 140,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
});

export default CreerEtat3;
