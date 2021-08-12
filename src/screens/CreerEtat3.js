import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
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
  Select,
  CheckIcon,
  Pressable,
  Modal,
  Center,
  Checkbox,
  CircleIcon,
} from 'native-base';
import PlusIcon from '../assets/svg/PlusIcon';
import MinusIcon from '../assets/svg/MinusIcon';
import style from '../styles/CreerEtat3';

function CreerEtat3({navigation}) {
  const styles = style();
  const [showModal, setShowModal] = useState(false);

  const [etatPorte, setEtatPorte] = useState();
  const [etatFenetre, setEtatFenetre] = useState();
  const [etatPlafond, setEtatPlafond] = useState();
  const [etatLit, setEtatLit] = useState();
  const [etatCouette, setEtatCouette] = useState();

  
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
              État des lieux : 
              <Text color="#FFF" fontSize={14} bold>
                {" chambre 1"} 
              </Text>
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
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={16}>
                Supprimer
              </Text>
            </Row>

            <FormControl>
              <View
                mt={2}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={etatPorte}
                  onValueChange={(itemValue, itemIndex) =>
                    setEtatPorte(itemValue)
                  }>
                  <Picker.Item label="Neuf" value="neuf" />
                  <Picker.Item label="Bon état" value="bon etat" />
                  <Picker.Item label="État d'usage" value="etat d'usage" />
                  <Picker.Item label="Mauvais état" value="mauvais etat" />
                  <Picker.Item label="Hors service" value="hors service" />
                </Picker>
              </View>
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
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={16}>
                Supprimer
              </Text>
            </Row>

            <FormControl>
              <View
                mt={2}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={etatFenetre}
                  onValueChange={(itemValue, itemIndex) =>
                    setEtatFenetre(itemValue)
                  }>
                  <Picker.Item label="Neuf" value="neuf" />
                  <Picker.Item label="Bon état" value="bon etat" />
                  <Picker.Item label="État d'usage" value="etat d'usage" />
                  <Picker.Item label="Mauvais état" value="mauvais etat" />
                  <Picker.Item label="Hors service" value="hors service" />
                </Picker>
              </View>
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
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={16}>
                Supprimer
              </Text>
            </Row>

            <FormControl>
              <View
                mt={2}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={etatPlafond}
                  onValueChange={(itemValue, itemIndex) =>
                    setEtatPlafond(itemValue)
                  }>
                  <Picker.Item label="Neuf" value="neuf" />
                  <Picker.Item label="Bon état" value="bon etat" />
                  <Picker.Item label="État d'usage" value="etat d'usage" />
                  <Picker.Item label="Mauvais état" value="mauvais etat" />
                  <Picker.Item label="Hors service" value="hors service" />
                </Picker>
              </View>
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
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={16}>
                Supprimer
              </Text>
            </Row>
            <Row justifyContent="space-between">
              <Text style={{}} fontSize={18}>
                Quantité*
              </Text>
              <Row space={8}>
                <Pressable>
                  <MinusIcon/>
                </Pressable>
                <Text style={{color: '#000'}} fontSize={18}>
                  {'1'}
                </Text>
                <Pressable>
                  <PlusIcon/>
                </Pressable>
              </Row>
            </Row>

            <FormControl>
              <View
                mt={2}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={etatLit}
                  onValueChange={(itemValue, itemIndex) =>
                    setEtatLit(itemValue)
                  }>
                  <Picker.Item label="Neuf" value="neuf" />
                  <Picker.Item label="Bon état" value="bon etat" />
                  <Picker.Item label="État d'usage" value="etat d'usage" />
                  <Picker.Item label="Mauvais état" value="mauvais etat" />
                  <Picker.Item label="Hors service" value="hors service" />
                </Picker>
              </View>
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
              <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={16}>
                Supprimer
              </Text>
            </Row>
            <Row justifyContent="space-between">
              <Text style={{}} fontSize={18}>
                Quantité*
              </Text>
              <Row space={8}>
                <Pressable>
                  <MinusIcon/>
                </Pressable>
                <Text style={{color: '#000'}} fontSize={18}>
                  {'1'}
                </Text>
                <Pressable>
                  <PlusIcon/>
                </Pressable>
              </Row>
            </Row>

            <FormControl>
              <View
                mt={2}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={etatCouette}
                  onValueChange={(itemValue, itemIndex) =>
                    setEtatCouette(itemValue)
                  }>
                  <Picker.Item label="Neuf" value="neuf" />
                  <Picker.Item label="Bon état" value="bon etat" />
                  <Picker.Item label="État d'usage" value="etat d'usage" />
                  <Picker.Item label="Mauvais état" value="mauvais etat" />
                  <Picker.Item label="Hors service" value="hors service" />
                </Picker>
              </View>
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

export default CreerEtat3;