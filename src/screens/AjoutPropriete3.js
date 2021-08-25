import React, {useState} from 'react';
import {Formik} from 'formik';
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
  Pressable,
  Divider,
  SunIcon,
} from 'native-base';
import MeubleLgIcon from '../assets/svg/MeubleLgIcon';
import LaverieIcon from '../assets/svg/LaverieIcon';
import VeloIcon from '../assets/svg/VeloIcon';
import ConciergeIcon from '../assets/svg/ConciergeIcon';
import AscenseurIcon from '../assets/svg/AscenseurIcon';
import GarageIcon from '../assets/svg/GarageIcon';
import CuisineEquipeeIcon from '../assets/svg/CuisineEquipeeIcon';
import SalledesportIcon from '../assets/svg/SalledesportIcon';
import JardinIcon from '../assets/svg/JardinIcon';
import ParkingIcon from '../assets/svg/ParkingIcon';
import CaveIcon from '../assets/svg/CaveIcon';
import GrenierIcon from '../assets/svg/GrenierIcon';
import InternetIcon from '../assets/svg/InternetIcon';
import TerrasseIcon from '../assets/svg/TerrasseIcon';
import LavevaisselleIcon from '../assets/svg/LavevaisselleIcon';
import BalconIcon from '../assets/svg/BalconIcon';
import BellevueIcon from '../assets/svg/BellevueIcon';
import OrientesudIcon from '../assets/svg/OrientesudIcon';
import style from '../styles/AjoutPropriete3';

function AjoutPropriete3({navigation}) {
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
                3/7
              </Text>{' '}
              Les agréments
            </Text>
          </Row>
          <Row space={2}>
            <Column alignItems="center">
              <View />
            </Column>
          </Row>
        </Row>
        <Divider style={{width: '42%'}} h={1} bg="#FFDA41" />
      </Column>

      <ScrollView>
        <Column mt={2} mx={4} space={5}>
          <Text style={styles.textTown} fontSize={20} my={2}>
            Les agréments
          </Text>
          <Row justifyContent="space-between">
            <Pressable>
              <Column alignItems="center">
                <MeubleLgIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Meublé
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <LavevaisselleIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Machine à{"\n"} laver
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <OrientesudIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Orienté sud
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <BellevueIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Belle vue
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <CuisineEquipeeIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Cuisine{"\n"} équipée
                </Text>
              </Column>
            </Pressable>
          </Row>
          <Row space={5} justifyContent="flex-start" >
            <Pressable>
              <Column alignItems="center">
                <BalconIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Balcon
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <TerrasseIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Terrasse
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <InternetIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Internet{"\n"}inclus
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <LavevaisselleIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Lave{"\n"}vaisselle
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <View/>
            </Pressable>
            
          </Row>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Les autres parties
          </Text>
          <Row justifyContent="space-between">
            <Pressable>
              <Column alignItems="center">
                <GrenierIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Grenier
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <GarageIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Garage
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <CaveIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Cave
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <ParkingIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Parking
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <JardinIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Jardin
                </Text>
              </Column>
            </Pressable>
          </Row>

          <Text style={styles.textTown} fontSize={20} my={2}>
            Les plus de votre immeuble
          </Text>
          <Row justifyContent="space-between">
            <Pressable>
              <Column alignItems="center">
                <SalledesportIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Salle{"\n"}de sport
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <ConciergeIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Concierge
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <LaverieIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Laverie
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <AscenseurIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Ascenseur
                </Text>
              </Column>
            </Pressable>
            <Pressable>
              <Column alignItems="center">
                <VeloIcon width={60} height={60} />
                <Text fontSize="sm" style={styles.IconsText} noOfLines={2}>
                  Local vélo
                </Text>
              </Column>
            </Pressable>
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
            onPress={() => navigation.navigate('AjoutPropriete4')}
            //onPress={handleSubmit}
            >
            Suivant
          </Button>
        </Column>
      </ScrollView>
    </Box>
  );
}

export default AjoutPropriete3;