import React, { memo, Profiler, useMemo, useState } from 'react'
import './CommentItem.css'

function CommentItem({title, content, likes, onClick}) {
    const [clickCount, setClickCount] = useState(0);
    
    function onRenderCallback(
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
    ) {
        console.log(`actualDuration ${title}: ${actualDuration}`)
    }
    const handleClick = () => {
        onClick();
        setClickCount(prev => prev + 1);
        alert(`${title}`)
    }
    
    const rate = useMemo(() => {
        console.log('rate()')
        return likes > 10 ? likes : 10;
    }, [likes]);

    return (
        <Profiler id="CommentItem" onRender={onRenderCallback}>
            <div className="CommentItem" onClick={handleClick}>
                <span>{title}</span>
                <span>{content}</span>
                <span>{likes}</span>
                <soan>{rate}</soan>
                <span>{clickCount}</span>
            </div>
        </Profiler>
    )
}

// export default CommentItem;
export default memo(CommentItem);