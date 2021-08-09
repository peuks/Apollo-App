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
  Checkbox,
  Pressable,
} from 'native-base';
import PlusIcon from '../assets/svg/PlusIcon';
import MinusIcon from '../assets/svg/MinusIcon';
import style from '../styles/AjoutPropriete2';

function AjoutPropriete2({navigation}) {
  const styles = style();
  const [piece, setPiece] = useState();

  const [etage, setEtage] = useState();
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
            Ajouter une propriété
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
              <Text color="#FFF" fontSize={14} bold>
                2/7
              </Text>{' '}
              Informations générales
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '28%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Formulaire appartement
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
          <Text style={{color: '#000'}} fontSize={12} mt={-3}>
            Cuisine, SDB et toilette ne sont pas à prendre en compte.
          </Text>
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
          <FormControl>
            <Row space={8} alignItems="center" justifyContent="space-between">
              <Text style={{color: '#3F3D56'}} fontSize={16} my={2}>
                Étage du bien*
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
                  selectedValue={etage}
                  onValueChange={(itemValue, itemIndex) => setEtage(itemValue)}>
                  <Picker.Item label="RDC" value="rdc" />
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
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Superficie*
            </FormControl.Label>
            <Input type="text" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Date de disponibilité*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <Row space={1}>
            <Checkbox
              value="test"
              accessibilityLabel="This is a dummy checkbox"
            />
            <Text style={{color: '#3F3D56'}} fontSize={16}>
              Je ne sais pas
            </Text>
          </Row>

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
            onPress={() => navigation.navigate('AjoutPropriete3')}>
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default AjoutPropriete2;
