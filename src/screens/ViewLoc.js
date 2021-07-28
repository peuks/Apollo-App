import 'react-native-gesture-handler';
import {G, Path} from 'react-native-svg';
import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NativeBaseProvider,
  View,
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  SearchIcon,
} from 'native-base';
import Search from './Search';
import Favoris from './Favoris';
import DossierLoc from './DossierLoc';
import DossierLocDoc from './DossierLocDoc';
import Message from './Message';
import Espace from './Espace';
import Connexion from './Connexion';
import ViewCarte from './ViewCarte';
import Propriete from './Propriete';
import Compte from './Compte';
import Filtres from './Filtres';
import ViewRecherche from './ViewRecherche';
import ViewPro from './ViewPro';
import CreerDossierLoc from './CreerDossierLoc';
import CreerDossierLoc2 from './CreerDossierLoc2';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//Stack of Screens linked with the search Menu.
function Recherche() {
  return (
    <Stack.Navigator initialRouteName="Recherche">
      <Stack.Screen
        name="Recherche"
        component={Search}
        options={{title: 'Recherche',headerShown: false}}
      />
      <Stack.Screen
        name="ViewCarte"
        component={ViewCarte}
        options={{title: 'ViewCarte',headerShown: false}}
      />
      <Stack.Screen
        name="Propriete"
        component={Propriete}
        options={{title: 'Propriete',headerShown: false}}
      />
      <Stack.Screen
        name="Filtres"
        component={Filtres}
        options={{title: 'Filtres',headerShown: false}}
      />
      <Stack.Screen
        name="ViewRecherche"
        component={ViewRecherche}
        options={{title: 'ViewRecherche',headerShown: false}}
      />
    </Stack.Navigator>
  );
}

//Stack of Screens linked with the Favoris Menu.
function Favori() {
   return (
    <Stack.Navigator initialRouteName="Favoris">
      <Stack.Screen
        name="Favoris"
        component={Favoris}
        options={{title: 'Favoris',headerShown: false}}
      />
    </Stack.Navigator>
  );
}

//Stack of Screens linked with the Dossier Locataire Menu.
function DossierLocataire() {
     return (
    <Stack.Navigator initialRouteName="DossierLoc">
      <Stack.Screen
        name="DossierLoc"
        component={DossierLoc}
        options={{title: 'DossierLoc',headerShown: false}}
      />
      <Stack.Screen
        name="DossierLocDoc"
        component={DossierLocDoc}
        options={{title: 'DossierLocDoc',headerShown: false}}
      />
      <Stack.Screen
        name="CreerDossierLoc"
        component={CreerDossierLoc}
        options={{title: 'CreerDossierLoc',headerShown: false}}
      />
      <Stack.Screen
        name="CreerDossierLoc2"
        component={CreerDossierLoc2}
        options={{title: 'CreerDossierLoc2',headerShown: false}}
      />
    </Stack.Navigator>
  );
}

//Stack of Screens linked with the Message Menu.
function Messages() {}

//Stack of Screens linked with the Mon Espace Menu.
function MonEspace() {
  return (
    <Stack.Navigator initialRouteName="Espace">
      <Stack.Screen
        name="Espace"
        component={Espace}
        options={{title: 'Espace',headerShown: false}}
      />
      <Stack.Screen
        name="Compte"
        component={Compte}
        options={{title: 'Compte',headerShown: false}}
      />
      <Stack.Screen
        name="EspacePro"
        component={ViewPro}
        options={{title: 'Espace proprio',headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ViewLoc({navigation}) {
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        initialRouteName="Recherche"
        tabBarOptions={{
          activeTintColor: '#0B3D91', 
          style:{
            padding:5,
            height:60
            },
          tabStyle:{
            paddingTop:8,
            paddingBottom:8,
          }}}
        >
        <Tab.Screen
          name="Recherche"
          component={Recherche}
          options={{
            tabBarIcon: ({color, size}) => (
              <SearchIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoris"
          component={Favori}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 26, height: 26}}
                source={require('../assets/icons/fav.png')}
                alt="MySpace"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Dossier Locataire"
          component={DossierLocataire}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 26, height: 26}}
                source={require('../assets/icons/dossier.png')}
                alt="DossierLocataire"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={Connexion}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 26, height: 26}}
                source={require('../assets/icons/message.png')}
                alt="MySpace"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Mon espace"
          component={MonEspace}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 26, height: 26}}
                source={require('../assets/icons/profile.png')}
                alt="MySpace"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  appoloIcon: {
    opacity: 0.6,
    //transform: matrix(0.74, 0.67, -0.67, 0.74, 0, 0),
  },
});
export default ViewLoc;
