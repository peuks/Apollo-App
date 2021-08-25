import React, {useState} from 'react';
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
} from 'native-base';
import style from '../styles/DossierLocDoc';

function DossierLocDoc({navigation}) {
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
        <Row space={2} alignItems="center">
          <View />
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

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Dossier en cours de création...
          </Text>
          <Text fontSize="md" >
            Pour finaliser votre dossier, merci d’ajouter les documents
            ci-dessous :
          </Text>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Locataire
          </Text>
          <Row justifyContent="space-between">
            <Text fontSize="md">Pièce d’identité ou passeport</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.visualiserButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Visualiser
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">3 derniers bulletins de salaire</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.visualiserButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Visualiser
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">2 derniers bilans</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Justificatif de domicile</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Avis d’imposition</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Contrat</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Carte d’étudiant</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Quittance de loyer</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>          

          <Text style={styles.textTown} fontSize={20} mt={6} mb={2}>
            Garant 1
          </Text>
          <Row justifyContent="space-between">
            <Text fontSize="md">Pièce d’identité ou passeport</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">3 derniers bulletins de salaire</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">2 derniers bilans</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Justificatif de domicile</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Avis d’imposition</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Contrat</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Carte d’étudiant</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>
          <Divider my={2} />
          <Row justifyContent="space-between">
            <Text fontSize="md">Quittance de loyer</Text>
            <Button
              size="sm"
              alignSelf="center"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Ajouter
            </Button>
          </Row>     

          <Button
            size="lg"
            style={styles.suivantButton}
            borderRadius="pill"
            _text={{
              color: '#FFF',
            }}
            mt={6}
            alignSelf="center"
            onPress={() => navigation.navigate('DossierLoc')}>
            Valider
          </Button>
          <Button
            size="lg"
            style={styles.continuerButton}
            borderRadius="pill"
            _text={{
              color: '#0B3D91',
              textAlign: 'center',
            }}
            mb={10}
            alignSelf="center"
            onPress={() => navigation.navigate('DossierLoc')}>
            Continuer plus tard
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}


export default DossierLocDoc;