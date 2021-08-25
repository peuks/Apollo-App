import React from 'react';
import {
  Text,
  Box,
  Column,
  Row,
  Button,
  Icon,
  Image,
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
