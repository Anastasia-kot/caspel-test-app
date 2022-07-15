import React from 'react';
import styles from './HeaderMain.module.css';


const HeaderMain = () => {
    return (<div className={styles.headerMainWrapper}>

            <div className={styles.siteHeader}>Тестовое задание</div>
        <div className={styles.text}>Необходимо сверстать таблицу из не менее 4 столбцов, в которых будут числовые и текстовые значения. В таблице необходимо реализовать сортировку (по нажатию на название колонки), клиентскую пагинацию и фильтрацию по всем значениям из ячеек. Строка для фильтрации (поиска) должна располагаться сверху таблицы.</div>
        </div>);
}

export default HeaderMain;