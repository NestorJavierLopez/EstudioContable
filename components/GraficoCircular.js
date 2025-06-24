import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text as SvgText } from 'react-native-svg';

const GraficoCircular = ({ data }) => {
  const pieData = data
    .filter(item => item.value > 0)
    .map((item, index) => ({
      value: item.value,
      svg: { fill: item.color },
      key: `pie-${index}`,
      arc: { outerRadius: '100%', cornerRadius: 5 },
      label: String(item.label),
    }));


  return (
    <View style={{ height: 200 }}>
      <PieChart style={{ height: 200 }} data={pieData}>
        {
          // Mostrar etiquetas dentro del gráfico
          ({ slices }) =>
            slices.map((slice, index) => {
              const { pieCentroid, data } = slice;
              return (
                <SvgText
                  key={`label-${index}`}
                  x={String(pieCentroid[0])}
                  y={String(pieCentroid[1])}
                  fill="white"
                  fontSize="12"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {String(data.label)}
                </SvgText>
              );
            })
        }
      </PieChart>
    </View>
  );
};

export default GraficoCircular;
