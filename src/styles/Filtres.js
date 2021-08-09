import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    cards: {
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#fff',
      width: 60,
      alignItems: 'center',
    },
    input: {},
    cartText: {
      textAlign: 'center',
      color: '#3F3D56',
      fontWeight: 'bold',
    },
    validerButton: {
      width: 190,
      backgroundColor: '#0B3D91',
      alignSelf: 'center',
      marginBottom: 40,
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
