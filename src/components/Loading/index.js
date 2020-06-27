import React from 'react';
import { ActivityIndicator } from 'react-native';

// Styles
import { Container, LoadingText } from './styles';

const Loading = ({ content }) => {
  return (
    <Container>
      <ActivityIndicator color="#FFFFFF" size="large" />
      <LoadingText>{content}</LoadingText>
    </Container>
  )
}

export default Loading;