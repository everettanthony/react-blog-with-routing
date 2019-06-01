import React from 'react';
import styles from './Post.module.scss';
import { withRouter } from 'react-router-dom';

const post = (props) => {
    return (
        <article className={styles.Post} onClick={props.clicked}>
            <h1 className={styles.Title}>{props.title}</h1>
            <h2 className={styles.Author}>{props.author}</h2>
            <div className={styles.Info}>
                <div className={styles.Body}>{props.body}</div>
            </div>
        </article>
    );
}

export default withRouter(post);