import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider, Icon, Image} from 'native-base';
import MessagePro from './MessagePro';
import MessageProContent from './MessageProContent';
import EspacePro from './EspacePro';
import Contrat from './Contrat';
import EtatDesLieux from './EtatDesLieux';
import ComptePro from './ComptePro';
import ProprietePro from './ProprietePro';
import ProprieteProLouee from './ProprieteProLouee';
import GenererBail from './GenererBail';
import PlanningVisite from './PlanningVisite';
import CreationContrat_1 from './CreationContrat_1';
import CreationContrat_2 from './CreationContrat_2';
import CreationContrat_3 from './CreationContrat_3';
import CreationContrat_4 from './CreationContrat_4';
import AjoutPropriete from './AjoutPropriete';
import AjoutPropriete2 from './AjoutPropriete2';
import AjoutPropriete3 from './AjoutPropriete3';
import AjoutPropriete4 from './AjoutPropriete4';
import AjoutPropriete5 from './AjoutPropriete5';
import AjoutPropriete61 from './AjoutPropriete61';
import AjoutPropriete62 from './AjoutPropriete62';
import AjoutPropriete7 from './AjoutPropriete7';
import AnnonceEnregistree from './AnnonceEnregistree';
import AnnoncePubliee from './AnnoncePubliee';
import CreerEtat from './CreerEtat';
import CreerEtat2 from './CreerEtat2';
import CreerEtat3 from './CreerEtat3';
import CreerEtatBien from './CreerEtatBien';
import CreerEtatSortie from './CreerEtatSortie';
import CreerEtatSortie2 from './CreerEtatSortie2';
import DevisCheckVisit from './DevisCheckVisit';
import DevisCheckVisit2 from './DevisCheckVisit2';
import ListeCandidaturePro from './ListeCandidaturePro';
import MessageIcon from '../assets/svg/MessageIcon';
import ProfileIcon from '../assets/svg/ProfileIcon';
import AddIcon from '../assets/svg/AddIcon';
import ContractIcon from '../assets/svg/ContractIcon';
import InventoryIcon from '../assets/svg/InventoryIcon';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//Stack of Screens linked with the ETAT DES LIEUX Menu.
function EtatDesLieux_() {
  return (
    <Stack.Navigator initialRouteName="EtatDesLieux">
      <Stack.Screen
        name="EtatDesLieux"
        component={EtatDesLieux}
        options={{title: 'Etat Des Lieux', headerShown: false}}
      />
      <Stack.Screen
        name="CreerEtat"
        component={CreerEtat}
        options={{title: 'CreerEtat', headerShown: false}}
      />
      <Stack.Screen
        name="CreerEtat2"
        component={CreerEtat2}
        options={{title: 'CreerEtat2', headerShown: false}}
      />
      <Stack.Screen
        name="CreerEtat3"
        component={CreerEtat3}
        options={{title: 'CreerEtat3', headerShown: false}}
      />
      <Stack.Screen
        name="CreerEtatBien"
        component={CreerEtatBien}
        options={{title: 'CreerEtatBien', headerShown: false}}
      />
      <Stack.Screen
        name="DevisCheckVisit"
        component={DevisCheckVisit}
        options={{title: 'DevisCheckVisit', headerShown: false}}
      />
      <Stack.Screen
        name="DevisCheckVisit2"
        component={DevisCheckVisit2}
        options={{title: 'DevisCheckVisit2', headerShown: false}}
      />
      <Stack.Screen
        name="CreerEtatSortie"
        component={CreerEtatSortie}
        options={{title: 'CreerEtatSortie', headerShown: false}}
      />
      <Stack.Screen
        name="CreerEtatSortie2"
        component={CreerEtatSortie2}
        options={{title: 'CreerEtatSortie2', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

//Stack of Screens linked with the CONTRAT Menu.
function Contrat_() {
  return (
    <Stack.Navigator initialRouteName="Contrat">
      <Stack.Screen
        name="Contrat"
        component={Contrat}
        options={{title: 'Contrat', headerShown: false}}
      />
      <Stack.Screen
        name="CreationContrat_1"
        component={CreationContrat_1}
        options={{title: 'CreationContrat_1', headerShown: false}}
      />
      <Stack.Screen
        name="CreationContrat_2"
        component={CreationContrat_2}
        options={{title: 'CreationContrat_2', headerShown: false}}
      />
      <Stack.Screen
        name="CreationContrat_3"
        component={CreationContrat_3}
        options={{title: 'CreationContrat_3', headerShown: false}}
      />
      <Stack.Screen
        name="CreationContrat_4"
        component={CreationContrat_4}
        options={{title: 'CreationContrat_4', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

//Stack of Screens linked with the AJOUTER PROPRIETE Menu.
function AjouterPropriete_() {
  return (
    <Stack.Navigator initialRouteName="AjoutPropriete">
      <Stack.Screen
        name="AjoutPropriete"
        component={AjoutPropriete}
        options={{title: 'AjoutPropriete', headerShown: false}}
      />
      <Stack.Screen
        name="AjoutPropriete2"
        component={AjoutPropriete2}
        options={{title: 'AjoutPropriete2', headerShown: false}}
      />
      <Stack.Screen
        name="AjoutPropriete3"
        component={AjoutPropriete3}
        options={{title: 'AjoutPropriete3', headerShown: false}}
      />
      <Stack.Screen
        name="AjoutPropriete4"
        component={AjoutPropriete4}
        options={{title: 'AjoutPropriete4', headerShown: false}}
      />
      <Stack.Screen
        name="AjoutPropriete5"
        component={AjoutPropriete5}
        options={{title: 'AjoutPropriete5', headerShown: false}}
      />
      <Stack.Screen
        name="AjoutPropriete61"
        component={AjoutPropriete61}
        options={{title: 'AjoutPropriete61', headerShown: false}}
      />
      <Stack.Screen
        name="AjoutPropriete62"
        component={AjoutPropriete62}
        options={{title: 'AjoutPropriete62', headerShown: false}}
      />
      <Stack.Screen
        name="AjoutPropriete7"
        component={AjoutPropriete7}
        options={{title: 'AjoutPropriete7', headerShown: false}}
      />
      <Stack.Screen
        name="AnnonceEnregistree"
        component={AnnonceEnregistree}
        options={{title: 'AnnonceEnregistree', headerShown: false}}
      />
      <Stack.Screen
        name="AnnoncePubliee"
        component={AnnoncePubliee}
        options={{title: 'AnnoncePubliee', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

//Stack of Screens linked with the Message Menu.
function Messages() {
  return (
    <Stack.Navigator initialRouteName="Message">
      <Stack.Screen
        name="Message"
        component={MessagePro}
        options={{title: 'Message', headerShown: false}}
      />
      <Stack.Screen
        name="MessageProContent"
        component={MessageProContent}
        options={{title: 'MessageProContent', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

//Stack of Screens linked with the Mon Espace Menu.
function MonEspace() {
  return (
    <Stack.Navigator initialRouteName="Espace">
      <Stack.Screen
        name="Espace"
        component={EspacePro}
        options={{title: 'Espace', headerShown: false}}
      />
      <Stack.Screen
        name="Compte"
        component={ComptePro}
        options={{title: 'Compte', headerShown: false}}
      />
      <Stack.Screen
        name="ListeCandidaturePro"
        component={ListeCandidaturePro}
        options={{title: 'ListeCandidaturePro', headerShown: false}}
      />
      <Stack.Screen
        name="ProprietePro"
        component={ProprietePro}
        options={{title: 'ProprietePro', headerShown: false}}
      />
      <Stack.Screen
        name="ProprieteProLouee"
        component={ProprieteProLouee}
        options={{title: 'ProprieteProLouee', headerShown: false}}
      />
      <Stack.Screen
        name="GenererBail"
        component={GenererBail}
        options={{title: 'GenererBail', headerShown: false}}
      />
      <Stack.Screen
        name="PlanningVisite"
        component={PlanningVisite}
        options={{title: 'PlanningVisite', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ViewPro({navigation}) {
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        initialRouteName="Mon espace"
        tabBarOptions={{
          activeTintColor: '#0B3D91',
          style: {
            padding: 5,
            height: 60,
          },
          tabStyle: {
            paddingTop: 8,
            paddingBottom: 8,
          },
        }}>
        <Tab.Screen
          name="Etat des lieux"
          component={EtatDesLieux_}
          options={{
            tabBarIcon: ({color, size}) => <InventoryIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Contrat"
          component={Contrat_}
          options={{
            tabBarIcon: ({color, size}) => <ContractIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Ajouter propriété"
          component={AjouterPropriete_}
          options={{
            tabBarIcon: ({color, size}) => <AddIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Message"
          component={Messages}
          options={{
            tabBarIcon: ({color, size}) => <MessageIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Mon espace"
          component={MonEspace}
          options={{
            tabBarIcon: ({color, size}) => <ProfileIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}

export default ViewPro;
