import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';
import styles from './Blog.module.scss';
import Posts from './Posts/Posts';
import About from '../../components/Pages/About/About';
import Login from '../../components/Pages/Login/Login';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: false 
    }

    loginUser = (evt) => {
        let loginStatus = this.state.auth;
        evt.preventDefault();
        this.setState({ auth: !loginStatus });
    }

    render() {
        const activeClass = {
            background: '#f3f3f3',
            color: '#f7218c'
        };

        return (
            <div className={styles.Blog}>
                <header className={styles.Header}>
                    <nav className={styles.Nav}>
                        <ul>
                            <li><NavLink to="/posts" exact>Home</NavLink></li>
                            <li><NavLink to="/about" activeStyle={activeClass}>About</NavLink></li>
                            <li><NavLink to="/new-post" activeStyle={activeClass}>New Blog</NavLink></li>
                            <li><NavLink to="/login" activeStyle={activeClass}>Login</NavLink></li>
                         </ul>
                    </nav>
                </header>
                <div className={styles.Main}>
                    <div className={styles.Row}>
                        <Switch>
                            {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                            <Route path="/about" component={About} />
                            <Route path="/posts" component={Posts} />
                            <Route path="/login" component={Login} />
                            {/* <Route render={() => <h1>Blog Not found</h1>}/> */}
                            <Redirect from="/new-post" to="/login" />
                            <Redirect from="/" to="/posts" />
                            {/* <Route path="/" component={Posts} /> */}
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;