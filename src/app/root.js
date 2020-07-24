import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Aside from './shared/components/aside/Aside';
import Login from './modules/authentication/components/Login/Login';
import { useAuthentication } from '../app/shared/hooks/authentication'

const Root = () => {
  const { userData, authenticate, logout, token } = useAuthentication()

  return (
    token && token.length > 0
      ?
      <>
        <Aside logout={logout} token={token}/>
      </>
      :
      <Login authenticate={authenticate} />
  )
}

export default Root