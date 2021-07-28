function contacter(params) {
  return(
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
    </Modal>
  );
}
