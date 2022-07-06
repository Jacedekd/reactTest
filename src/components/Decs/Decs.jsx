import classNames from 'classnames';
import React from 'react';
import styles from './Decs.module.css';

function Decs({number, title, desc, show}) {

  

  return (
    <div className={styles.Desc}>
        <div className={classNames(styles.title, {
          [styles.show] : show
        })}>{title}</div>
        <div className={classNames(styles.desc, {
          [styles.show] : show
        })}>{desc}</div>
        <div className={classNames(styles.number, {
          [styles.shownum] : show
        })}>{number}</div>
    </div>
  )
}

export default Decs