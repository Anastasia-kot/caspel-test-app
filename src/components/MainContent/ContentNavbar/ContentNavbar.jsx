import React  from 'react';
import styles from './ContentNavbar.module.css';




const ContentNavbar = (props) => {
    

    let pagesCount = Math.ceil(props.totalCount / props.count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }


    let setCurrentPageOnClick = (page) => {
        props.setCurrentPage(page)
    }
    let setPaginationSizeOnClick=(size)=>{
        props.setPaginationSize(size)
    }
    let setEditModePaginationSizeOnClick = () => {
        props.setEditModePaginationSize()
    }
    return ( 
        <div className={styles.categoriesWrapper}>
        {pages.map(p => {
                return (
                    <span key={p}
                        className={(p === props.currentPage) ? styles.selected : ''}
                        onClick={() => setCurrentPageOnClick(p)}> 
                            {p} 
                    </span>
                )
            })
        }

            <span className={styles.settings}>
                <span className={styles.settings} onClick={() => setEditModePaginationSizeOnClick() }>⚙️</span>
                
                {props.editModePaginationSize &&
                <select className={styles.selectWrapper}
                    name="paginationSizeSelect" 
                    onChange={(e) => {
                        setPaginationSizeOnClick(e.target.value);
                        setEditModePaginationSizeOnClick();
                        setCurrentPageOnClick(1);

                    }
                    }
                >

                    <option value='20'>Выберите значение</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                    <option value='25'>25</option >
                    <option value='30'>30</option>
                    <option value='35' >35</option >
                    <option value='40' >40</option >
                    <option value='45' >45</option >
                    <option value='50' >50</option >
                                
                
                </select>}
            </span>


        </div>

);}

export default ContentNavbar;