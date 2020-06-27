import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const headerHeight = Platform.OS === 'ios'
  ? getStatusBarHeight() + 60
  : 60;

export const Container = styled.View`
  width: 100%;
  height: ${headerHeight}px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #34495e;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.View`
  width: 40px;
`;

export const Center = styled.View`
  flex: 1;
`;

export const Right = styled.View`
  width: 40px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
`;

export const BackButtonImg = styled.Image`
  width: 25px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #ecf0f1;
  text-align: center;
`;

export const HeaderAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border-width: 4px;
  border-color: #2c3e50;
`;