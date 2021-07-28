import React from 'react';
import {StyleSheet} from 'react-native';
import {
  NativeBaseProvider,
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
  SearchIcon,
  Input
} from 'native-base';

function Message() {
    return (
        <Box flex={1} alignItems="center" justifyContent="center" bg="#fff">
            <Text style={styles.textAlign}>MESSAGES</Text>
        </Box>
    );
}

const styles = StyleSheet.create({
  container: {},
  searchBar :{
      borderRadius:50,
  },
  text:{
      textAlign:'center'
  }
});

export default Message;