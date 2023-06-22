import React, { useState } from 'react'
import './Posts.css'
import Comments from '../Comments/Comments';

const Posts = ({post}) => {
    const [comments , setComments] = useState();
    const [isClicked , setIsClicked] = useState(false);

    const fetchComments  = async (id) => {
        const commentsData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const comments = await commentsData.json()
        setComments(comments);
    }

  const handleClick = (id) => {
    fetchComments(id);
    setIsClicked((value) => !value)
  }
    return (
        <div key={post.id} className="Post">
                {post.body}
                <div>
                    <button className='CommentBtn' onClick={() => {handleClick(post.id)}}>
                        See Comments
                    </button>
                    {comments && isClicked &&
                        <Comments
                        data={comments}
                        />
                    }
                </div>
            </div>
    )
}

export default Posts;