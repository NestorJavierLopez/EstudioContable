import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuInferior = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons name="logout" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Empleados')}
      >
        <MaterialCommunityIcons name="badge-account-horizontal" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('PantallaPrincipal')}
      >
        <MaterialCommunityIcons name="home-circle" size={36} color="#388e3c" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons name="cash" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons name="chart-bar" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default MenuInferior;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#d0f0d0',
    borderTopWidth: 1,
    borderTopColor: '#a5d6a7',
  },
  iconButton: {
    padding: 8,
  },
});
