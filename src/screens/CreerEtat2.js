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
} from 'native-base';
import {Formik} from 'formik';
import style from '../styles/CreerEtat2';

const validate = values => {
  const errors = {};
  if (!values.numCompteurElec) {
    errors.numCompteurElec = 'Ce champ est requis';
  }
  if (!values.releveHCreuse) {
    errors.releveHCreuse = 'Ce champ est requis';
  }
  if (!values.releveHPleine) {
    errors.releveHPleine = 'Ce champ est requis';
  }
  return errors;
};

function CreerEtat2({navigation}) {
  const styles = style();

  const onSubmit = data => {
    console.log('submiting with ', data);
  };

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
        <Formik
          initialValues={{
            numCompteurElec: '',
            releveHCreuse: '',
            releveHPleine: '',
            numCompteurGaz: '',
            releveGaz: '',
            eauChaude: '',
            eauFroide: '',
            modaliteChauffage:'collectif',
            modaliteEau:'collectif',
            chaudiere:'oui',
            etatInterphone:'neuf',
            etatBoiteLettre:'neuf',
            etatDetecteurFumee:'neuf',
            commentaireInterphone:'',
            commentaireFumee:'',
            commentaireBoiteLettre:'',
          }}
          onSubmit={onSubmit}
          validate={validate}>
          {({values, handleChange, handleBlur, handleSubmit, errors}) => (
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
                <FormControl isRequired isInvalid={'numCompteurElec' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    N° compteur
                  </FormControl.Label>
                  <Input
                    type="number"
                    size="md"
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange('numCompteurElec')}
                    value={values.numCompteurElec}
                  />
                  <FormControl.ErrorMessage>
                    {errors.numCompteurElec}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'releveHCreuse' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Relevé heures creuses
                  </FormControl.Label>
                  <Input
                    type="number"
                    size="md"
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange('releveHCreuse')}
                    value={values.releveHCreuse}
                  />
                  <FormControl.ErrorMessage>
                    {errors.releveHCreuse}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'releveHPleine' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Relevé heures pleines
                  </FormControl.Label>
                  <Input
                    type="number"
                    size="md"
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange('releveHPleine')}
                    value={values.releveHPleine}
                  />
                  <FormControl.ErrorMessage>
                    {errors.releveHPleine}
                  </FormControl.ErrorMessage>
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
                <FormControl isRequired isInvalid={'numCompteurGaz' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    N° compteur
                  </FormControl.Label>
                  <Input
                    type="number"
                    size="md"
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange('numCompteurGaz')}
                    value={values.numCompteurGaz}
                  />
                  <FormControl.ErrorMessage>
                    {errors.numCompteurGaz}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'releveGaz' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Relevé
                  </FormControl.Label>
                  <Input
                    type="text"
                    size="md"
                    style={styles.input}
                    onChangeText={handleChange('releveGaz')}
                    value={values.releveGaz}
                  />
                  <FormControl.ErrorMessage>
                    {errors.releveGaz}
                  </FormControl.ErrorMessage>
                </FormControl>
              </Column>

              <Text style={styles.textTown} fontSize={20} my={2}>
                Eau
              </Text>
              <Column mx={2} space={4}>
                <FormControl isRequired isInvalid={'eauChaude' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Eau chaude (m3)
                  </FormControl.Label>
                  <Input
                    type="text"
                    size="md"
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange('eauChaude')}
                    value={values.eauChaude}
                  />
                  <FormControl.ErrorMessage>
                    {errors.eauChaude}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'eauFroide' in errors}>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Eau froide (m3)
                  </FormControl.Label>
                  <Input
                    type="text"
                    size="md"
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange('eauFroide')}
                    value={values.eauFroide}
                  />
                  <FormControl.ErrorMessage>
                    {errors.eauFroide}
                  </FormControl.ErrorMessage>
                </FormControl>
              </Column>

              <Text style={styles.textTown} fontSize={20} my={2}>
                Chauffage
              </Text>
              <Column mx={2} space={4}>
                <FormControl isRequired>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Modalité de chauffage de l’appartement ?
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
                      selectedValue={values.modaliteChauffage}
                      onValueChange={handleChange('modaliteChauffage')}
                      >
                      <Picker.Item label="Collectif" value="collectif" />
                      <Picker.Item label="Individuel" value="individuel" />
                    </Picker>
                  </View>
                </FormControl>
                <FormControl isRequired>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Modalité de production d’eau chaude ?
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
                      selectedValue={values.modaliteEau}
                      onValueChange={handleChange('modaliteEau')}>
                      <Picker.Item label="Collectif" value="collectif" />
                      <Picker.Item label="Individuel" value="individuel" />
                    </Picker>
                  </View>
                </FormControl>
                <FormControl isRequired>
                  <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                    Chaudière
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
                      selectedValue={values.chaudiere}
                      onValueChange={handleChange('chaudiere')}>
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
                      selectedValue={values.modaliteChauffage}
                      onValueChange={handleChange('modaliteChauffage')}>
                      <Picker.Item label="Neuf" value="neuf" />
                      <Picker.Item label="Bon état" value="bon_etat" />
                      <Picker.Item label="État d'usage" value="etat_dusage" />
                      <Picker.Item label="Mauvais état" value="mauvais_etat" />
                      <Picker.Item label="Hors service" value="hors_service" />
                    </Picker>
                  </View>
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="Commentaire"
                    type="text"
                    size="md"
                    style={styles.input}
                    onChangeText={handleChange('commentaireInterphone')}
                    value={values.commentaireInterphone}
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
                      selectedValue={values.etatBoiteLettre}
                      onValueChange={handleChange('etatBoiteLettre')}>
                      <Picker.Item label="Neuf" value="neuf" />
                      <Picker.Item label="Bon état" value="bon etat" />
                      <Picker.Item label="État d'usage" value="etat_dusage" />
                      <Picker.Item label="Mauvais état" value="mauvais_etat" />
                      <Picker.Item label="Hors service" value="hors_service" />
                    </Picker>
                  </View>
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="Commentaire"
                    type="text"
                    size="md"
                    style={styles.input}
                    onChangeText={handleChange('commentaireBoiteLettre')}
                    value={values.commentaireBoiteLettre}
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
                      selectedValue={values.etatDetecteurFumee}
                      onValueChange={handleChange('etatDetecteurFumee')}>
                      <Picker.Item label="Neuf" value="neuf" />
                      <Picker.Item label="Bon état" value="bon_etat" />
                      <Picker.Item label="État d'usage" value="etat_dusage" />
                      <Picker.Item label="Mauvais état" value="mauvais_etat" />
                      <Picker.Item label="Hors service" value="hors_service" />
                    </Picker>
                  </View>
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="Commentaire"
                    type="text"
                    size="md"
                    style={styles.input}
                    onChangeText={handleChange('commentaireFumee')}
                    value={values.commentaireFumee}
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
                onPress={() => navigation.navigate('CreerEtat3')}
                >
                Suivant
              </Button>
            </Column>
          )}
        </Formik>
      </ScrollView>
    </Box>
  );
}

export default CreerEtat2;
