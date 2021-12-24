import React from 'react'
import CheckoutSteps from './CheckoutSteps';
import { useStyles } from './Sidebar'

export default function ContentPanel() {
    const classes = useStyles();
    return (
            <div className={classes.contentPanel}>
                <div className="contentPanelMainNav">
                <CheckoutSteps step1></CheckoutSteps>

                </div>
            </div>
            
    )
}
