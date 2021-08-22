import React,{useState} from 'react'
import './style.css';
import background from './background.svg';
import Button from '../Button';
import Input from '../Input';
import Checkbox from '../Checkbox'
import { useTranslation } from 'react-i18next';


const GetCaseStudy = () => {
    const [value,setValue] = useState({name:'',email:'',personal_data:false,marketing:false});

    const {t} = useTranslation();

    const handleChange = name => value => {
        setValue(prev =>({...prev , [name]:value}))
    }

    const handleClick = () => {
      
       console.log(value)
    }

    const isErrors =  !Object.values(value).every((el) => Boolean(el));

  
    return (
        <div className="wrapper_getcasestudy">
            <div className="wrapper_getcasestudy__header">{t('case_study_header')}</div>
            <img src={background}  className="wrapper_getcasestudy__image" alt="background"/>
            <div className="wrapper_getcasestudy__form">
                <div className="wrapper_getcasestudy__form_header">{t('case_study_desc')}</div>
                <div className="wrapper_getcasestudy__form_inputs">
                    <Input onChange={handleChange('name')}  title={t('your_first_name')} placeholder={t('enter_first_name')}/>
                    <Input onChange={handleChange('email')}   title={t('your_email')} type='email' placeholder={t('email@email.com')}/>
                </div>
                <div className="wrapper_getcasestudy__form_checkbox">
                    <Checkbox onClick={handleChange('personal_data')} text={t('confirm_personal_data')}/>
                    <Checkbox onClick={handleChange('marketing')} text={t('confirm_marketing')}/>
                </div>
                <div className="wrapper_getcasestudy__form_button">
                    <Button isErrors={isErrors} onClick={handleClick} second>{t('submit')}</Button>
                </div>
            </div>
        </div>
    )
}

export default GetCaseStudy;