import React from 'react'
import Dialog from './Dialog'

function ThankYouDialog() {
    return (
        <Dialog 
        title={<h1 style={{color:'blue'}}>Thanks</h1>} 
        description="Thank you~~~" 
        closeButton="Close"/>
    )
}

export default ThankYouDialog
