import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';

const Buttons: FC = () => {
  const BUTTON_DATA = [
    {
      id: '1',
      title: 'Scan',
    },
    {
      id: '2',
      title: 'Contact devis',
    },
    {
      id: '3',
      title: 'Catalogue',
    },
  ];

  return (
    <View style={style.container}>
      {BUTTON_DATA.map((item, i) => (
        <TouchableOpacity style={style.buttonContainer} key={i + item.title}>
          <Text style={style.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Buttons;
