import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    cards: {
      borderRadius: 10,
      elevation: 2,
      borderWidth: 1,
      width: 60,
      alignItems: 'center',
    },
    activeCards:{
      backgroundColor: '#0B3D91',
      borderColor: '#0B3D91',
    },
    inactiveCards:{
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    cartText: {
      textAlign: 'center',
    },
    activeCartText:{
      fontWeight: 'bold',
      color: '#FFF',
    },
    inactiveCartText:{
      color: '#3F3D56',
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
    IconsText: {
      textAlign: 'center',
    },
    activeText:{
      color: '#0B3D91',
      fontWeight:'bold',
    },
    inactiveText:{
      color: '#3F3D56',
    }
  });
};

export default styles;