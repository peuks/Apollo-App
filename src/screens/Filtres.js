import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Input,
  View,
  ScrollView,
  Pressable,
  Center,
  SmallCloseIcon,
  Checkbox,
  FormControl,
} from 'native-base';
import AppartementIcon from '../assets/svg/AppartementIcon';
import MaisonIcon from '../assets/svg/MaisonIcon';
import ResidenceEtudiantIcon from '../assets/svg/ResidenceEtudiantIcon';
import EuroIcon from '../assets/svg/EuroIcon';
import style from '../styles/Filtres';
import {Formik} from 'formik';

const validate = values => {
  const errors = {};

  if (!values.dateD) {
    errors.dateD = 'Ce champ est requis';
  }

  return errors;
};

function Filtres({navigation}) {
  const styles = style();
  const [bien, setBien] = useState(null);
  const [piece, setPiece] = useState(null);
  const [chambre, setChambre] = useState(null);

  const onSubmit = data => {
    console.log('Submit data ' + data);
  };
  return (
    <Box flex={1} bg="#FAFAFA">
      <Row
        px={1}
        py={3}
        justifyContent="space-between"
        alignItems="center"
        ml={2}
        mr={2}>
        <Row space={2} alignItems="center">
          <SmallCloseIcon
            size="md"
            color="#3F3D56"
            onPress={() => navigation.goBack()}
          />
        </Row>
        <Row space={2}>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            Filtres
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <View />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Formik
          initialValues={{
            natureBien: bien,
            nbChambre: chambre,
            budgetMin: '',
            budgetMax: '',
            nbPiece: piece,
            typeContrat: '',
            surfaceMin: '',
            surfaceMax: '',
          }}
          onSubmit={onSubmit}
          validate={validate}>
          {({values, handleChange, handleBlur, handleSubmit}) => (
            <Column mt={0} mx={4} space={5}>
              <Text style={styles.textTown} fontSize={20} mt={4}>
                Nature du bien
              </Text>
              <Row space={8} alignItems="center" justifyContent="flex-start">
                <Pressable
                  onPress={() =>
                    setBien(prev =>
                      prev === 'appartement' ? null : 'appartement',
                    )
                  }>
                  <Column alignItems="center">
                    <AppartementIcon
                      width={70}
                      height={70}
                      color={bien === 'appartement' ? '#0B3D91' : '#3F3D56'}
                    />
                    <Text
                      fontSize="sm"
                      style={[
                        styles.IconsText,
                        bien === 'appartement'
                          ? styles.activeText
                          : styles.inactiveText,
                      ]}
                      noOfLines={2}>
                      Appartement
                    </Text>
                  </Column>
                </Pressable>

                <Pressable
                  onPress={() =>
                    setBien(prev => (prev === 'maison' ? null : 'maison'))
                  }>
                  <Column alignItems="center">
                    <MaisonIcon
                      width={70}
                      height={70}
                      color={bien === 'maison' ? '#0B3D91' : '#3F3D56'}
                    />
                    <Text
                      fontSize="sm"
                      style={[
                        styles.IconsText,
                        bien === 'maison'
                          ? styles.activeText
                          : styles.inactiveText,
                      ]}
                      noOfLines={2}>
                      Maison
                    </Text>
                  </Column>
                </Pressable>
                <Pressable
                  onPress={() =>
                    setBien(prev => (prev === 'residence' ? null : 'residence'))
                  }>
                  <Column alignItems="center">
                    <ResidenceEtudiantIcon
                      width={70}
                      height={70}
                      color={bien === 'residence' ? '#0B3D91' : '#3F3D56'}
                    />
                    <Text
                      fontSize="sm"
                      style={[
                        styles.IconsText,
                        bien === 'residence'
                          ? styles.activeText
                          : styles.inactiveText,
                      ]}
                      noOfLines={2}>
                      Res. étudiante
                    </Text>
                  </Column>
                </Pressable>
              </Row>
              <Text style={styles.textTown} fontSize={20} mt={5}>
                Nombre de chambres ?
              </Text>
              <Row space={5} alignItems="center" justifyContent="flex-start">
                <Pressable
                  onPress={() => setChambre(prev => (prev === 1 ? null : 1))}
                  p={4}
                  style={[
                    styles.cards,
                    chambre === 1 ? styles.activeCards : styles.inactiveCards,
                  ]}>
                  <Text
                    style={[
                      styles.cartText,
                      chambre === 1
                        ? styles.activeCartText
                        : styles.inactiveCartText,
                    ]}>
                    1
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setChambre(prev => (prev === 2 ? null : 2))}
                  p={4}
                  style={[
                    styles.cards,
                    chambre === 2 ? styles.activeCards : styles.inactiveCards,
                  ]}>
                  <Text
                    style={[
                      styles.cartText,
                      chambre === 2
                        ? styles.activeCartText
                        : styles.inactiveCartText,
                    ]}>
                    2
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setChambre(prev => (prev === 3 ? null : 3))}
                  p={4}
                  style={[
                    styles.cards,
                    chambre === 3 ? styles.activeCards : styles.inactiveCards,
                  ]}>
                  <Text
                    style={[
                      styles.cartText,
                      chambre === 3
                        ? styles.activeCartText
                        : styles.inactiveCartText,
                    ]}>
                    3
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setChambre(prev => (prev === 4 ? null : 4))}
                  p={4}
                  style={[
                    styles.cards,
                    chambre === 4 ? styles.activeCards : styles.inactiveCards,
                  ]}>
                  <Text
                    style={[
                      styles.cartText,
                      chambre === 4
                        ? styles.activeCartText
                        : styles.inactiveCartText,
                    ]}>
                    4+
                  </Text>
                </Pressable>
              </Row>
              <Text style={styles.textTown} fontSize={20} mt={5}>
                Budget ?
              </Text>
              <Row space={10} alignItems="center" justifyContent="flex-start">
                <Row space={3}>
                  <Text style={{color: '#3F3D56'}} fontSize={20}>
                    Min
                  </Text>
                  <Input
                    type="number"
                    style={styles.input}
                    width={90}
                    height={10}
                    mt={-1}
                    keyboardType="numeric"
                    p={2}
                    InputRightElement={<EuroIcon />}
                    onChangeText={handleChange('minBudget')}
                    value={values.minBudget}
                  />
                </Row>

                <Row space={3}>
                  <Text style={{color: '#3F3D56'}} fontSize={20}>
                    Max
                  </Text>
                  <FormControl>
                    <Input
                      type="number"
                      style={styles.input}
                      width={90}
                      height={10}
                      mt={-1}
                      keyboardType="numeric"
                      InputRightElement={<EuroIcon />}
                      onChangeText={handleChange('maxBudget')}
                      value={values.maxBudget}
                    />
                  </FormControl>
                </Row>
              </Row>

              <Text style={styles.textTown} fontSize={20} mt={5}>
                Nombre de pièces ?
              </Text>
              <Row space={5} alignItems="center" justifyContent="flex-start">
                <Pressable
                  onPress={() =>
                    setPiece(prev => (prev === 'studio' ? null : 'studio'))
                  }
                  w={90}
                  p={4}
                  style={
                    piece === 'studio'
                      ? {
                          backgroundColor: '#0B3D91',
                          borderRadius: 10,
                          elevation: 2,
                          borderWidth: 1,
                          borderColor: '#0B3D91',
                          width: 90,
                          alignItems: 'center',
                        }
                      : {
                          backgroundColor: '#fff',
                          borderRadius: 10,
                          elevation: 2,
                          borderWidth: 1,
                          borderColor: '#fff',
                          width: 90,
                          alignItems: 'center',
                        }
                  }>
                  <Text
                    style={[
                      styles.IconsText,
                      piece === 'studio'
                        ? styles.activeCartText
                        : styles.inactiveCartText,
                    ]}
                    noOfLines={2}>
                    Studio
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setPiece(prev => (prev === 2 ? null : 2))}
                  p={4}
                  style={[
                    styles.cards,
                    piece === 2 ? styles.activeCards : styles.inactiveCards,
                  ]}>
                  <Text
                    style={[
                      styles.IconsText,
                      piece === 2
                        ? styles.activeCartText
                        : styles.inactiveCartText,
                    ]}>
                    2
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setPiece(prev => (prev === 3 ? null : 3))}
                  p={4}
                  style={[
                    styles.cards,
                    piece === 3 ? styles.activeCards : styles.inactiveCards,
                  ]}>
                  <Text
                    style={[
                      styles.IconsText,
                      piece === 3
                        ? styles.activeCartText
                        : styles.inactiveCartText,
                    ]}>
                    3
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setPiece(prev => (prev === 4 ? null : 4))}
                  p={4}
                  style={[
                    styles.cards,
                    piece === 4 ? styles.activeCards : styles.inactiveCards,
                  ]}>
                  <Text
                    style={[
                      styles.IconsText,
                      piece === 4
                        ? styles.activeCartText
                        : styles.inactiveCartText,
                    ]}>
                    4+
                  </Text>
                </Pressable>
              </Row>
              <Text style={styles.textTown} fontSize={20} mt={5}>
                Type de contrat
              </Text>
              <Row space={5} alignItems="center" justifyContent="flex-start">
                <Checkbox.Group accessibilityLabel="choose values">
                  <Column space={5} alignItems="flex-start">
                    <Checkbox value="meublé">Meublé</Checkbox>
                    <Checkbox value="colocation">Colocation</Checkbox>
                  </Column>
                  <Column space={5} alignItems="flex-start">
                    <Checkbox value="non meublé">Non meublé</Checkbox>
                    <Checkbox value="coliving">Coliving</Checkbox>
                  </Column>
                </Checkbox.Group>
              </Row>
              <Text style={styles.textTown} fontSize={20} mt={5}>
                Surface
              </Text>   
              <Row
                space={10}
                alignItems="center"
                justifyContent="flex-start"
                mb={5}>
                <Row space={3}>
                  <Text style={{color: '#3F3D56'}} fontSize={20}>
                    Min
                  </Text>
                  <Input
                    type="number"
                    style={styles.input}
                    width={90}
                    height={10}
                    mt={-1}
                    keyboardType="numeric"
                    p={2}
                    InputRightElement={<EuroIcon />}
                  />
                </Row>

                <Row space={3}>
                  <Text style={{color: '#3F3D56'}} fontSize={20}>
                    Max
                  </Text>
                  <Input
                    type="number"
                    style={styles.input}
                    width={90}
                    height={10}
                    mt={-1}
                    keyboardType="numeric"
                    InputRightElement={<EuroIcon />}
                  />
                </Row>
              </Row>
              <Button
                size="lg"
                style={styles.validerButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                //onPress={() => navigation.navigate('Recherche')}
                onPress={handleSubmit}>
                Valider
              </Button>
            </Column>
          )}
        </Formik>
      </ScrollView>
    </Box>
  );
}

export default Filtres;
