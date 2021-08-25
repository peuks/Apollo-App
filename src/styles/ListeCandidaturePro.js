import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    IconsText: {
      color: '#3F3D56',
      textAlign: 'center',
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
  });
};

export default styles;