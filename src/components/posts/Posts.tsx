import React from 'react';
import './posts.scss';
const Posts = () => {
    return (
        <div className="postsWrapper">
            <div className="post">
                <h3 className="post_title">Title 1</h3>
                <div className="post_body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Autem cum distinctio dolore labore placeat quas unde.
                    Architecto consequuntur cupiditate dicta ea hic maiores
                    molestias odio praesentium repellat, reprehenderit similique
                    sint.
                </div>
                <hr />
            </div>
            <div className="post">
                <h3 className="post_title">Title 2</h3>
                <div className="post_body"></div>
                <hr />
            </div>
            <div className="post">
                <h3 className="post_title">Title 3</h3>
                <div className="post_body"></div>
                <hr />
            </div>
            <div className="post">
                <h3 className="post_title">Title 4</h3>
                <div className="post_body"></div>
                <hr />
            </div>
            <div className="post">
                <h3 className="post_title">Title 5</h3>
                <div className="post_body"></div>
                <hr />
            </div>
        </div>
    );
};

export default Posts;
