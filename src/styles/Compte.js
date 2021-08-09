import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    input: {
      borderColor: '#000',
    },
    cartText: {
      textAlign: 'center',
      color: '#3F3D56',
      fontWeight: 'bold',
    },
    modifierButton: {
      width: 280,
      backgroundColor: '#0B3D91',
    },
    supprimerButton: {
      width: 280,
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
