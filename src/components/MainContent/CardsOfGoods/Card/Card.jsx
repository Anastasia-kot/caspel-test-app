import React from 'react';
import styles from './Card.module.css';
//import cn from 'classnames';



const Card = (props) => {
       


    return (<>
            <td className={styles.cell}> {props.card.name} </td>
            <td className={styles.cell}> {props.card.phone}</td>
            <td className={styles.cell}> {props.card.email}</td>
            <td className={styles.cell}>  {props.card.address}</td>
</> )
   

}







export default Card;