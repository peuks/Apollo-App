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
  Switch,
  Image,
} from 'native-base';
import style from '../styles/CreerDossierLoc2';

function CreerDossierLoc2({navigation}) {
  const styles = style();
  const [ouiGarant, setOuiGarant] = useState(false);
  const toggleSwitch = () => {
    setOuiGarant(value => !value);
    console.log('State : ' + ouiGarant);
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
            Mon dossier locataire
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
                2/2
              </Text>{' '}
              Garant
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
        <Column mt={2} mx={4} space={4}>
          <Button
            alignSelf="center"
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mb={2}
            mt={6}
            onPress={() => navigation.navigate('DossierLocDoc')}>
            Continuer sans garant
          </Button>
          <Row space={2} alignItems="center" justifyContent="space-between">
            <Divider style={{width: '40%', opacity: 0.2}} bg="#3F3D56" />
            <Text fontSize="xs" style={{opacity: 0.5}}>
              OU
            </Text>
            <Divider style={{width: '40%', opacity: 0.2}} bg="#3F3D56" />
          </Row>
          <Text style={styles.textTown} fontSize={20} mt={2}>
            Renseignement garant
          </Text>
          <Text style={styles.textTown} fontSize={16} mb={2}>
            Avez-vous un garant ?*
          </Text>
          <Row space={1}>
            <Text>Oui</Text>
            <Switch
              size="lg"
              mt={-0.5}
              trackColor={{false: '#cddefa', true: '#cddefa'}}
              thumbColor={ouiGarant ? '#fff' : '#0B3D91'}
              onValueChange={() => setOuiGarant(prev => !prev)}
              value={ouiGarant}
            />
            <Text ml={-1}>Non</Text>
            <Text ml={-1}> {ouiGarant ? 'nonGarant' : 'ouiGarant'}</Text>
          </Row>
          {ouiGarant ? 
            <Column space={5}>
              <Image
                source={require('../assets/images/cautioneo.png')}
                alt="image base"
                alignSelf="center"
              />
              <Text
                style={{
                  color: '#3F3D56',
                  textAlign: 'center',
                }}
                fontSize={18}
                mx={8}
                bold>
                Découvrez Cautioneo, votre nouveau garant privé !
              </Text>
              <Text style={{textAlign: 'center'}} mx={2} fontSize={14}>
                Valorisez votre dossier locatif avec Cautioneo comme garant et ne passez
                plus à côté de l’appartement de vos rêves : obtenez un garant en moins
                de 24h.
              </Text>

              <Button
                size="lg"
                style={styles.suivantButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                alignSelf="center"
                onPress={() => navigation.navigate('DossierLoc')}>
                Obtenir mon garant
              </Button>
              <Text style={{textAlign: 'center'}} fontSize={10}>
                Cette solution est conseillée si vous êtes en période d’essai ou n’avez
                pas de garant en France.
              </Text>
            </Column>
             : 
            <Column space={5}>
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
                  Téléphone*
                </FormControl.Label>
                <Input type="tel" size="md" style={styles.input} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Adresse*
                </FormControl.Label>
                <Input type="text" size="md" style={styles.input} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Profession*
                </FormControl.Label>
                <Input type="text" size="md" style={styles.input} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Type de contrat*
                </FormControl.Label>
                <Input type="text" size="md" style={styles.input} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Revenu mensuel net*
                </FormControl.Label>
                <Input type="number" size="md" style={styles.input} />
              </FormControl>
              <Text
                style={{color: '#0B3D91', textAlign: 'center'}}
                fontSize={14}
                my={5}
                bold>
                Ajouter un garant supplémentaire
              </Text>
              <Button
                size="lg"
                style={styles.suivantButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                mb={10}
                mt={2}
                alignSelf="center"
                onPress={() => navigation.navigate('DossierLoc')}>
                Valider mon dossier
              </Button>
            </Column>
            
            }
        </Column>
      </ScrollView>
    </Box>
  );
}

export default CreerDossierLoc2;