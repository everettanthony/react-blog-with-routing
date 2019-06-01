import React, { Component } from 'react';
import styles from './Login.module.scss';

class Login extends Component {
    render(props) {
        return (
            <div className={styles.Login}>
                <h1>Login</h1>
                <p>Please log in to post new blogs.</p>         
            </div>
        );
    }
}

export default Login;