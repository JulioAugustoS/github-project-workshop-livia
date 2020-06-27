import React, { useState, useEffect } from 'react';
import { FlatList, Alert as Confirm } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import api from '../../services/api';
import { saveInStorage, getStorage } from '../../services/storage';

// Global Styles
import { Container } from '../../styles';

// Local Styles
import { Content, Logo, UserItem, UserAvatar, UserText } from './styles';

// Components
import { Search, Alert, Loading } from '../../components';

// Images
import logoImg from '../../assets/images/logo.png';

const Initial = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    findUsersInStorage();
  }, []);

  const findUsersInStorage = async () => {
    const findUsers = await getStorage('users');

    if (!!findUsers) {
      setUsers(JSON.parse(findUsers));
    }
  }

  const handleSearchUser = async () => {
    if (!search)
      return Alert('Atenção', 'Informe o nome do usuário!');

    setLoading(true);

    try {
      const response = await api.get(`/users/${search}`);

      const storage = JSON.parse(await getStorage('users'));
      const findUsers = storage
        ? storage.filter(value => value.login === response.data.login)
        : [];

      if (findUsers.length) {
        Alert('Usuário já existe!', 'O usuário que você está tentando adicionar já existe na sua lista.')
      } else {
        setUsers([...users, response.data])
        await saveInStorage('users', [...users, response.data]);
      }

      setSearch("");
      setLoading(false);
    } catch (err) {
      setSearch("");
      setLoading(false);

      if (err.response.status === 404) {
        Alert('Opsss!', 'Usuário não encontrado.');
      } else {
        Alert('Algo deu errado!', 'Não foi possivel buscar o usuário, tente novamente!');
      }
    }
  }

  const handleConfirmDelete = (id) => {
    Confirm.alert(
      'Tem certeza?',
      'Deseja excluir este usuário da sua lista?',
      [
        { text: 'Sim', onPress: () => deleteUser(id), style: 'destructive' },
        { text: 'Não', onPress: () => { }, style: 'cancel' },
      ],
      { cancelable: false }
    )
  }

  const deleteUser = async (id) => {
    setLoading(true);

    const getUsers = JSON.parse(await getStorage('users'));
    const filter = getUsers.filter(value => value.id !== id);

    await saveInStorage('users', filter);
    setUsers(filter);
    setLoading(false);
  }

  return (
    <Container>
      {loading && <Loading content="Aguarde..." />}
      <Content>
        <Logo source={logoImg} />
        <Search
          onChange={setSearch}
          value={search}
          handleSearch={handleSearchUser}
        />
      </Content>
      <FlatList
        data={users}
        keyExtractor={(user) => String(user.id)}
        contentContainerStyle={{
          paddingBottom: getBottomSpace()
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <UserItem
            key={item.id}
            onPress={() => navigation.navigate("Repos", {
              user: item.login,
              avatar: item.avatar_url
            })}
            onLongPress={() => handleConfirmDelete(item.id)}
          >
            <UserAvatar source={{ uri: item.avatar_url }} />
            <UserText bold size={16}>{item.login}</UserText>
            <UserText>{item.bio}</UserText>
          </UserItem>
        )}
      />
    </Container>
  );
}

export default Initial;