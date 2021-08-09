import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    cards: {
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 10,
      shadowOpacity: 1.0,
      borderRadius: 10,
      elevation: 5,
    },
    searchBar: {
      borderColor: '#000',
    },
    input: {
      borderColor: '#000',
    },
    select: {
      borderColor: '#000',
      width: 50,
    },
    cartText: {
      textAlign: 'center',
      color: '#3F3D56',
      fontWeight: 'bold',
    },
    suivantButton: {
      width: 200,
      backgroundColor: '#0B3D91',
      borderWidth: 1,
      borderColor: '#0B3D91',
    },
    ajouterButton: {
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
