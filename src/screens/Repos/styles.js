import styled from 'styled-components/native';

export const Item = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #34495e;
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const RepoText = styled.Text`
  font-size: ${({ size }) => size || 14}px;
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  color: #ecf0f1; 
`;

export const RepoInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 5px;
  border-top-width: 1px;
  border-top-color: #2c3e50;
`;

export const InfoItem = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ButtonBase = styled.View`
  padding-top: 20px;
`;