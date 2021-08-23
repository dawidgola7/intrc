import React, { useState } from 'react'
import { item,item2,item3,item4 } from './utils';
import streamMobile from './stream_mobile.png';
import './style.css';
import { useTranslation } from 'react-i18next';


const groupSvg = [{
    item: (val) => item(val),
    id:1,
    text:'support_desc_1'
},{
    item: (val) => item2(val),
    id:2,
    text:'support_desc_2'
},{
    item: (val) => item3(val),
    id:3,
    text:'support_desc_3'
},{
    item: (val) => item4(val),
    id:4,
    text:'support_desc_4'
}]

const SupportUsersSection = () => {
    const [itemActive, setActive] = useState([1]);
    const [lastItem,setLastItem]=useState(1);
    const { t } = useTranslation();


    const handleActive = (id) => {
        if(id === 1) setActive([1]);
        if(id === 2) setActive([1,2]);
        if(id === 3) setActive([1,2,3]);
        if(id === 4) setActive([1,2,3,4]);
        setLastItem(id)
    }

    return (
        <div className='wrapper_support_users_section'>
            <div className='wrapper_support_users_section__header'>{t('support_header')}</div>
            <img src={streamMobile} alt='stream mobile'  className='stream_mobile'/>
            <div className='wrapper_support_users_section__streams'>
                {groupSvg.map(el => (
                    <div className={lastItem === el.id ? " item_svg item_svg__active": 'item_svg'} >
                        {el.item(itemActive.includes(el.id) ? 'black':'rgb(37, 49, 64)' )}
                    </div>
                ))}
            </div>
            <div className='wrapper_support_users_section__text'>
                {groupSvg.map(el => (
                    <div className={itemActive.includes(el.id) ? 'support_text_active' : "support_text"} onClick={()=>handleActive(el.id)}>
                        {t(el.text)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SupportUsersSection;
