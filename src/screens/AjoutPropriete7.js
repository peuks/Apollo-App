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
  Select,
  InfoIcon,
  CheckIcon,
  Switch,
  ArrowUpIcon,
  Checkbox,
  SunIcon,
  TextArea,
} from 'native-base';
import style from '../styles/AjoutPropriete7';

function AjoutPropriete7({navigation}) {
  const styles = style();
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
                7/7
              </Text>{' '}
              Description de votre logements
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
          <Text style={styles.textTown} fontSize="lg" mt={2}>
            Description de votre logement
          </Text>
          <Text style={{color: '#3F3D56'}} fontSize="md" mt={1} mb={-1}>
            Description *
          </Text>
          <TextArea
            numberOfLines={8}
            fontSize="md"
            placeholder="Une bonne description favorise l’engagement pour votre bien. Nous vous conseillons de décrire votre logement le plus possible. Mettez en avant ses avantages ainsi que les ceux du quartier. N’hésitez pas à y ajouter une touche personelle. "
            style={styles.input}
            h={173}
            mb={16}
          />

          <Column space={2} mx={2}>
            <Text style={styles.textTown} fontSize={16} my={2}>
              Voulez-vous louer votre bien sur internet ?
            </Text>
            <Row space={1}>
              <Text>Oui</Text>
              <Switch
                size="lg"
                mt={-0.5}
                offTrackColor="#cddefa"
                onTrackColor="#cddefa"
                onThumbColor="#0B3D91"
                offThumbColor="#0B3D91"
              />
              <Text ml={-1}>Non</Text>
            </Row>
            <Row space={2}>
              <Checkbox
                value="test"
                accessibilityLabel="This is a dummy checkbox"
              />
              <Text style={{color: '#000'}} fontSize="sm">
                Cacher mon numéro de téléphone : mes futurs locataires devront
                d’abord m’envoyer leur dossier.
              </Text>
            </Row>
          </Column>

          <Row
            space={2}
            pt={2}
            alignItems="center"
            justifyContent="center"
            mx={2}>
            <Button
              size="md"
              style={styles.ajouterButton}
              borderRadius="pill"
              _text={{
                color: '#0B3D91',
                textAlign: 'center',
              }}
              onPress={() => navigation.navigate('AnnonceEnregistree')}>
              Enregistrer sans publier
            </Button>
            <Button
              size="md"
              style={styles.suivantButton}
              borderRadius="pill"
              _text={{
                color: '#FFF',
              }}
              onPress={() => navigation.navigate('AnnoncePubliee')}>
              Publier
            </Button>
          </Row>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default AjoutPropriete7;