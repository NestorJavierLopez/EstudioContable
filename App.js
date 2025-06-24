import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Calendar } from 'react-native-calendars';
import GraficoCircular from './components/GraficoCircular';

const Drawer = createDrawerNavigator();

const calendario = () => {
  const data1 = [
    { key: 1, value: 40, svg: { fill: '#4A90E2' }, label: 'Sueldos', color: '#4A90E2' },
    { key: 2, value: 30, svg: { fill: '#50E3C2' }, label: 'Aportes', color: '#50E3C2' },
    { key: 3, value: 30, svg: { fill: '#B3E5FC' }, label: 'Sindicatos', color: '#B3E5FC' },
  ];

  const data2 = [
    { key: 1, value: 50, svg: { fill: '#4A90E2' }, label: 'Proveedores', color: '#4A90E2' },
    { key: 2, value: 30, svg: { fill: '#50E3C2' }, label: 'Gastos Varios', color: '#50E3C2' },
    { key: 3, value: 20, svg: { fill: '#B3E5FC' }, label: 'Ganancia Mensual', color: '#B3E5FC' },
  ];



  const fechasConLeyenda = {
    '2025-05-23': 'ARBA',
    '2025-05-28': 'ARCA',
    '2025-06-10': 'ARBA',
    '2025-06-20': 'ARCA',
    '2025-07-05': 'ARBA',
    '2025-07-25': 'ARCA',
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Calendario de Vencimientos</Text>
        <Calendar
  style={styles.calendar}
 dayComponent={({ date }) => {
  const label = fechasConLeyenda[date.dateString];

  let textColor = undefined;

  if (label) {
    const today = new Date();
    const currentDate = new Date(date.dateString);
    const diffInTime = currentDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

    textColor = diffInDays <= 3 ? 'red' : 'green';
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', color: textColor }}>
        {date.day}
      </Text>
      {label && (
        <Text style={{ fontSize: 10, color: textColor }}>{label}</Text>
      )}
    </View>
  );
}}


/>
        <Text style={styles.subtitle}>Distribución de Sueldos</Text>
        <GraficoCircular data={data1} />
        <Text style={styles.subtitle}>Gastos y Ganancia</Text>
        <GraficoCircular data={data2} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={calendario} />
        <Drawer.Screen name="Ingresos" component={calendario} />
        <Drawer.Screen name="Sueldos" component={calendario} />
        <Drawer.Screen name="Inversiones" component={calendario} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 16,
    paddingBottom: 60,
  },
  calendar: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
});
