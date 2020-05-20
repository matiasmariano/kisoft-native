import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Aside from './shared/components/aside/Aside';
import Login from './modules/authentication/components/Login/Login';
import { useAuthentication } from '../app/shared/hooks/authentication'

const Root = () => {
  const { userData, authenticate, logout } = useAuthentication()

  return (
    userData ? <Aside logout={logout}/> : <Login authenticate={authenticate} />
  )
}

export default Root