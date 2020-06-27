import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Content = styled.View`
  padding-top: ${getStatusBarHeight(true)}px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

export const UserItem = styled.TouchableOpacity`
  width: 100%;
  min-height: 100px;
  background-color: #34495e;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border-width: 4px;
  border-color: #2c3e50;
`;

export const UserText = styled.Text`
  font-size: ${({ size }) => size || 14}px;
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  color: #ecf0f1;
  padding: 5px;
`;