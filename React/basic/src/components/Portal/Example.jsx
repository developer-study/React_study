import React from 'react'
import {createPortal} from 'react-dom';
import ThankYouDialog from '../Portal/ThankYouDialog'

const Portal = (props) => {
    return createPortal(props.children, document.getElementById('portal'))
}

export default function Example() {
    return (
        <div>
            <Portal>
                <ThankYouDialog />
            </Portal>
            <div style={{position:"absolute"}}>
                <button>button</button>
            </div>
        </div>
    )
}
