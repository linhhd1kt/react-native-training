// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import { fetchMoviesAsyn, fetchMovies } from './actions';

type Props = {
  moneyCount: number,
  fetchMoviesAsyn: Function,
  movies: [Object]
};

type States = {};

class MovieScreenView extends Component<Props, States> {
  componentDidMount() {
    this.props.fetchMoviesAsyn();
  }

  renderItem = movie => {
    console.log(movie.title);
    return (
      <View style={styles.item}>
        <Text style={styles.item_title}>{movie.title}</Text>
        <Text style={styles.item_year}>{movie.releaseYear}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.movies}
          renderItem={item => this.renderItem(item.item)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: Object) => {
  return { movies: state.movie.movies };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesAsyn: () => dispatch(fetchMoviesAsyn())
  };
};

export const MovieScreen = connect(mapStateToProps, mapDispatchToProps)(
  MovieScreenView
);
