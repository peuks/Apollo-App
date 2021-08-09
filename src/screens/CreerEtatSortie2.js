import React, {useState} from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  ArrowBackIcon,
  View,
  ScrollView,
  Modal,
  Center,
} from 'native-base';
import style from '../styles/CreerEtatSortie2';

function CreerEtatSortie2({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const styles = style();
  return (
    <Box flex={1} bg="#FFF">
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Center>
              <Text style={styles.candidatermodalHeader} mb={2} bold>
                État des lieux signé !
              </Text>
              <Text style={styles.candidatermodalText} my={2}>
                Votre état des lieux a bien été signé !
              </Text>
              <Text style={styles.candidatermodalText} mb={2}>
                Vous pouvez retrouver votre état des lieux dans la rubrique
                “Contrat”.
              </Text>
              <Text style={styles.candidatermodalText} mb={2}>
                Si votre appartement n’est pas encore loué,vous pouvez dès
                maintenant diffuser à nouveau son annonce.
              </Text>
              <Button
                my={2}
                size="sm"
                style={styles.fermerButton}
                borderRadius="pill"
                _text={{
                  color: '#0B3D91',
                }}
                onPress={() => {
                  setShowModal(false);
                  navigation.navigate('EtatDesLieux');
                }}>
                Fermer
              </Button>
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
            Etat des lieux
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
              Comparaison entrée / sortie
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
          <Text style={styles.textTown} fontSize={20} mt={2}>
            Nous n’avons pas constaté de différence entre l’entrée et sortie de
            votre locataire.
          </Text>
          <Text
            style={{
              color: '#3F3D56',
            }}
            fontSize={16}
            mb={2}>
            S’il n’y a eu aucune dégradation vous pouvez dès à présent rendre
            l’intégaralité de la caution au locataire. N’oubliez pas de signer
            l’état des lieux.
          </Text>

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
            onPress={() => setShowModal(true)}>
            Signature de l’état des lieux
          </Button>
        </Column>
        <Text style={{color:'#000',textAlign:'center',marginTop:180}} bold fontSize="sm" mx={4} >
          Revenir en arrière afin de signaler une détérioration 
        </Text>
      </ScrollView>
    </Box>
  );
}

export default CreerEtatSortie2;