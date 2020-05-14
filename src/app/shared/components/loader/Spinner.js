import React, { Component } from 'react';
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

class Spinner extends Component {

    render() {
        const { loading } = this.props.loader;

        if (loading) {
            return (
                <div>
                    <Loader fullPage loading />
                </div>
            )
        }else
        {
            return null
        }
    }
}

export default Spinner;