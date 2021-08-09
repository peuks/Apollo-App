import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    editerButton: {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#0B3D91',
      width: 160,
    },
    IconsText: {
      color: '#3F3D56',
      textAlign: 'center',
    },
    cards: {
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#fff',
    },
    candidatureCards: {
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 1,
      borderWidth: 1,
      borderColor: '#fff',
    },
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
    descriptionTitle: {
      textAlign: 'left',
      fontWeight: 'bold',
      color: '#3F3D56',
    },
    descriptionText: {
      color: '#3F3D56',
      textAlign: 'justify',
      alignItems: 'flex-start',
      width: 360,
    },
    container: {
      flexDirection: 'row',
    },

    planifierButton: {
      backgroundColor: '#0B3D91',
      borderWidth: 1,
      borderColor: '#0B3D91',
    },
    genererButton: {
      width: 140,
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#0B3D91',
    },
    descriptionTitle: {
      textAlign: 'center',
      fontSize: 20,
    },
    descriptionText: {
      fontSize: 16,
      color: '#3F3D56',
      textAlign: 'center',
    },
    descriptionButton: {
      width: 240,
      backgroundColor: '#0B3D91',
      alignSelf: 'center',
      marginBottom: 40,
    },
  });
};

export default styles;
