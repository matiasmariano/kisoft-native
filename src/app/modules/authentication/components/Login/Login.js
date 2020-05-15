import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '../../../../shared/components/inputs/TextField';
import Button from '../../../../shared/components/inputs/Button';
import { Container, Row, Col } from 'react-bootstrap';

import { useAuthentication } from '../../../../shared/hooks/authentication';

const Login = ({ navigation, action }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const { userData, authenticate } = useAuthentication()

    useEffect(() => {

    }, []);

    return (
        <view class="container">
            <view className="row">
                <view className="col-md-6">
                    <text>Kisoft</text>
                </view>
                <view className="col-md-6">
                    <button onClick={() => navigation.navigate("Home", { color: "blue" })}>ckick me</button>
                </view>
            </view>
        </view>
    )
}

export default Login;

