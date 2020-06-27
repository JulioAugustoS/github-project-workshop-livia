import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Styles
import {
  Container,
  Left,
  Center,
  Right,
  BackButton,
  BackButtonImg,
  Title,
  HeaderAvatar
} from './styles';

// Images
import backIcon from '../../assets/icons/back.png';

const Header = ({
  title,
  backButton,
  avatar
}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Left>
        {backButton && (
          <BackButton onPress={() => navigation.goBack()}>
            <BackButtonImg resizeMode="contain" source={backIcon} />
          </BackButton>
        )}
      </Left>
      <Center>
        <Title>{title}</Title>
      </Center>
      <Right>
        {avatar && (
          <HeaderAvatar source={{ uri: avatar }} />
        )}
      </Right>
    </Container>
  )
}

export default Header;