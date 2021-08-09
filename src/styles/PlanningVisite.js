import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    modalText: {
      fontSize: 14,
    },
    messageButton: {
      width: 160,
      backgroundColor: '#3B69B6',
    },
    cards: {
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 10,
      shadowOpacity: 1.0,
      borderRadius: 10,
      elevation: 5,
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
    contactBox: {
      shadowOffset: {width: 0, height: 6},
      shadowRadius: 10,
      shadowOpacity: 1.0,
      borderRadius: 10,
      elevation: 2,
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#3B69B6',
    },
  });
};

export default styles;
