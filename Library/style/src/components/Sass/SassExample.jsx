import React from 'react'
import './SassExample.scss';

export default function SassExample() {
    return (
        <div>
            <p>Example</p>
            <p className="font">FontExample</p>
            <nav>
                <ul>
                    <li>nav ul li</li>
                    <li>
                        <a href="true">nav ul li2</a>
                    </li>
                </ul>
            </nav>
            <ul>
                <li>nav ul li</li>
                <li>
                    <a href="true">nav ul li2</a>
                </li>
            </ul>
            <p className="base">base</p>
            <p className="inverse">inverse</p>
            <p className="info">info</p>
            <p className="alert">alert</p>
            <p className="success">success</p>
            <p className="message">message</p>
            <p className="success2">success2</p>
            <p className="error">error</p>
            <p className="warning">warning</p>
            <div className="square-avatar">square</div>
            <div className="circle-avatar">circle</div>
            <div className="sidebar"></div>
            <div className="gray">gray</div>
            <div className="button">gray</div>
            <div className="pulse">gray</div>
        </div>
    )
}
