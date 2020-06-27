import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  position: absolute;
  z-index: 99;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
`;

export const LoadingText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  margin-top: 20px;
`;