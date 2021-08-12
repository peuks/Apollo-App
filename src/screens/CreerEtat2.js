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
  Divider,
  Select,
  CheckIcon,
} from 'native-base';
import style from '../styles/CreerEtat2';

function CreerEtat2({navigation}) {
  const styles = style();
  const [modaliteChauffage, setModaliteChauffage] = useState();
  const [modaliteEau, setModaliteEau] = useState();
  const [chaudiere, setChaudiere] = useState();
  const [etatInterphone, setEtatInterphone] = useState();
  const [etatBoiteLettre, setEtatBoiteLettre] = useState();
  const [etatDetecteurFumee, setEtatDetecteurFumee] = useState();

  return (
    <Box flex={1} bg="#FFF">
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
              Informations générales
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
          <Row justifyContent="space-between" my={2}>
            <Text style={styles.textTown} fontSize={20}>
              Électricité
            </Text>
            <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={16}>
              Supprimer
            </Text>
          </Row>
          <Column mx={2} space={4}>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                N° compteur*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Relevé heures creuses*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Relevé heures pleines*
              </FormControl.Label>
              <Input type="email" size="md" style={styles.input} />
            </FormControl>
          </Column>
          <Row justifyContent="space-between" my={2}>
            <Text style={styles.textTown} fontSize={20}>
              Gaz
            </Text>
            <Text style={{fontWeight: 'bold', color: 'red'}} fontSize={16}>
              Supprimer
            </Text>
          </Row>
          <Column mx={2} space={4}>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                N° compteur*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Relevé*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
          </Column>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Eau
          </Text>
          <Column mx={2} space={4}>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Eau chaude (m3)*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Eau froide (m3)*
              </FormControl.Label>
              <Input type="text" size="md" style={styles.input} />
            </FormControl>
          </Column>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Chauffage
          </Text>
          <Column mx={2} space={4}>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Modalité de chauffage de l’appartement ?*
              </FormControl.Label>
              <View
                mt={2}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={modaliteChauffage}
                  onValueChange={(itemValue, itemIndex) =>
                    setModaliteChauffage(itemValue)
                  }>
                  <Picker.Item label="Collectif" value="collectif" />
                  <Picker.Item label="Individuel" value="individuel" />
                </Picker>
              </View>
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Modalité de production d’eau chaude ?*
              </FormControl.Label>
              <View
                mt={2}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={modaliteEau}
                  onValueChange={(itemValue, itemIndex) =>
                    setModaliteEau(itemValue)
                  }>
                  <Picker.Item label="Collectif" value="collectif" />
                  <Picker.Item label="Individuel" value="individuel" />
                </Picker>
              </View>
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                Chaudière*
              </FormControl.Label>
              <View
                mt={2}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={chaudiere}
                  onValueChange={(itemValue, itemIndex) =>
                    setChaudiere(itemValue)
                  }>
                  <Picker.Item label="Oui" value="oui" />
                  <Picker.Item label="Non" value="non" />
                </Picker>
              </View>
            </FormControl>
          </Column>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Équipements
          </Text>
          <Column mx={2} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Interphone*
            </Text>
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
                  selectedValue={etatInterphone}
                  onValueChange={(itemValue, itemIndex) =>
                    setEtatInterphone(itemValue)
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
                type="text"
                size="md"
                style={styles.input}
              />
            </FormControl>
          </Column>
          <Column mx={2} mt={6} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Boîte aux lettres*
            </Text>
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
                  selectedValue={etatBoiteLettre}
                  onValueChange={(itemValue, itemIndex) =>
                    setEtatBoiteLettre(itemValue)
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
                type="text"
                size="md"
                style={styles.input}
              />
            </FormControl>
          </Column>
          <Column mx={2} my={6} space={4}>
            <Text style={styles.textTown} fontSize={18}>
              Détecteur de fumée*
            </Text>
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
                  selectedValue={etatDetecteurFumee}
                  onValueChange={(itemValue, itemIndex) =>
                    setEtatDetecteurFumee(itemValue)
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
                type="text"
                size="md"
                style={styles.input}
              />
            </FormControl>
          </Column>

          <Button
            size="lg"
            style={styles.ajouterButton}
            borderRadius="pill"
            _text={{
              color: '#0B3D91',
            }}
            mt={6}
            alignSelf="center">
            Ajouter un équipement
          </Button>
          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mb={10}
            alignSelf="center"
            onPress={() => navigation.navigate('CreerEtat3')}>
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default CreerEtat2;
