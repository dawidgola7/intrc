import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const Input = ({  onChange, title, type ='text', placeholder}) => {
    const {t} = useTranslation();
    return (
        <div className="wrapper_input">
            <div className="wrapper_input__title">{t(title)}</div>
            <input className="wrapper_input__input" type={type} placeholder={placeholder}  onChange={(e) => {
                onChange(e.target.value)
            }}/>
        </div>
    )
}

export default Input;