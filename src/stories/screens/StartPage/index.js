import * as React from "react";
import Expo from "expo";
import { signIn } from '../../../services/firebase-service';
import { FBlogin, getFBUserData } from '../../../services/facebook-service';

import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Toast } from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
}
export interface State {}
class StartPage extends React.Component<Props, State> {
  constructor (props) {
    super(props);
    this._fbLogin = this._fbLogin.bind(this);
  }
  async _fbLogin () {
    const { type, token } = await FBlogin();
    if (type === 'success') {
      const { user } = await signIn(token);
      Toast.show({
        text: `Hi ${user.displayName}!`,
        buttonText: 'Cool!',
      });
    }
  }
  render() {
    const param = this.props.navigation.state.params;
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>{param ? param.name.item : "Start Page"}</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          <Button onPress={this._fbLogin}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default StartPage;
