import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    cards: {
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#fff',
    },
    cardStatistics: {
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#fff',
      height: 100,
      width: 170,
    },
    cartText: {
      textAlign: 'center',
      color: '#3F3D56',
      fontWeight: 'bold',
    },
    creerButton: {
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
    creerButton2: {
      backgroundColor: '#0B3D91',
      marginTop: 125,
    },
  });
};

export default styles;
