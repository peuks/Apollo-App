import React, {useState} from 'react';
import Carousel from 'pinar';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Image,
  Divider,
  Center,
  ArrowBackIcon,
  ScrollView,
  Modal,
  Pressable,
  CircleIcon,
  FormControl,
  Input,
  Checkbox,
} from 'native-base';
import SurfaceLgIcon from '../assets/svg/SurfaceLgIcon';
import MeubleLgIcon from '../assets/svg/MeubleLgIcon';
import ChambreLgIcon from '../assets/svg/ChambreLgIcon';
import FavIcon from '../assets/svg/FavIcon';
import ShareIcon from '../assets/svg/ShareIcon';
import LaverieIcon from '../assets/svg/LaverieIcon';
import VeloIcon from '../assets/svg/VeloIcon';
import AscenseurIcon from '../assets/svg/AscenseurIcon';
import GarageIcon from '../assets/svg/GarageIcon';
import AgenceIcon from '../assets/svg/AgenceIcon';
import CuisineEquipeeIcon from '../assets/svg/CuisineEquipeeIcon';
import SalledebainIcon from '../assets/svg/SalledebainIcon';
import ApollomessageIcon from '../assets/svg/ApollomessageIcon';
import style from '../styles/Propriete';

function Propriete({navigation}) {
  const styles = style();

  const [showModalContact, setShowModalContact] = useState(false);
  const [showModalcandidat1, setShowModalcandidat1] = useState(false);
  const [showModalcandidat2, setShowModalcandidat2] = useState(false);
  const [showModalcandidat3, setShowModalcandidat3] = useState(false);
  const [showModalcandidat4, setShowModalcandidat4] = useState(false);
  
  return (
    <Box flex={1} bg="#FAFAFA">
      {/*MODAL CONTACTER*/}
      <Modal
        isOpen={showModalContact}
        onClose={() => setShowModalContact(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 20,
              }}
              bold>
              Contactez le propriétaire dès à présent
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Center>
              <Image
                size={120}
                alt="Contact Image"
                borderRadius={100}
                source={require('../assets/images/contact.jpg')}
              />
              <Text style={styles.modalText} bold mt={6}>
                Adresse de la propriété
              </Text>
              <Text style={styles.modalText}>
                32, Rue des Champs 75000 Paris
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText} bold>
                  Loyer :
                </Text>{' '}
                550€ CC
              </Text>
              <Text style={styles.modalText} mt={6}>
                <Text style={styles.modalText} bold>
                  Nom du propriétaire :
                </Text>{' '}
                Marie PRIEUR
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText} bold>
                  Email :
                </Text>{' '}
                marie.prieur@gmail.com
              </Text>
              <Text style={styles.modalText}>
                <Text style={styles.modalText} bold>
                  Tel :
                </Text>{' '}
                06.26.73.95.64
              </Text>
              <Button
                size="sm"
                rightIcon={<CircleIcon />}
                style={styles.candidaterButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}
                mt={6}
                endIcon={<ApollomessageIcon />}>
                Messagerie Apollo
              </Button>
            </Center>
          </Modal.Body>
          <Modal.Footer />
        </Modal.Content>
      </Modal>

      {/*MODAL CANDIDATER 1*/}
      <Modal
        isOpen={showModalcandidat1}
        onClose={() => setShowModalcandidat1(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Center>
              <Text style={styles.candidatermodalHeader} bold>
                Emménagez avec Apollo Immo
              </Text>
              <Text style={styles.candidatermodalText} mb={2}>
                Votre candidature n’aura jamais été aussi facile.
              </Text>
            </Center>
            <Text style={styles.candidatermodalTitle} bold>
              1. Créez votre dossier
            </Text>
            <Text style={styles.candidatermodalText} mb={2}>
              Nous vous accompagnons dans la création de votre dossier, vous
              pouvez candidater aux annonces Apollo, envoyer votre dossier à des
              propriétaires extérieurs (leboncoin, agence) ou profitez de nos
              garants. Toutes vos données sont cryptées et détruites au bout de
              1 mois.
            </Text>
            <Text style={styles.candidatermodalTitle} bold>
              2. Candidatez aux appartements en un éclair
            </Text>
            <Text style={styles.candidatermodalText} mb={2}>
              Vous gérez plus facilement vos candidatures en bénéficiant d’un
              suivi en temps réel. Le propriétaire vous contacte pour prendre
              rendez-vous. Vous ne louperez plus aucune visite !{' '}
            </Text>
            <Text style={styles.candidatermodalTitle} bold>
              3. Signez votre contrat depuis votre canapé
            </Text>
            <Text style={styles.candidatermodalText} mb={2}>
              Vous recevez votre bail directement sur la plateforme : vous
              n’avez plus qu’à le signer éléctroniquement. Nous vous
              accompagnons dans la création de vos contrats d’habitation. Louer
              un appartement n’a jamais été aussi facile.
            </Text>
            <Text style={styles.candidatermodalTitle} bold>
              4. Emménagez dans l’appartement de vos rêves
            </Text>
            <Text style={styles.candidatermodalText} mb={2}>
              Votre nouveau propriétaire vous accueil et vous donne les clefs.
              En cas de litige ou de questions, nous restons présents. Profitez
              de votre nouvel appartement sans stress.
            </Text>
            <Center>
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
                    setShowModalcandidat1(false);
                  }}>
                  Fermer
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
                    setShowModalcandidat1(false);
                    setShowModalcandidat2(true);
                  }}>
                  S'inscrire
                </Button>
              </Row>
            </Center>
          </Modal.Header>
        </Modal.Content>
      </Modal>
      {/*MODAL CANDIDATER 2*/}
      <Modal
        isOpen={showModalcandidat2}
        onClose={() => setShowModalcandidat2(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Center>
              <Text style={styles.candidatermodalHeader} bold>
                Paré au decollage !
              </Text>
              <Text style={styles.candidatermodalText} mb={2}>
                Merci de vous inscrire pour candidater.
              </Text>
            </Center>
            <FormControl mb={3}>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'sm'}}>
                Prenom*
              </FormControl.Label>
              <Input size="sm" style={styles.input} />
            </FormControl>
            <FormControl mb={3}>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'sm'}}>
                Nom*
              </FormControl.Label>
              <Input type="password" size="md" style={styles.input} />
            </FormControl>
            <FormControl mb={3}>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'sm'}}>
                Adresse email*
              </FormControl.Label>
              <Input type="password" size="md" style={styles.input} />
            </FormControl>
            <FormControl mb={3}>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'sm'}}>
                Mot de passe*
              </FormControl.Label>
              <Input type="password" size="md" style={styles.input} />
            </FormControl>
            <FormControl mb={2}>
              <FormControl.Label _text={{color: '#3F3D56', fontSize: 'sm'}}>
                Confirmer mot de passe*
              </FormControl.Label>
              <Input type="password" size="sm" style={styles.input} />
            </FormControl>
            <Column alignItems="flex-start">
              <Checkbox value="cgu" style={{fontSize: 5}}>
                J’accepte les CGU/CGV d’Apollo Immo
              </Checkbox>
              <Checkbox value="news" style={{fontSize: 5}}>
                Merci de me tenir au courant des nouveautées d’Apollo
              </Checkbox>
            </Column>
            <Center>
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
                    setShowModalcandidat2(false);
                  }}>
                  Fermer
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
                    setShowModalcandidat2(false);
                    setShowModalcandidat3(true);
                  }}>
                  S'inscrire
                </Button>
              </Row>
            </Center>
          </Modal.Header>
        </Modal.Content>
      </Modal>
      {/*MODAL CANDIDATER 3*/}
      <Modal
        isOpen={showModalcandidat3}
        onClose={() => setShowModalcandidat3(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Center>
              <Text style={styles.candidatermodalHeader} bold>
                Dernière étape !
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                }}
                mb={3}>
                Vous pourrez candidater à des appartements en un instant.
              </Text>
              <FormControl mb={5}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Profession*
                </FormControl.Label>
                <Input size="md" style={styles.input} />
              </FormControl>
              <FormControl mb={5}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Téléphone*
                </FormControl.Label>
                <Input type="password" size="md" style={styles.input} />
              </FormControl>
              <FormControl mb={5}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Date de naissance*
                </FormControl.Label>
                <Input type="password" size="md" style={styles.input} />
              </FormControl>
              <FormControl mb={5}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Lieu de naissance*
                </FormControl.Label>
                <Input type="password" size="md" style={styles.input} />
              </FormControl>
              <FormControl mb={5}>
                <FormControl.Label _text={{color: '#3F3D56', fontSize: 'md'}}>
                  Adresse*
                </FormControl.Label>
                <Input type="password" size="md" style={styles.input} />
              </FormControl>
              <Button
                size="sm"
                style={{
                  width: 160,
                  backgroundColor: '#0B3D91',
                  alignSelf: 'center',
                }}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => {
                  setShowModalcandidat3(false);
                  setShowModalcandidat4(true);
                }}
                my={4}>
                S'inscrire
              </Button>
            </Center>
          </Modal.Header>
        </Modal.Content>
      </Modal>
      {/*MODAL CANDIDATER 4*/}
      <Modal
        isOpen={showModalcandidat4}
        onClose={() => setShowModalcandidat4(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Center>
              <Text style={styles.candidatermodalHeader} bold>
                Candidature instantanée
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Félicitations ! Vous venez de candidater à cet appartement.
              </Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <Text style={styles.candidatermodalText} my={5}>
              Chez Apollo tout se passe sur une seule plateforme et sans frais !
              Que ce soit pour la signature de votre bail ou la création de
              votre dossier, nous sommes là pour vous.
            </Text>
            <Box
              mb={5}
              p={5}
              alignItems="center"
              justifyContent="center"
              style={{
                shadowOffset: {width: 0, height: 6},
                shadowRadius: 10,
                shadowOpacity: 1.0,
                borderRadius: 10,
                elevation: 2,
                backgroundColor: '#FFDA41',
              }}
              shadow={6}>
              <Column space={5} alignItems="center" justifyContent="center">
                <Text
                  fontSize="md"
                  style={{
                    fontWeight: 'bold',
                    color: '#3F3D56',
                  }}>
                  Dossier incomplet
                </Text>
                <Text
                  fontSize="sm"
                  style={{color: '#3F3D56', textAlign: 'center'}}>
                  Veuillez ajouter les documents manquants pour finaliser votre
                  dossier locataire.
                </Text>
                <Button
                  size="sm"
                  style={{
                    width: 170,
                    backgroundColor: '#FFF',
                    borderWidth: 1,
                    borderColor: '#FFF',
                  }}
                  borderRadius="pill"
                  _text={{
                    color: '#3F3D56',
                  }}
                  onPress={() => {
                    setShowModalcandidat4(false);
                    navigation.navigate('Dossier Locataire');
                  }}>
                  Editer mon dossier
                </Button>
              </Column>
            </Box>
            <Button
              size="sm"
              mt={3}
              style={{
                width: 230,
                backgroundColor: '#0B3D91',
                alignSelf: 'center',
              }}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}
              onPress={() => {
                setShowModalcandidat4(false);
                navigation.navigate('Recherche');
              }}>
              Continuer mes recherches
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Row
        px={1}
        py={3}
        justifyContent="space-between"
        alignItems="center"
        ml={2}
        mr={2}>
        <Row space={4} alignItems="center">
          <ArrowBackIcon
            size="md"
            color="#3F3D56"
            onPress={() => navigation.goBack()}
          />
        </Row>
        <Row space={6}>
          <Pressable>
            <ShareIcon  />
          </Pressable>
          <Pressable>
            <FavIcon  />
          </Pressable>
        </Row>
      </Row>
      <ScrollView>
        <Column mt={1} space={6} mx="auto">
          <Column>
            <Carousel style={{marginTop:6}} width={370} height={220}>
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={370}
                height={220}
                style={{
                  borderRadius: 8,
                }}
              />
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={370}
                height={220}
                style={{
                  borderRadius: 8,
                }}
              />
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={370}
                height={220}
                style={{
                  borderRadius: 8,
                }}
              />
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={370}
                height={220}
                style={{
                  borderRadius: 8,
                }}
              />
              <Image
                source={require('../assets/images/appart2.jpg')}
                alt="image base"
                width={370}
                height={220}
                style={{
                  borderRadius: 8,
                }}
              />
            </Carousel>
            <Row
              space={5}
              pl={1}
              pr={1}
              mt={5}
              mb={5}
              justifyContent="space-between">
              <Column>
                <Text fontSize="sm" style={styles.textTown}>
                  Strasbourg
                </Text>
                <Text fontSize="sm" style={styles.Adress} noOfLines={2}>
                  Place de la République
                </Text>
              </Column>
              <Text fontSize="sm" style={styles.textPrice}>
                1400€
              </Text>
            </Row>

            <Row justifyContent="space-evenly">
              <Button
                size="sm"
                style={styles.candidaterButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => setShowModalcandidat1(true)}>
                Candidater
              </Button>
              <Button
                size="sm"
                style={styles.contactButton}
                borderRadius="pill"
                _text={{
                  color: '#0B3D91',
                }}
                onPress={() => setShowModalContact(true)}>
                Contacter
              </Button>
            </Row>

            <Row mt={8} alignItems="center" justifyContent="space-evenly">
              <Column alignItems="center" justifyContent="center">
                <Pressable>
                  <SurfaceLgIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  120 m2
                </Text>
              </Column>
              <Column alignItems="center" justifyContent="center">
                <Pressable>
                  <MeubleLgIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  Meublé
                </Text>
              </Column>
              <Column alignItems="center" justifyContent="center">
                <Pressable>
                  <ChambreLgIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  3 chambres
                </Text>
              </Column>
              <Column alignItems="center" justifyContent="center">
                <Pressable>
                  <LaverieIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  4 pièces
                </Text>
              </Column>
            </Row>

            <Row mt={6} alignItems="center" justifyContent="space-evenly">
              <Column alignItems="center" justifyContent="center">
                <Pressable>
                  <SalledebainIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  1 salle de bain
                </Text>
              </Column>
              <Column alignItems="center" justifyContent="center">
                <Pressable alignItems="center" justifyContent="center" mt={4}>
                  <CuisineEquipeeIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  1 cuisine{'\n'} équipée
                </Text>
              </Column>
              <Column alignItems="center" justifyContent="center">
                <Pressable>
                  <AgenceIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  Agence
                </Text>
              </Column>
              <Column alignItems="center" justifyContent="center">
                <Pressable>
                  <GarageIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  Garage
                </Text>
              </Column>
            </Row>
            <Divider my={6} />
            <Text fontSize="lg" style={styles.descriptionTitle}>
              Les plus de l’immeuble
            </Text>
            <Row
              mt={6}
              space={4}
              alignSelf="flex-start"
              justifyContent="space-evenly">
              <Column alignItems="center">
                <Pressable>
                  <LaverieIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  Laverie
                </Text>
              </Column>
              <Column alignItems="center">
                <Pressable>
                  <AscenseurIcon  width={60} height={60}/>
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  Ascenseur
                </Text>
              </Column>
              <Column alignItems="center">
                <Pressable>
                  <VeloIcon width={60} height={60} />
                </Pressable>
                <Text fontSize="xs" style={styles.IconsText} noOfLines={2}>
                  Local vélo
                </Text>
              </Column>
            </Row>
            <Divider my={6} />

            <Text fontSize="lg" style={styles.descriptionTitle}>
              A propos
            </Text>
            <Text
              fontSize="sm"
              style={styles.descriptionText}
              noOfLines={6}
              mt={6}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five
            </Text>

            <Divider my={6} />
            <Text fontSize="lg" style={styles.descriptionTitle}>
              Informations financières
            </Text>
            <Column mt={6}>
              <Row alignItems="center" justifyContent="space-between" space={6}>
                <Text fontSize="sm" style={styles.textAddress}>
                  Loyer hors charges
                </Text>
                <Text style={styles.textPrice}>1370€</Text>
              </Row>
              <Row alignItems="center" justifyContent="space-between" space={6}>
                <Text fontSize="sm" style={styles.textAddress}>
                  Charges
                </Text>
                <Text style={styles.textPrice}>30€</Text>
              </Row>
              <Row alignItems="center" justifyContent="space-between" space={6}>
                <Text fontSize="sm" style={styles.textAddress}>
                  Loyer avec charges
                </Text>
                <Text style={styles.textPrice}>1400€</Text>
              </Row>
            </Column>

            <Divider my={6} />
            <Text fontSize="lg" style={styles.descriptionTitle}>
              Energie
            </Text>

            <Text fontSize="lg" style={styles.descriptionTitle} mt={6}>
              Diagnostic de performance énergétique
            </Text>

            <Text fontSize="lg" style={styles.descriptionTitle} mt={6}>
              Indice d'émission de gaz a effet de serre
            </Text>

            <Row justifyContent="space-evenly" mt={8}>
              <Button
                size="sm"
                style={styles.candidaterButton}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}>
                Candidater
              </Button>
              <Button
                size="sm"
                style={styles.contactButton}
                borderRadius="pill"
                _text={{
                  color: '#0B3D91',
                }}
                onPress={() => setShowModal(true)}>
                Contacter
              </Button>
            </Row>
          </Column>
        </Column>
        <Box style={styles.mapsArea}>
          <Text style={styles.textAlign}>MAPS</Text>
        </Box>
      </ScrollView>
    </Box>
  );
}



export default Propriete;
