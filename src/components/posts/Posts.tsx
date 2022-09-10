import React, { useState } from 'react';
import './posts.scss';
import { Posts } from '../../entities';
import { CSSTransition } from 'react-transition-group';
interface Props {
    posts: Posts[];
    inProp: boolean;
}
const UserPosts: React.FC<Props> = ({ posts, inProp }) => {
    const [isActive, setIsActive] = useState(false);
    const userPosts = posts.slice(0, 4);
    const activePost = (id: number) => {
        if (id === userPosts) {
            setIsActive(!isActive);
        }
        console.log(id);
    };

    return (
        <CSSTransition
            in={inProp}
            timeout={200}
            classNames="posts"
            unmountOnExit
        >
            <div className="postsWrapper">
                {userPosts.map(item => (
                    <div className="post">
                        <h3
                            onClick={() => activePost(item.id)}
                            className="post_title"
                        >
                            {item.title}
                        </h3>
                        {isActive && (
                            <div className="post_body">{item.body}</div>
                        )}
                        <hr />
                    </div>
                ))}
            </div>
        </CSSTransition>
    );
};

export default UserPosts;
