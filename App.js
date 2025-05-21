// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendario de vencimientos</Text>
      <Calendar
        style={{ marginTop: 20 }}
        onDayPress={(day) => {
          console.log('Día seleccionado', day);
        }}
      />
    </View>
  );
}

function IngresosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Ingresos</Text>
    </View>
  );
}

function SueldosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Sueldos</Text>
    </View>
  );
}

function InversionesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inversiones</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Ingresos" component={IngresosScreen} />
        <Drawer.Screen name="Sueldos" component={SueldosScreen} />
        <Drawer.Screen name="Inversiones" component={InversionesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

