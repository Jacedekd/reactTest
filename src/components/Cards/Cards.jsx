import classNames from 'classnames';
import React from 'react';
import styles from './Cards.module.css'

function Cards({img, text, textclass, show}) {
  return (
    <div className={classNames(styles.cardse, {
      [styles.show] : show
    })}>
        <div className={styles.imgBlock}><img src={img} alt="картинка" className={styles.img}/></div>
        <div className={textclass}>{text}</div>
    </div>
  )
}

export default Cards