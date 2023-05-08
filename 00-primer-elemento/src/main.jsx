import React from 'react'
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = ({text}) => {
    return (
        <button data-id="123">
            {text}
        </button>
    )
}

root.render(
    <React.Fragment>
        <Button text="Button 1"/>
        <Button text="Button 2"/>
        <Button text="Button 3"/>
    </React.Fragment>
)