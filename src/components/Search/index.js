import React from 'react';

// Styles
import { SearchContent, SearchInput, SearchButton, SearchButtonText } from './styles';

const Search = ({
  onChange,
  value,
  handleSearch
}) => {
  return (
    <SearchContent>
      <SearchInput
        placeholder="Usuário do Github"
        onChangeText={onChange}
        value={value}
      />
      <SearchButton onPress={handleSearch}>
        <SearchButtonText>Adicionar</SearchButtonText>
      </SearchButton>
    </SearchContent>
  );
}

export default Search;