

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuInferior from '../components/MenuInferior';
import * as WebBrowser from 'expo-web-browser';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';




const Empleados = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.title}>Empleados</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sueldos</Text>
                    <Text>Descarga de sueldos de mis empleados </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                            try {
                                const asset = Asset.fromModule(require('../assets/01NM_RECIBOS_052025.pdf'));
                                await asset.downloadAsync();
                                const localUri = asset.localUri || asset.uri;

                                const destPath = FileSystem.documentDirectory + 'recibo-sueldos.pdf';

                                // Copiar archivo al sistema de archivos accesible
                                await FileSystem.copyAsync({
                                    from: localUri,
                                    to: destPath,
                                });

                                // Compartir / Abrir
                                await Sharing.shareAsync(destPath);
                            } catch (error) {
                                console.error('Error al compartir el PDF:', error);
                                alert('Ocurrió un error al abrir el archivo.');
                            }
                        }}

                    >
                        <Icon name="download" size={20} color="#fff" />
                        <Text style={styles.buttonText}>Descargar PDF</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Cargas Sociales</Text>
                    <Text>Descarga de Cargas Sociales de mis empleados</Text>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="upload" size={20} color="#fff" />
                        <Text style={styles.buttonText}>Descargar PDF</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sindicatos</Text>
                    <Text>Descarga de aportes sindicales</Text>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="download" size={20} color="#fff" />
                        <Text style={styles.buttonText}>Descargar PDF</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <MenuInferior navigation={navigation} />
        </View>
    );
};

export default Empleados;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff4',
    },
    scroll: {
        padding: 16,
        marginBottom: 70, // espacio para que no se tape con la barra inferior
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2e7d32',
        textAlign: 'center',
    },
    section: {
        marginBottom: 24,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: '#1b5e20',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#388e3c',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        marginLeft: 8,
        fontWeight: '600',
    },
});



