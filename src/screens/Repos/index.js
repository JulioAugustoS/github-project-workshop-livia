import React, { useState, useEffect } from 'react';
import { FlatList, Linking } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import api from '../../services/api';

// Global Styles
import { Container } from '../../styles';

// Local Styles
import { Item, RepoText, RepoInfo, InfoItem, InfoName, InfoIcon, ButtonBase } from './styles';

// Components
import { Header, Alert, Button, Loading } from '../../components';

// Images
import eyeIcon from '../../assets/icons/eye.png';
import forkIcon from '../../assets/icons/version.png';
import starIcon from '../../assets/icons/star.png';

const Repos = ({ route, navigation }) => {
  const { user, avatar } = route.params;

  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(false);

  const findRepos = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/users/${user}/repos`);

      setRepos(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err.response);
      setLoading(false);
      Alert('Algo deu errado!', 'Não foi possivel carregar os respositórios do usuário.');
      navigation.goBack();
    }
  }

  useEffect(() => {
    findRepos();
  }, []);

  const pushToGithub = (url) => {
    Linking.openURL(url);
  }

  return (
    <Container>
      {loading && <Loading content="Aguarde..." />}
      <Header
        title="Repositórios"
        backButton
        avatar={avatar}
      />
      <FlatList
        data={repos}
        contentContainerStyle={{
          paddingBottom: getBottomSpace()
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(repo) => String(repo.id)}
        renderItem={({ item }) => (
          <Item>
            <RepoText bold size={16}>{item.name}</RepoText>
            <RepoText size={12}>{item.description}</RepoText>
            <RepoInfo>
              <InfoItem>
                <InfoName>
                  <InfoIcon source={eyeIcon} />
                  <RepoText>Watch</RepoText>
                </InfoName>
                <RepoText size={18}>{item.watchers_count}</RepoText>
              </InfoItem>
              <InfoItem>
                <InfoName>
                  <InfoIcon source={starIcon} />
                  <RepoText>Star</RepoText>
                </InfoName>
                <RepoText size={18}>{item.stargazers_count}</RepoText>
              </InfoItem>
              <InfoItem>
                <InfoName>
                  <InfoIcon source={forkIcon} />
                  <RepoText>Fork</RepoText>
                </InfoName>
                <RepoText size={18}>{item.forks_count}</RepoText>
              </InfoItem>
            </RepoInfo>
            <ButtonBase>
              <Button content="Ir para o Github" onPress={() => pushToGithub(item.svn_url)} />
            </ButtonBase>
          </Item>
        )}
      />
    </Container>
  )
}

export default Repos;