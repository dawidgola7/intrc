import React from 'react'
import Button from '../Button'
import { useTranslation } from 'react-i18next';
import './style.css';
import logo from '../../images/logo_name.svg';
import menu from '../../images/menu.svg';


const Header = ({ handleSetShowForm }) => {
    const { t, i18n } = useTranslation();


    return (
        <div className="header">
            <img src={logo} alt='intrack_logo' className="logo" />
            <div className="header_manage">
                <Button onClick={handleSetShowForm}>{t('try_the_demo')}</Button>
                <div className="header_language">
                    <span onClick={() => i18n.changeLanguage("pl")}>PL</span>
                    <span className='seperator'></span>
                    <span onClick={()=> i18n.changeLanguage("en")}>EN</span>
                </div>
            </div>
            <div className="header_menu__mobile" onClick={handleSetShowForm}>
                <img src={menu} alt='menu' />
            </div>
        </div>
    )
}

export default Header;