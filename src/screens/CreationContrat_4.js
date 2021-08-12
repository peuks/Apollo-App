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
  InfoIcon,
  Checkbox,
  Switch,
} from 'native-base';
import style from '../styles/CreationContrat_4';

function CreationContrat_4({navigation}) {
  const styles = style();
  const [typeCharge, setTypeCharge] = useState();
  const [modePaiement, setModePaiement] = useState();
  const [datePaiement, setDatePaiement] = useState();
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
            Création contrat
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
                4/4
              </Text>{' '}
              Modalités financières
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '100%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Modalités financières
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Loyer*
            </FormControl.Label>
            <Input size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Type de charges*
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
                selectedValue={typeCharge}
                onValueChange={(itemValue, itemIndex) =>
                  setTypeCharge(itemValue)
                }>
                <Picker.Item label="Forfait" value="forfait" />
                <Picker.Item label="Provision" value="provision" />
                <Picker.Item label="Réel" value="reel" />
              </Picker>
            </View>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Montant charges*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Caution*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Mode de paiement*
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
                selectedValue={modePaiement}
                onValueChange={(itemValue, itemIndex) =>
                  setModePaiement(itemValue)
                }>
                <Picker.Item label="Virement" value="virement" />
                <Picker.Item label="Espèce" value="espece" />
                <Picker.Item label="Chèque" value="cheque" />
              </Picker>
            </View>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Date de paiement*
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
                selectedValue={datePaiement}
                onValueChange={(itemValue, itemIndex) =>
                  setDatePaiement(itemValue)
                }>
                <Picker.Item label="Le 1er du mois" value="1" />
                <Picker.Item label="Le 2 du mois" value="2" />
                <Picker.Item label="Le 3 du mois" value="3" />
                <Picker.Item label="Le 4 du mois" value="4" />
                <Picker.Item label="Le 5 du mois" value="5" />
                <Picker.Item label="Le 6 du mois" value="6" />
                <Picker.Item label="Le 7 du mois" value="7" />
                <Picker.Item label="Le 8 du mois" value="8" />
                <Picker.Item label="Le 9 du mois" value="9" />
                <Picker.Item label="Le 10 du mois" value="10" />
                <Picker.Item label="Le 11 du mois" value="11" />
                <Picker.Item label="Le 12 du mois" value="12" />
                <Picker.Item label="Le 13 du mois" value="13" />
                <Picker.Item label="Le 14 du mois" value="14" />
                <Picker.Item label="Le 15 du mois" value="15" />
                <Picker.Item label="Le 16 du mois" value="16" />
                <Picker.Item label="Le 17 du mois" value="17" />
                <Picker.Item label="Le 18 du mois" value="18" />
                <Picker.Item label="Le 19 du mois" value="19" />
                <Picker.Item label="Le 20 du mois" value="20" />
                <Picker.Item label="Le 21 du mois" value="21" />
                <Picker.Item label="Le 22 du mois" value="22" />
                <Picker.Item label="Le 23 du mois" value="23" />
                <Picker.Item label="Le 24 du mois" value="24" />
                <Picker.Item label="Le 25 du mois" value="25" />
                <Picker.Item label="Le 26 du mois" value="26" />
                <Picker.Item label="Le 27 du mois" value="27" />
              </Picker>
            </View>
          </FormControl>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Régulation des loyers <InfoIcon size="xs" mt={1} />
          </Text>
          <Text style={styles.textTown} fontSize={15}>
            Le loyer est soumis au décret fixant annuellement le montant maximum
            d’évolution des loyers à la relocation
          </Text>
          <Row space={1}>
            <Text>Oui</Text>
            <Switch
              size="lg"
              colorScheme="emerald"
              mt={-0.5}
              offTrackColor="#cddefa"
              onTrackColor="#cddefa"
              onThumbColor="#0B3D91"
              offThumbColor="#0B3D91"
            />
            <Text ml={-1}>Non</Text>
          </Row>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Montant du loyer du précédent locataire*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <Row space={1}>
            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
            <Text style={{color: '#3F3D56'}} fontSize={16} >
              Première fois que mon logement est loué
            </Text>
          </Row>
          <Text style={styles.textTown} fontSize={15}>
            Le loyer du logement est-il soumis au loyer de référence fixé par
            arrêté préfectoral ?
          </Text>
          <Row space={1}>
            <Text>Oui</Text>
            <Switch
              size="lg"
              colorScheme="emerald"
              mt={-0.5}
              offTrackColor="#cddefa"
              onTrackColor="#cddefa"
              onThumbColor="#0B3D91"
              offThumbColor="#0B3D91"
            />
            <Text ml={-1}>Non</Text>
          </Row>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Loyer de référence*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Montant du complément de loyer*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Personnalisation du contrat
          </Text>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Voulez-vous ajouter une clause travaux à votre contrat ?{''}
              <InfoIcon size="xs" mt={1} />
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
              Voulez-vous ajouter une clause à votre contrat ?*
            </FormControl.Label>
            <Input type="number" size="md" style={styles.input} />
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
            onPress={() => navigation.navigate('Propriete')}>
            Visualiser et signer le contrat
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default CreationContrat_4;
