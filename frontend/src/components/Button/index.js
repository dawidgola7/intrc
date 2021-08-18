import React from 'react';
import './style.css';

const Button = ({ children, second, onClick = () => {}, }) => {
    return (
        <button onClick={()=> onClick()} className={`${second ? 'second' : ''}`}>{children}</button>
    )
}

export default Button;