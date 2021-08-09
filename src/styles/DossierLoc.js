import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    cards: {
      backgroundColor: '#fff',
      borderRadius: 16,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#fff',
    },
    fileUploadCards: {
      backgroundColor: '#0B3D91',
      borderRadius: 10,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#0B3D91',
    },
    searchBar: {},
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
    IconsText: {
      color: '#3F3D56',
      textAlign: 'center',
    },
  });
};

export default styles;
