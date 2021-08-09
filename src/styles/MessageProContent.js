import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    input: {
      elevation: 1,
      justifyContent: 'flex-end',
    },
    cards: {
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#fff',
    },
    cartText: {
      textAlign: 'center',
      color: '#3F3D56',
      fontWeight: 'bold',
    },
    accepterButton: {
      width: 160,
      backgroundColor: '#0B3D91',
    },
    refuserButton: {
      width: 160,
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#F53A3A',
    },
    textDate: {
      color: '#0B3D91',
      textAlign: 'center',
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
