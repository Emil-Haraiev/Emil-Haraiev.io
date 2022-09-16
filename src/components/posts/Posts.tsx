import React, { useState } from 'react';
import './posts.scss';
import { Posts } from '../../entities';
import { CSSTransition } from 'react-transition-group';
interface Props {
    posts: Posts[];
}

const UserPosts: React.FC<Props> = ({ posts }) => {
    const [isActive, setIsActive] = useState<null | number>(null);
    const userPosts = posts.slice(0, 5);
    const activePost = (id: number) => {
        setIsActive(id);
    };

    return (
        <div className="postsWrapper">
            {userPosts.map((item, i) => (
                <div className="post" key={i}>
                    <h3
                        onClick={() => activePost(item.id)}
                        className="post_title"
                    >
                        {item.title}
                    </h3>
                    {isActive === item.id && (
                        <div className="post_body">{item.body}</div>
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default UserPosts;
