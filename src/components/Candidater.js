<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <Modal.Content maxWidth="400px">
    <Modal.Header>
      <Text style={styles.modalHeader} bold>
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
        <Text style={styles.modalText}>32, Rue des Champs 75000 Paris</Text>
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
          mt={6}>
          Messagerie Apollo
        </Button>
      </Center>
    </Modal.Body>
    <Modal.Footer />
  </Modal.Content>
</Modal>;

function candidater1() {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
        </Modal.Header>
        <Modal.Body>
          <Text style={styles.candidatermodalTitle} bold>
            1. Créez votre dossier
          </Text>
          <Text style={styles.candidatermodalText} mb={2}>
            Nous vous accompagnons dans la création de votre dossier, vous
            pouvez candidater aux annonces Apollo, envoyer votre dossier à des
            propriétaires extérieurs (leboncoin, agence) ou profitez de nos
            garants. Toutes vos données sont cryptées et détruites au bout de 1
            mois.
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
            Vous recevez votre bail directement sur la plateforme : vous n’avez
            plus qu’à le signer éléctroniquement. Nous vous accompagnons dans la
            création de vos contrats d’habitation. Louer un appartement n’a
            jamais été aussi facile.
          </Text>
          <Text style={styles.candidatermodalTitle} bold>
            4. Emménagez dans l’appartement de vos rêves
          </Text>
          <Text style={styles.candidatermodalText} mb={2}>
            Votre nouveau propriétaire vous accueil et vous donne les clefs. En
            cas de litige ou de questions, nous restons présents. Profitez de
            votre nouvel appartement sans stress.
          </Text>
          <Row space={1}>
            <Button
              size="sm"
              rightIcon={<CircleIcon />}
              style={styles.fermerButton}
              borderRadius="pill"
              _text={{
                color: '#0B3D91',
              }}
              onPress={() => {
                setShowModal(!showModal);
              }}
              mt={6}>
              Fermer
            </Button>
            <Button
              size="sm"
              rightIcon={<CircleIcon />}
              style={styles.candidaterButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}
              onPress={() => navigation.navigate('Propriete')}
              mt={6}>
              S'inscrire
            </Button>
          </Row>
        </Modal.Body>
        <Modal.Footer />
      </Modal.Content>
    </Modal>
  );
}

const styles = StyleSheet.create({
  //Candidater1 modal
  candidatermodalHeader: {
    fontSize: 20,
    marginBottom: 10,
    color: '#225FC7',
  },
  candidatermodalTitle: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 10,
  },
  candidatermodalText: {
    fontSize: 12,
    textAlign: 'justify',
  },
  inscrireButton: {
    width: 160,
    backgroundColor: '#0B3D91',
  },
  fermerButton: {
    width: 160,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#0B3D91',
  },
});
