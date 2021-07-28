import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import style from '../style/Header';
import { VStack, Row, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar,ArrowBackIcon } from "native-base";

const Header = ({title, isDrawer, rightIcon}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = style();

  return (
    <View style={styles.container}>
      {isDrawer ? (
        <Icon
          name="menu"
          size={50}
          color={colors.primary}
          onPress={() => navigation.toggleDrawer()}
        />
      ) : (
        <Icon
          name="chevron-back"
          size={50}
          color={colors.primary}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.text}>{title}</Text>
      {rightIcon || <View />}
    </View>
  );
};

function AppBar(){
  return (
        <StatusBar translucent barStyle="light-content" />

        <Box safeAreaTop backgroundColor="#6200ee" />

        <Row px={1} py={3} justifyContent="space-between" alignItems="center" ml={2} mr={2}>
        <Row space={4} alignItems="center">
          <ArrowBackIcon size="lg" color="#3F3D56" onPress={() => navigation.goBack()}/>
          <Text color="#3F3D56" fontSize={20} fontWeight="bold">
            Propriété
          </Text>
        </Row>
        <Row space={2}>
          <ArrowUpIcon size="md" color="#3F3D56" />
          <ArrowBackIcon size="md" color="#F53A3A" />
        </Row>
      </Row>

  );
}

export default Header;
