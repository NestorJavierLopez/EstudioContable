
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuInferior from '../components/MenuInferior';



const fechasConLeyenda = {
  '2025-06-10': 'ARBA',
  '2025-06-20': 'ARCA',
  '2025-07-05': 'ARBA',
  '2025-07-25': 'ARCA',
  '2025-08-13': 'ARBA',
  '2025-08-20': 'ARCA',
  '2025-09-12': 'ARBA',
  '2025-09-22': 'ARCA'
};

const PantallaPrincipal = ({ navigation }) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const renderDay = ({ date, state }) => {
    const label = fechasConLeyenda[date.dateString];
    let textColor = state === 'disabled' ? 'gray' : 'black';

    if (label) {
      const today = new Date();
      const currentDate = new Date(date.dateString);
      const diffInTime = currentDate.getTime() - today.getTime();
      const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
      textColor = diffInDays <= 3 ? 'red' : 'green';
    }

    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', color: textColor }}>{date.day}</Text>
        {label && <Text style={{ fontSize: 10, color: textColor }}>{label}</Text>}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Modal de información */}
      <Modal visible={mostrarInfo} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mis datos</Text>
            <Text>Razón Social: NUEVO MILENIO RED SA</Text>
            <Text>Vía: 01NM     Fec. Prot.: __ / __ / __</Text>
            <Text>Dirección/Tel.: 40 936 Piso: 4</Text>
            <Text>IB: ________________     Cierre: 3</Text>
            <Text>CUIT: 30-71495474-8</Text>
            <Text>IVA: Responsable Inscripto</Text>
            <Text>Dep. DGI: ________________</Text>
            <Text>Contribuyente: GRAL</Text>
            <Text>F.833: 862120     F.150: ______     F.454: ______</Text>
            <Text>Suscribe: ________________</Text>
            <Text>Carácter: ________________</Text>

            <TouchableOpacity onPress={() => setMostrarInfo(false)} style={styles.cerrarModal}>
              <Text style={{ color: 'white' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMostrarInfo(true)}>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.cliente}>NUEVO MILENIO RED SA</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Calendario */}
      <View style={styles.calendarContainer}>
        <Calendar style={styles.calendar} dayComponent={renderDay} />
      </View>

      {/* Menú inferior */}
      <MenuInferior navigation={navigation} />


    </SafeAreaView>
  );
};

export default PantallaPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fdf5',
  },
  header: {
    paddingTop: 24, // o incluso 24 si hace falta más espacio
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#d6f5d6',
  },
  cliente: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#b2eab2',
    borderRadius: 8,
    color: '#1b4d1b',
  },
  calendarContainer: {
    flex: 1,
    padding: 12,
  },
  calendar: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  footer: {
    paddingBottom: 20, // o más si el dispositivo lo necesita
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  iconButton: {
    padding: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '85%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cerrarModal: {
    marginTop: 16,
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
});
