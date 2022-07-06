import React, { useState } from 'react';
import styles from './AlfaBlock.module.css';
import Cards from '../Cards/Cards';
import Decs from '../Decs/Decs';
import cards1 from '../../assets/images/cards1.png';
import cards2 from '../../assets/images/cards2.png';
import cards3 from '../../assets/images/cards3.png';
import Toggler from '../../UI/Toggler/Toggler';
import classNames from 'classnames';
import '../../index.css'
import axios from 'axios';

function AlfaBlock() {

    const [show, setShow] = useState(false);

    const click = () => {
        setShow(true);
        console.log('log');
        document.body.classList.add('dark');

        if (show === true) {
            setShow(false);
            document.body.classList.remove('dark');
        }
    }

    const classes = classNames('togglerspan',
        {
            'conditional': show
        }
    )

    const [values, setValues] = useState({
        names: '',
        phone: '',
    });


    const changeInput = ({ target: { value, name } }) => {

        setValues({
            ...values,
            [name] : value,
        })
    }

    let token = '5410232571:AAGehOJo_dWj_ZVyi4-eefWUqY-1MBVl2a0';
    let chat_id = "-1001681378214 ";
    let txt = 'loop'
    
    const submit = (e) => {
        e.preventDefault()
        // axios.post({
        //     url: (`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${txt}`,`r`),
        //     method: "POST"
        // })
        axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${txt}`,`r`, {
            params: {
                'chat_id': chat_id,
                
            }
        })
    }

    return (
        <div className={styles.AlfaBlock}>
            <Toggler togglerspan={classes} click={click} />
            <div className={classNames(styles.title, {
                [styles.show]: show
            })}>Услуги</div>
            <div className={styles.cardsGroup}>

                <Cards img={cards1} textclass={classNames(styles.text, {
                    [styles.show]: show
                })} text={'Тендер строительных бригад'}

                    show={show} />

                <Cards img={cards2} textclass={classNames(styles.text, {
                    [styles.show]: show
                })} text={'Составление сметы'} show={show} />

                <Cards img={cards3} textclass={classNames(styles.text, {
                    [styles.show]: show
                })} text={'Печать альбома'} show={show} />

            </div>
            <div className={classNames(styles.title, {
                [styles.show]: show
            })}>Как это работает?</div>
            <div className={styles.DescBlock}>
                <Decs number={'01'} show={show} title={'Выбор состава проекта'} desc={' Выберите состав вашего проекта: только планировка или дизайн-проект'} />
                <Decs number={'02'} show={show} title={'Настройка проекта'} desc={' Отметьте в корзине нужен ли вам профессиональный замер, подбор строительной бригады или точный просчет сметы '} />
                <Decs number={'03'} show={show} title={'Создание чертежей'} desc={' Наши дизайнеры спроектируют интерьер, подготовят чертежи и сметы.'} />
            </div>
            <form className={styles.form}>
                <input type="text" value={values.names} name="names" onChange={changeInput} placeholder='Введите имя' />
                <input type="text" value={values.phone} name="phone" onChange={changeInput} placeholder='Введите номер телефона' />
                <button type='submit' onClick={submit}>Отправить</button>
            </form>
        </div>

    )
}

export default AlfaBlock