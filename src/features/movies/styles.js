// @flow

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  list: {
    flex: 1
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'green'
  },
  item: {
    height: 40,
    flexDirection: 'row',
    margin: 12,
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 8,
    alignItems: 'center'
  },
  item_title: {
    marginRight: 20
  },
  item_year: {
    color: 'red'
  }
});
