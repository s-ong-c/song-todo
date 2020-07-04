import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../../components/navigation/RootStackNavigator';

import Button from '../shared/Button';
import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }): string => theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Temp'>;
  route: RouteProp<RootStackParamList, 'Temp'>;
}

function Page(props: Props): React.ReactElement {
  const {
    route: {
      params: { param },
    },
    navigation,
  } = props;
  return (
    <Container>
      <Button
        testID="btn-back"
        onClick={(): void => navigation.goBack()}
        text={param}
        style={{
          backgroundColor: '#333333',
        }}
      />
      <Text>Render Change</Text>
      <Text>Render Change2</Text>
    </Container>
  );
}

export default Page;
