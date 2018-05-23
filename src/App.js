// @flow
import React from "react";
import {
  StackNavigator,
  DrawerNavigator
} from "react-navigation";
import {
  Root
} from "native-base";
import Start from "./container/StartPageContainer";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar { ...props } />,
  }
);

const App = StackNavigator({
  Start: {
    screen: Start,
    navigationOptions: {
      header: {
         style: {
            textAlign: "center",
         },
      },
    }
  },
  Login: {
    screen: Login
  },
  BlankPage: {
    screen: BlankPage
  },
  Drawer: {
    screen: Drawer
  },
}, {
  initialRouteName: "Start",
  headerMode: "none",
});

export default () => (
  <Root>
    <App />
  </Root>
);
