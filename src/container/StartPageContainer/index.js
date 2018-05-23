// @flow
import * as React from "react";
import StartPage from "../../stories/screens/StartPage";
export interface Props {
  navigation: any,
}
export interface State {}
export default class StartPageContainer extends React.Component<Props, State> {
  render() {
    return <StartPage navigation={this.props.navigation} />;
  }
}
