import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '~/theme/colors';
import fonts from '~/theme/fonts';

interface IButtonProps {
  text?: string;
  onPress: () => void;
  styleProp?: object;
}

const Button = ({
  text = '',
  onPress = () => {},
  styleProp = {},
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, styleProp]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 3,
    borderColor: colors.lightgrey,
    borderWidth: 1,
    alignItems: 'center',
  },
  buttonText: {fontWeight: fonts.weight.bold},
});
