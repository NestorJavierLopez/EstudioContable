import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function App() {
  const fechasMarcadas = {
    '2025-05-15': {
      customStyles: {
        container: { backgroundColor: '#ffcccc', borderRadius: 4 },
        text: { color: 'red', fontWeight: 'bold' },
      },
      etiqueta: 'AFIP',
    },
    '2025-05-20': {
      customStyles: {
        container: { backgroundColor: '#ffcccc', borderRadius: 4 },
        text: { color: 'red', fontWeight: 'bold' },
      },
      etiqueta: 'ARBA',
    },
  };

  return (
    <View style={styles.container}>
      <Calendar
        markingType={'custom'}
        markedDates={fechasMarcadas}
        dayComponent={({ date, state, marking }) => {
          const isMarked = marking && marking.customStyles;
          return (
            <View
              style={[
                styles.dayContainer,
                isMarked ? marking.customStyles.container : null,
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  isMarked ? marking.customStyles.text : null,
                  state === 'disabled' && styles.disabledText,
                ]}
              >
                {date.day}
              </Text>
              {marking && marking.etiqueta && (
                <Text style={styles.label}>{marking.etiqueta}</Text>
              )}
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  dayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    margin: 2,
    borderRadius: 4,
  },
  dayText: {
    color: 'black',
  },
  disabledText: {
    color: 'gray',
  },
  label: {
    fontSize: 8,
    color: 'red',
    marginTop: 2,
  },
});
