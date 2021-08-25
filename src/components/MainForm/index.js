import React,{ useState } from 'react'
import Button from '../Button';
import Input from '../Input';
import Checkbox from '../Checkbox'
import cancel from './cancel.svg'
import { useTranslation } from 'react-i18next';

import './style.css';
import { sendFormData } from '../../api';
import Loading from '../Loading';

const MainForm = ({ handleSetShowForm }) => {

    const [loading,setLoading] = useState(false);
    const [value,setValue] = useState({name:'',email:'',surname:'',company:'',personal_data:false,marketing:false});

    const {t} = useTranslation();

    const handleChange = name => value => {
        setValue(prev =>({...prev , [name]:value}))
    }


    const handleClick = () => {
        setLoading(true)
        sendFormData("/form_main", value)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
          .finally(()=> {
            setLoading(false);
            setValue({name:'',email:'',surname:'',company:'',personal_data:false,marketing:false})
          })
      };

    const isErrors =  !Object.values(value).every((el) => Boolean(el));

    return (
        <div className="main_form">
            <div className='main_form_traingle'></div>
            <div className="main_form__cancel" onClick={() => handleSetShowForm()}>
                <img src={cancel} alt='cancel' />
            </div>
            <div className="main_form__container">
                <div className="main_form__header">
                    <div className="main_form__header__text">{t('try_intrack_today')}</div>
                    <div className="main_form__header__line"></div>
                </div>
                <div className="main_form__title">{t('try_intrack_demo')}</div>
                <div className="main_form__box">
                    <div className="main_form__box_inputs">
                        <div className="main_form__box_inputs__input">
                            <Input onChange={handleChange('name')}  title={t('your_first_name')} placeholder={t('enter_first_name')}/>
                        </div>
                        <div className="main_form__box_inputs__input">
                            <Input onChange={handleChange('surname')}  title={t('your_surname')} placeholder={t('enter_surname')}/>
                        </div>
                        <div className="main_form__box_inputs__input">
                            <Input onChange={handleChange('company')}  title={t('company')} placeholder={t('enter_company')}/>
                        </div>
                        <div className="main_form__box_inputs__input">
                            <Input onChange={handleChange('email')}   title={t('your_email')} type='email' placeholder={t('email@email.com')}/>
                        </div>
                    </div>
                    <div className="main_form__box_checkbox">
                        <Checkbox onClick={handleChange('personal_data')} text={t('confirm_personal_data')}/>
                        <Checkbox onClick={handleChange('marketing')} text={t('confirm_marketing')}/>
                    </div>
                    <div className="main_form__box_button">
                        {loading ? (
                            <Loading/>
                        ) : (
                            <Button isErrors={isErrors} onClick={handleClick} second>{t('submit')}</Button>
                        )}  
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainForm;