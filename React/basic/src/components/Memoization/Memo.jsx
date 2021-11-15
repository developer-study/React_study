import React, { useEffect, useState } from 'react'
import Comments from './Comments';

const CommentList = [
    { title: "comment1", content: "message1", likes: 1},
    { title: "comment2", content: "message2", likes: 2},
    { title: "comment3", content: "message3", likes: 3},
    { title: "comment4", content: "message4", likes: 4},
]

export default function Memo() {
    const [comments, setComments] = useState(CommentList);

    useEffect(() => {
        const interval = setInterval(() => {
            setComments((prev) => [...prev, {
                title: `comment${prev.length + 1}`, content: `message${prev.length + 1}`, likes: 1
            }])
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <Comments commentList={comments} />
    )
}
