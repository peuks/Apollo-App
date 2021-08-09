import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    container: {},
    input: {
      color: '#000',
      borderColor: '#000',
      height: 40,
    },
    modalHeader: {
      fontSize: 20,
      textAlign: 'left',
      marginBottom: 20,
    },
    modalText: {
      fontSize: 14,
    },
    cards: {
      shadowOffset: {width: 0, height: 6},
      shadowRadius: 10,
      shadowOpacity: 1.0,
      borderRadius: 1,
      elevation: 2,
    },
    mapsArea: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      backgroundColor: '#0B3D91',
      marginTop: 50,
      opacity: 0.89,
    },
    searchBar: {
      borderColor: '#000',
    },
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
      textAlign: 'left',
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
      width: 80,
    },
    descriptionTitle: {
      textAlign: 'left',
      fontWeight: 'bold',
      color: '#3F3D56',
    },
    descriptionText: {
      color: '#3F3D56',
      textAlign: 'justify',
      alignItems: 'flex-start',
      width: 360,
    },
    container: {
      flexDirection: 'row',
    },

    //Candidater1 modal
    candidatermodalHeader: {
      fontSize: 20,
      marginBottom: 5,
      color: '#225FC7',
    },
    candidatermodalTitle: {
      fontSize: 15,
      textAlign: 'left',
      marginBottom: 10,
    },
    candidatermodalText: {
      fontSize: 12,
      textAlign: 'justify',
    },
    inscrireButton: {
      width: 140,
      backgroundColor: '#0B3D91',
      borderWidth: 1,
      borderColor: '#0B3D91',
    },
    fermerButton: {
      width: 140,
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#0B3D91',
    },
    //Candidater2 modal

    //Candidater3 modal

    //Candidater4 modal : candidature instantanée
  });
};

export default styles;
