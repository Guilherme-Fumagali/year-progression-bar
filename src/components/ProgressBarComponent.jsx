import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgressBarComponent = ({percentCompleted}) => {
    return (
        <ProgressBar 
            now={percentCompleted}
            label={`${percentCompleted}%`} visuallyHidden
            animated
            variant="info"
        />
    );
}
 
export default ProgressBarComponent;