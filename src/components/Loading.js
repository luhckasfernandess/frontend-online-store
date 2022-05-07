import React, { Component } from 'react';
import styles from './styles/Loading.module.css';

class Loading extends Component {
  render() {
    return (
      <div className={ styles.loading }>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default Loading;
