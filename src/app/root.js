import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import Aside from './shared/components/aside/Aside';
import Login from './modules/authentication/components/Login/Login';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      this.props.loggedIn ? <Aside/> : <Login/>
    )
  }
}

const mapStateToProps = state => {
  return {
      loggedIn: state.login.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);