import React, { Component } from 'react';
import styles from './FullPost.module.scss';
// import axios from 'axios';
import axios from '../../../axios';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deleteBlog = () => {
        axios.delete('/posts/' + this.props.match.params.id).then(rsp => {
            console.log('Deleted: ', rsp);
        });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className={styles.FullPost}>
                    <h1 className={styles.Title}>{this.state.loadedPost.title}</h1>
                    <p className={styles.Body}>{this.state.loadedPost.body}</p>
                    <div className={styles.Edit}>
                        <button className={[styles.Button, styles.Delete].join(' ')} onClick={this.deleteBlog}>Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;