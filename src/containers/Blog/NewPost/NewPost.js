import React, { Component } from 'react';
import styles from './NewPost.module.scss';
// import axios from 'axios';
import axios from '../../../axios';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        console.log('NEW: ', this.props);
    }

    savePost = () => {
        const data = {
            title: this.state.title,
            author: this.state.author,
            body: this.state.body
        };

        axios.post(postsUrl, data).then( rsp => {
            console.log( rsp.data );
            this.props.history.replace('/posts');
        }).catch(error => {
            // console.log(error);
            this.setState({error: true});
        });
    }

    render () {
        return (
            <div className={styles.NewPost}>
                <div className={styles.Container}>              
                    <div className={styles.NewPostTitle}>New Blog</div>
                    <div className={styles.PostFormRow}>
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                    </div>

                    <div className={styles.PostFormRow}>
                        <label>Author</label>
                        <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                            <option value="Max">Max</option>
                            <option value="Manu">Manu</option>
                            <option value="Tony">Tony</option>
                        </select>
                    </div>

                    <div className={styles.PostFormRow}>
                        <label>Content</label>
                        <textarea rows="9" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                    </div>

                    <div className={styles.PostFormRow}>
                        <button onClick={this.savePost}>Post Blog</button>
                    </div>
                </div> 
            </div>
        );
    }
}

export default NewPost;