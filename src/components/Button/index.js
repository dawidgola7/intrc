import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const Button = ({ children, second, onClick = () => {} , isErrors}) => {
    const {t} = useTranslation()
    return (
        <button disabled={isErrors} onClick={onClick} className={`${second ? 'second' : ''}`}>{t(children)}</button>
    )
}

export default Button;