// @format
// @flow

import { createStackNavigator, createAppContainer } from 'react-navigation';

import JobsPage from './src/JobsPage';

const RootStack = createStackNavigator({
    Home: { screen: JobsPage }
  });

const App = createAppContainer(RootStack);
export default App;
