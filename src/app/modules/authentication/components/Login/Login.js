import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '../../../../shared/components/inputs/TextField';
import Button from '../../../../shared/components/inputs/Button';

import { useAuthentication } from '../../../../shared/hooks/authentication';

const Login = ({ action }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const { userData, authenticate } = useAuthentication()

    useEffect(() => {

    }, []);

    if (userData)
        return <Redirect push to='/home' />;

    return (
        <div className="row">
            <div className="col-md-12 col-xs-12">

                <div className="row">
                    <div className="col-md-4 col-xs-12 col-md-offset-4">
                        <p>Kisoft</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-12 col-md-offset-4">
                        <TextField title="Usuario" value={user} onChange={(value) => setUser(value.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-12 col-md-offset-4">
                        <TextField title="Contraseña" value={pass} onChange={(value) => setPass(value.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-12 col-md-offset-4"></div>
                    <Button title="Iniciar sesión" onClick={() => authenticate(user, pass)} />
                </div>
            </div>
            
        </div>
    )
}

export default Login;