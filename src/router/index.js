import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './../screens/IndexScreen.js';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavgationOptions: {
      title: 'blogs',
    },
  },
);

// const App = createAppContainer(navigator);

// export default () => {
//   return <App />;
// };
export default createAppContainer(navigator);
