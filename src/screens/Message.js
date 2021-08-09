import React from 'react';
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
  Input,
} from 'native-base';
import style from '../styles/Message';

function Message() {
  const styles = style();
  return (
    <Box flex={1} alignItems="center" justifyContent="center" bg="#fff">
      <Text style={styles.textAlign}>MESSAGES</Text>
    </Box>
  );
}


export default Message;
