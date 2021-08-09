import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    select: {
      borderColor: '#000',
      width: 50,
    },
    suivantButton: {
      width: 250,
      backgroundColor: '#0B3D91',
      borderWidth: 1,
      borderColor: '#0B3D91',
    },
    input: {
      borderColor: '#000',
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
