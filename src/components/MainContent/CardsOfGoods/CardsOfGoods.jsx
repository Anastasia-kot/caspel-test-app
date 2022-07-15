import { Formik } from 'formik';
import React from 'react';
import Card from './Card/Card';
import styles from './CardsOfGoods.module.css';


const CardsOfGoods = (props) => {



    let finishIndex = props.currentPage * (props.count) - 1;
    let startIndex = finishIndex - props.count + 1;

    let cards = [];

    for (let i = 0; i < props.dataForSearch.length; i++){
        if (i >= startIndex && i <= finishIndex){
            let item = props.dataForSearch[i];
            cards.push(item)
        }
    };
    

    let sortingDataByName = () => {    
        props.sortingData('name')
    }
    let sortingDataByPhone = () => {
        props.sortingData('phone')
    }
    let sortingDataByEmail = () => {
        props.sortingData('email')
    }
    let sortingDataByAddress = () => {
        props.sortingData('address')
    }


    return (<div className={styles.mainContent}>
                <div className={styles.inputWrapper}>
                    
               
<Formik
                initialValues={{ keyWord: ''}}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {

                        props.setFilteredData(values.keyWord)
                        props.setCurrentPage(1)


                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit, isSubmitting, }) => (
                    <form onSubmit={handleSubmit}>

                        

                        <label> Tape keywords to search:
                            <input 
                                className={styles.searchInput} 
                                placeholder='Type key word for search'
                                name="keyWord"
                                type="text"
                                onChange={handleChange}
                                value={values.keyWord} />
                        </label>
                        <button 
                            className={styles.searchButton} 
                            type="submit"
                            disabled={isSubmitting}> 
                            Search
                        </button>
                    </form>
                )}
</Formik>
                    
                    
        
             
                </div>
                
            <div className={styles.cardsList}>

            <table>
                <tr>
                    <th onClick={() => sortingDataByName()}>
                        name
                    </th>
                    <th onClick={() => sortingDataByPhone()}>
                        phone
                    </th>
                    <th onClick={() => sortingDataByEmail()}>
                        email
                    </th>
                    <th onClick={() => sortingDataByAddress()}>
                        address
                    </th>

                </tr>
  
            {cards.map(c => {
                return (<tr><Card card={c} key={c.id} /></tr> )
            })}

</table>
</div>
</div>);
}


export default CardsOfGoods;