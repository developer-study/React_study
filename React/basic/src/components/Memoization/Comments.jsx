import React, { useCallback } from 'react'
import CommentItem from './CommentItem'

export default function Comments({commentList}) {
    const handleClick = useCallback(() => {
        console.log(`handleClick`);
    }, [])
    return (
        <div>
            {commentList.map(comment => <CommentItem 
                key={comment.title} 
                title={comment.title} 
                content={comment.content} 
                likes={comment.likes}
                onClick={handleClick}
                // onClick={() => console.log(`${comment.title}`)} Memo 를 사용할 수 없음
            />)}
        </div>
    )
}
