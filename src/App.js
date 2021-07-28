import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  ViewPro,
  ViewLoc,
  Connexion,
  Propriete,
  PasswordForgot,
  Search,
  Favoris,
  DossierLoc,
  Message,
  Espace,
  ViewCarte,
} from './screens';

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{title: 'Splash', headerShown: false}}
        />
        <Stack.Screen
          name="ViewPro"
          component={ViewPro}
          options={{title: 'Propriétaire',headerShown: false}}
        />
        <Stack.Screen
          name="ViewLoc"
          component={ViewLoc}
          options={{title: 'Locataire', headerShown: false}}
        />
        <Stack.Screen
          name="Connexion"
          component={Connexion}
          options={{title: 'Connexion', headerShown: false}}
        />
        <Stack.Screen
          name="PasswordForgot"
          component={PasswordForgot}
          options={{title: 'Mot de passe oublié'}}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{title: 'Message'}}
        />
        <Stack.Screen
          name="Favoris"
          component={Favoris}
          options={{title: 'Favoris'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
