// @flow
import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { increment } from './actions';
import { CounterText } from './components';

type Props = {
  currentCount: number,
  increment: Function
};

type States = {};

class CounterView extends Component<Props, States> {
  render() {
    return (
      <View style={styles.container}>
        <CounterText />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.increment(1)}
        >
          <Text>Increment by 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state: Object) => {
  return { moneyCount: state.currentCount };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: number => dispatch(increment(number))
  };
};

export const CounterScreen = connect(mapStateToProps, mapDispatchToProps)(
  CounterView
);
