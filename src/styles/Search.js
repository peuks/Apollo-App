import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    searchBar: {
      elevation: 2,
      backgroundColor: '#fff',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#fff',
    },
    iconAdress: {
      width: 20,
      height: 20,
    },
    cards: {
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#fff',
    },
    candidaterButton: {
      width: 160,
      backgroundColor: '#0B3D91',
      borderWidth: 1,
      borderColor: '#0B3D91',
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
};

export default styles;
