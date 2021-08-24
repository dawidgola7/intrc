import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const Checkbox = ({ text , onClick}) => {

    const { t } = useTranslation();

    const [ checked, setChecked ] = useState(false);

    const handleClick = () => {
        setChecked(prev => !prev)
    }

    useEffect(()=> {
        onClick(checked);
    },[checked])

    return (
        <div className="wrapper_checkbox" onClick={handleClick}>
            <div className="wrapper_checkbox__check">
                {checked && <div className="wrapper_checkbox__checked"></div>}
            </div>
            <div className="wrapper_checkbox__text">{t(text)}</div>
        </div>
    )
}

export default Checkbox;