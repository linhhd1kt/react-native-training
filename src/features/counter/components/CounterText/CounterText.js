// @flow
import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  currentCount: number
};

type States = {};

class CounterTextView extends Component<Props, States> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {'Current Count' + this.props.currentCount}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state: Object) => {
  return { currentCount: state.currentCount };
};

export const CounterText = connect(mapStateToProps)(CounterTextView);
