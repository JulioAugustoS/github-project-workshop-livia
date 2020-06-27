import React from 'react';

// Styles
import { Btn, BtnText } from './styles';

const Button = ({ content, onPress }) => {
  return (
    <Btn onPress={onPress}>
      <BtnText>{content}</BtnText>
    </Btn>
  )
}

export default Button;