import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  NativeBaseProvider,
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  SearchIcon,
  SunIcon,
  ArrowUpIcon,
  Input,
  Stack,
  View,
  ScrollView,
  Pressable,
  Modal,
  Center,
  CircleIcon,
} from 'native-base';

function DossierLoc({navigation}) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <Box flex={1} bg="#0B3D91">
      {/*MODAL PARTAGER*/}
      <Modal isOpen={showShareModal} onClose={() => setShowShareModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Center>
              <Text
                style={{fontSize: 20, marginBottom: 5, color: '#225FC7'}}
                bold>
                Partager votre dossier
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Candidater à un appartement n’aura jamais été aussi facile.
              </Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
              }}
              my={5}>
              Vous pouvez copier ce texte afin d’envoyer votre dossier à des
              propriétaires qui ne sont pas chez Apollo. Il vous suffit de leur
              envoyer directement le texte ci-joint. Démarquez-vous des autres
              candidats !
            </Text>
            <Box
              mb={5}
              p={3}
              alignItems="center"
              justifyContent="center"
              style={{
                shadowOffset: {width: 0, height: 6},
                shadowRadius: 10,
                shadowOpacity: 1.0,
                borderRadius: 10,
                elevation: 2,
                backgroundColor: '#FFF',
                borderWidth: 1,
                borderColor: '#000',
              }}
              shadow={6}>
              <Text fontSize="md" style={{color: '#000', textAlign: 'left'}}>
                Madame, Monsieur,{'\n\n'}
                Je suis très intéressé par votre appartement en location.
                Veuillez trouver via ce lien mon dossier de location. "lien
                dossier" {'\n'}
                Je me tiens à votre disposition si vous avez d’autres questions.
              </Text>
            </Box>
            <Button
              size="sm"
              my={4}
              style={{
                width: 160,
                backgroundColor: '#0B3D91',
                alignSelf: 'center',
              }}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}>
              Copier le texte
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      {/*MODAL EDITER*/}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Header>
            <Center>
              <Text
                style={{fontSize: 20, marginBottom: 5, color: '#225FC7'}}
                bold>
                Modifier votre dossier
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  marginBottom: 30,
                }}>
                Quelle action voulez-vous effectuer ?
              </Text>
              <Button
                size="md"
                mt={4}
                mb={3}
                style={{
                  backgroundColor: '#0B3D91',
                  alignSelf: 'center',
                }}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => {
                  setShowEditModal(false);
                  navigation.navigate('DossierLocDoc');
                }}>
                Modifier mes documents
              </Button>
              <Button
                size="md"
                mb={6}
                style={{
                  backgroundColor: '#0B3D91',
                  alignSelf: 'center',
                }}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => {
                  setShowEditModal(false);
                  navigation.navigate('CreerDossierLoc');
                }}>
                Modifier mes informations
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
        mr={2}
        mt={2}>
        <Row space={2} alignItems="center">
          <View />
        </Row>
        <Row space={2}>
          <Text color="#FFFFFF" fontSize={20} fontWeight="bold">
            Dossier de Marie
          </Text>
        </Row>
        <Row space={2}>
          <Column alignItems="center">
            <ArrowUpIcon
              style={{color: '#fff'}}
              onPress={() => setShowShareModal(true)}
            />
          </Column>
        </Row>
      </Row>
      <ScrollView>
        <Column my={6} mx={6}>
          <Box
            mb={5}
            shadow={3}
            p={5}
            alignItems="center"
            justifyContent="center"
            style={{
              shadowOffset: {width: 0, height: 6},
              shadowRadius: 10,
              shadowOpacity: 1.0,
              borderRadius: 16,
              elevation: 5,
              backgroundColor: '#FFDA41',
            }}
            shadow={6}>
            <Column space={5} alignItems="center" justifyContent="center">
              <Text
                fontSize="xl"
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
                size="lg"
                style={{
                  width: 220,
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  borderColor: '#FFF',
                  elevation: 5,
                }}
                borderRadius="pill"
                _text={{
                  color: '#000',
                }}
                onPress={() => setShowEditModal(true)}>
                Editer mon dossier
              </Button>
            </Column>
          </Box>
          <Text
            fontSize="xl"
            my={6}
            style={{
              fontWeight: 'bold',
              color: '#FFF',
            }}>
            Locataire
          </Text>
          <Box mb={5} justifyContent="flex-end" style={styles.cards} shadow={6}>
            <Column space={5} m={6}>
              <Image
                size={100}
                alt="Contact Image"
                borderRadius={100}
                style={{marginTop: -70, alignSelf: 'center'}}
                source={require('../assets/images/contact.jpg')}
              />
              <Column>
                <Row justifyContent="space-between">
                  <Column>
                    <Text
                      style={{
                        fontSize: 25,
                      }}
                      bold>
                      Marie Prieur
                    </Text>
                    <Text style={{}}>Etudiante, avec garant</Text>
                  </Column>
                  <Row space={1} justifyContent="center">
                    <SunIcon size="sm" mt={2} />
                    <Text
                      mt={2}
                      style={{
                        color: '#000',
                        fontSize: 20,
                      }}>
                      4,5 (2)
                    </Text>
                  </Row>
                </Row>
              </Column>

              <Column>
                <Text style={{fontSize: 14, color: '#0B3D91'}} bold>
                  Ressources financières
                </Text>
                <Text style={{fontSize: 14, color: '#0B3D91'}}>
                  Locataire : 0€
                </Text>
                <Text style={{fontSize: 14, color: '#0B3D91'}}>
                  Garant : 80 000€ brut / an
                </Text>
              </Column>
              <Column>
                <Text style={{fontSize: 14, color: '#3F3D56'}} bold>
                  Téléphone
                </Text>
                <Text style={{fontSize: 14, color: '#3F3D56'}}>
                  06.32.44.22.34
                </Text>
              </Column>
              <Column>
                <Text style={{fontSize: 14, color: '#3F3D56'}} bold>
                  Email
                </Text>
                <Text style={{fontSize: 14, color: '#3F3D56'}}>
                  marie.prieur@gmail.com
                </Text>
              </Column>
              <Column>
                <Text style={{fontSize: 14, color: '#3F3D56'}} bold>
                  Adresse
                </Text>
                <Text style={{fontSize: 14, color: '#3F3D56'}}>
                  4 rue de la république, 75010 Paris
                </Text>
              </Column>
              <Column>
                <Text style={{fontSize: 14, color: '#3F3D56'}} bold>
                  Description
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#3F3D56',
                    textAlign: 'justify',
                  }}>
                  Nulla at ornare neque, at mattis velit. Duis magna sapien,
                  aliquam a facilisis vel, eleifend sed lectus. Nullam a
                  suscipit dolor. Quisque sit amet lorem accumsan, vulputate
                  lectus at, sollicitudin sapien.
                </Text>
              </Column>

              <Text
                mt={2}
                style={{
                  fontSize: 20,
                }}
                bold>
                Documents
              </Text>
              <Column space={4}>
                <Pressable
                  justifyContent="flex-end"
                  style={styles.fileUploadCards}
                  shadow={6}>
                  <Row justifyContent="space-between" my={4} px={3}>
                    <Text
                      fontSize="md"
                      style={{
                        color: '#FFF',
                      }}>
                      Pièce d'identité ou passeport
                    </Text>
                    <SunIcon size="sm" />
                  </Row>
                </Pressable>
                <Pressable
                  justifyContent="flex-end"
                  style={styles.fileUploadCards}
                  shadow={6}>
                  <Row justifyContent="space-between" my={4} px={3}>
                    <Text
                      fontSize="md"
                      style={{
                        color: '#FFF',
                      }}>
                      3 derniers bulletins de salaire
                    </Text>
                    <SunIcon size="sm" />
                  </Row>
                </Pressable>
                <Pressable
                  justifyContent="flex-end"
                  style={styles.fileUploadCards}
                  shadow={6}>
                  <Row justifyContent="space-between" my={4} px={3}>
                    <Text
                      fontSize="md"
                      style={{
                        color: '#FFF',
                      }}>
                      2 derniers bilans
                    </Text>
                    <SunIcon size="sm" />
                  </Row>
                </Pressable>
                <Pressable
                  justifyContent="flex-end"
                  style={styles.fileUploadCards}
                  shadow={6}>
                  <Row justifyContent="space-between" my={4} px={3}>
                    <Text
                      fontSize="md"
                      style={{
                        color: '#FFF',
                      }}>
                      Justificatif de domicile
                    </Text>
                    <SunIcon size="sm" />
                  </Row>
                </Pressable>
                <Pressable
                  justifyContent="flex-end"
                  style={styles.fileUploadCards}
                  shadow={6}>
                  <Row justifyContent="space-between" my={4} px={3}>
                    <Text
                      fontSize="md"
                      style={{
                        color: '#FFF',
                      }}>
                      Avis d'imposition
                    </Text>
                    <SunIcon size="sm" />
                  </Row>
                </Pressable>
                <Pressable
                  justifyContent="flex-end"
                  style={styles.fileUploadCards}
                  shadow={6}>
                  <Row justifyContent="space-between" my={4} px={3}>
                    <Text
                      fontSize="md"
                      style={{
                        color: '#FFF',
                      }}>
                      Contrat
                    </Text>
                    <SunIcon size="sm" />
                  </Row>
                </Pressable>
                <Pressable
                  justifyContent="flex-end"
                  style={styles.fileUploadCards}
                  shadow={6}>
                  <Row justifyContent="space-between" my={4} px={3}>
                    <Text
                      fontSize="md"
                      style={{
                        color: '#FFF',
                      }}>
                      Carte d'étudiant
                    </Text>
                    <SunIcon size="sm" />
                  </Row>
                </Pressable>
                <Pressable
                  justifyContent="flex-end"
                  style={styles.fileUploadCards}
                  shadow={6}>
                  <Row justifyContent="space-between" my={4} px={3}>
                    <Text
                      fontSize="md"
                      style={{
                        color: '#FFF',
                      }}>
                      Quittance de loyer
                    </Text>
                    <SunIcon size="sm" />
                  </Row>
                </Pressable>
              </Column>
            </Column>
          </Box>
        </Column>
        <Column bg="#FAFAFA">
          <Column mx={6} my={6} space={5}>
            <Text
              fontSize="xl"
              mt={4}
              style={{
                fontWeight: 'bold',
                color: '#3F3D56',
              }}>
              Garant 1
            </Text>
            <Box
              mb={5}
              justifyContent="flex-end"
              style={styles.cards}
              shadow={6}>
              <Column space={5} m={6}>
                <Column>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                    bold>
                    Thomas Prieur
                  </Text>
                  <Text style={{}}>Banquier</Text>
                </Column>

                <Column>
                  <Text style={{fontSize: 14, color: '#0B3D91'}} bold>
                    Ressources financières
                  </Text>
                  <Text style={{fontSize: 14, color: '#0B3D91'}}>
                    Garant : 80 000€ brut / an
                  </Text>
                </Column>
                <Column>
                  <Text style={{fontSize: 14, color: '#3F3D56'}} bold>
                    Téléphone
                  </Text>
                  <Text style={{fontSize: 14, color: '#3F3D56'}}>
                    06.32.44.22.34
                  </Text>
                </Column>
                <Column>
                  <Text style={{fontSize: 14, color: '#3F3D56'}} bold>
                    Email
                  </Text>
                  <Text style={{fontSize: 14, color: '#3F3D56'}}>
                    thomas.prieur@gmail.com
                  </Text>
                </Column>
                <Column>
                  <Text style={{fontSize: 14, color: '#3F3D56'}} bold>
                    Adresse
                  </Text>
                  <Text style={{fontSize: 14, color: '#3F3D56'}}>
                    4 rue de la république, 75010 Paris
                  </Text>
                </Column>

                <Text
                  mt={2}
                  style={{
                    fontSize: 20,
                  }}
                  bold>
                  Documents
                </Text>
                <Column space={4}>
                  <Pressable
                    justifyContent="flex-end"
                    style={styles.fileUploadCards}
                    shadow={6}>
                    <Row justifyContent="space-between" my={4} px={3}>
                      <Text
                        fontSize="md"
                        style={{
                          color: '#FFF',
                        }}>
                        Pièce d'identité ou passeport
                      </Text>
                      <SunIcon size="sm" />
                    </Row>
                  </Pressable>
                  <Pressable
                    justifyContent="flex-end"
                    style={styles.fileUploadCards}
                    shadow={6}>
                    <Row justifyContent="space-between" my={4} px={3}>
                      <Text
                        fontSize="md"
                        style={{
                          color: '#FFF',
                        }}>
                        3 derniers bulletins de salaire
                      </Text>
                      <SunIcon size="sm" />
                    </Row>
                  </Pressable>
                  <Pressable
                    justifyContent="flex-end"
                    style={styles.fileUploadCards}
                    shadow={6}>
                    <Row justifyContent="space-between" my={4} px={3}>
                      <Text
                        fontSize="md"
                        style={{
                          color: '#FFF',
                        }}>
                        2 derniers bilans
                      </Text>
                      <SunIcon size="sm" />
                    </Row>
                  </Pressable>
                  <Pressable
                    justifyContent="flex-end"
                    style={styles.fileUploadCards}
                    shadow={6}>
                    <Row justifyContent="space-between" my={4} px={3}>
                      <Text
                        fontSize="md"
                        style={{
                          color: '#FFF',
                        }}>
                        Justificatif de domicile
                      </Text>
                      <SunIcon size="sm" />
                    </Row>
                  </Pressable>
                  <Pressable
                    justifyContent="flex-end"
                    style={styles.fileUploadCards}
                    shadow={6}>
                    <Row justifyContent="space-between" my={4} px={3}>
                      <Text
                        fontSize="md"
                        style={{
                          color: '#FFF',
                        }}>
                        Avis d'imposition
                      </Text>
                      <SunIcon size="sm" />
                    </Row>
                  </Pressable>
                  <Pressable
                    justifyContent="flex-end"
                    style={styles.fileUploadCards}
                    shadow={6}>
                    <Row justifyContent="space-between" my={4} px={3}>
                      <Text
                        fontSize="md"
                        style={{
                          color: '#FFF',
                        }}>
                        Contrat
                      </Text>
                      <SunIcon size="sm" />
                    </Row>
                  </Pressable>
                  <Pressable
                    justifyContent="flex-end"
                    style={styles.fileUploadCards}
                    shadow={6}>
                    <Row justifyContent="space-between" my={4} px={3}>
                      <Text
                        fontSize="md"
                        style={{
                          color: '#FFF',
                        }}>
                        Quittance de loyer
                      </Text>
                      <SunIcon size="sm" />
                    </Row>
                  </Pressable>
                </Column>
              </Column>
            </Box>
            <Column space={4} mb={4}>
              <Row space={2} justifyContent="center">
                <SunIcon size="sm" mt={2} />
                <Text
                  mt={2}
                  style={{
                    fontSize: 20,
                  }}
                  bold>
                  4,5 (2 commentaires)
                </Text>
              </Row>
              <Box justifyContent="flex-end" style={styles.cards} shadow={6}>
                <Column space={5} m={6}>
                  <Row justifyContent="space-between">
                    <Column>
                      <Text
                        style={{
                          fontSize: 20,
                        }}
                        bold>
                        Bernard
                      </Text>
                      <Text style={{color: '#3F3D56'}}>septembre 2020</Text>
                    </Column>
                    <Row space={1}>
                      <SunIcon size="sm" />
                      <SunIcon size="sm" />
                      <SunIcon size="sm" />
                      <SunIcon size="sm" />
                      <SunIcon size="sm" />
                    </Row>
                  </Row>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#3F3D56',
                      textAlign: 'justify',
                    }}>
                    J’ai eu Marie en location de mon studio pendant 2 ans.
                    Toujours à jour sur les loyers, appartement laissé intact à
                    la sortie de location. Marie est une personne très sérieuse
                    et intègre. Je recommande son profil à 100% !
                  </Text>
                </Column>
              </Box>
              <Box justifyContent="flex-end" style={styles.cards} shadow={6}>
                <Column space={5} m={6}>
                  <Row justifyContent="space-between">
                    <Column>
                      <Text
                        style={{
                          fontSize: 20,
                        }}
                        bold>
                        Béatrice
                      </Text>
                      <Text style={{color: '#3F3D56'}}>mai 2020</Text>
                    </Column>
                    <Row space={1}>
                      <SunIcon size="sm" />
                      <SunIcon size="sm" />
                      <SunIcon size="sm" />
                      <SunIcon size="sm" />
                      <SunIcon size="sm" />
                    </Row>
                  </Row>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#3F3D56',
                      textAlign: 'justify',
                    }}>
                    J’ai eu Marie en location de mon appartement pendant 1 an.
                    Rien à dire sur la tenue de l’appartement, très propre et
                    respectueuse. Seul bémol, on avait parlé d’une location
                    longue durée (+ de 3 ans) et elle est partie au bout d’un
                    an.
                  </Text>
                </Column>
              </Box>
            </Column>
            <Column space={4} my={5}>
              <Text
                mt={2}
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                }}
                bold>
                Apollo Immo {'\n'} vous accomagne
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#3F3D56',
                  textAlign: 'center',
                }}>
                Apollo Immo est une plateforme permettant de vous aider dans la
                gestion et la commercialisation de votre location immobilière.
                Vous pouvez dès à présent utiliser notre générateur de contrat
                afin de créer gratuitement vos baux et actes de cautionnement.
              </Text>
              <Button
                size="lg"
                style={{
                  width: 240,
                  backgroundColor: '#0B3D91',
                  alignSelf: 'center',
                  marginBottom: 40,
                }}
                borderRadius="pill"
                _text={{
                  color: '#FFF',
                }}
                onPress={() => navigation.navigate('Propriete')}>
                Generer un contrat
              </Button>
            </Column>
          </Column>
        </Column>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {},
  cards: {
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  fileUploadCards: {
    backgroundColor: '#0B3D91',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  searchBar: {},
  cartText: {
    textAlign: 'center',
    color: '#3F3D56',
    fontWeight: 'bold',
  },
  candidaterButton: {
    width: 160,
    backgroundColor: '#0B3D91',
  },
  contactButton: {
    width: 160,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
  textTown: {
    fontWeight: 'bold',
    color: '#3F3D56',
  },
  textAdress: {
    color: '#3F3D56',
  },
  textPrice: {
    color: '#3F3D56',
    fontWeight: 'bold',
    marginTop: 10,
  },
  IconsText: {
    color: '#3F3D56',
    textAlign: 'center',
  },
});

export default DossierLoc;
