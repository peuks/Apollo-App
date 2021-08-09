import React, {useState} from 'react';
import {Picker} from 'react-native';
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
  Pressable,
  CheckIcon,
  SunIcon,
} from 'native-base';
import AppartementIcon from '../assets/svg/AppartementIcon';
import MaisonIcon from '../assets/svg/MaisonIcon';
import ResidenceEtudiantIcon from '../assets/svg/ResidenceEtudiantIcon';
import PlusIcon from '../assets/svg/PlusIcon';
import MinusIcon from '../assets/svg/MinusIcon';
import style from '../styles/CreerEtat';

function CreerEtat({navigation}) {
  const styles = style();
  const [piece, setPiece] = useState();

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
          <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
            Type de bien*
          </Text>
          <Row space={8} alignItems="center" justifyContent="flex-start">
            <Pressable>
              <Column alignItems="center">
                <AppartementIcon width={70} height={70} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Appartement
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <MaisonIcon width={70} height={70} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Maison
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <ResidenceEtudiantIcon width={70} height={70} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Res. étudiante
                </Text>
              </Column>
            </Pressable>
          </Row>
          <Text style={{color: '#3F3D56'}} fontSize={16} mt={2}>
            Adresse du bien :
          </Text>
          <Text style={{color: '#3F3D56'}} fontSize={16} mt={-2} mb={2} bold>
            4 place de la République, 67100 Strasbourg
          </Text>
          
          <Text style={styles.textTown} fontSize={20} my={2}>
            Locataire
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Nom*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Prenom*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Email*
            </FormControl.Label>
            <Input type="email" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Date de la réalisation de l’état des lieux*
            </FormControl.Label>
            <Input type="date" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Nom de l’ancien occupant*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          

          <Text style={styles.textTown} fontSize={20} my={2}>
            Composition du logement
          </Text>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Pièces*
              </Text>
              <View
                w={40}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  height: 55,
                }}>
                <Picker
                  selectedValue={piece}
                  onValueChange={(itemValue, itemIndex) => setPiece(itemValue)}>
                  <Picker.Item label="Studio" value="studio" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                  <Picker.Item label="10" value="10" />
                  <Picker.Item label="11" value="11" />
                </Picker>
              </View>
            </Row>
          </FormControl>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Chambres*
              </Text>
              <Row space={5}>
                <Pressable>
                  <MinusIcon />
                </Pressable>
                <Text style={{color: '#000'}} fontSize={18}>
                  {'1'}
                </Text>
                <Pressable>
                  <PlusIcon />
                </Pressable>
              </Row>
            </Row>
          </FormControl>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Salle de bain*
              </Text>
              <Row space={5}>
                <Pressable>
                  <MinusIcon />
                </Pressable>
                <Text style={{color: '#000'}} fontSize={18}>
                  {'1'}
                </Text>
                <Pressable>
                  <PlusIcon />
                </Pressable>
              </Row>
            </Row>
          </FormControl>
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Salons/Pièces à vivre*
              </Text>
              <Row space={5}>
                <Pressable>
                  <MinusIcon />
                </Pressable>
                <Text style={{color: '#000'}} fontSize={18}>
                  {'1'}
                </Text>
                <Pressable>
                  <PlusIcon />
                </Pressable>
              </Row>
            </Row>
          </FormControl>

          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mb={10}
            mt={6}
            alignSelf="center"
            onPress={() => navigation.navigate('CreerEtat2')}>
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default CreerEtat;