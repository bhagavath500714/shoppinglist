import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import List from "../screens/List";
import Article from "../screens/Article";

export default createStackNavigator(
  {
    List,
    Article
  },
  {
    initialRouteName: "List",
    headerShown: false,
    headerMode: "float",
    defaultNavigationOptions: {
      headerBackTitle: null,
    headerBackTitleVisible: false,
      header: null,
      headerStyle: {
       borderBottomColor: 'transparent',
       marginTop: 24,
       backgroundColor: 'green'
     }
    }
  }
);