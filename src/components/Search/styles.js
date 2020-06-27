import styled from 'styled-components/native';

export const SearchContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: #FFFFFF;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: #34495e;
`;

export const SearchButton = styled.TouchableOpacity`
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #34495e;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const SearchButtonText = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
`;