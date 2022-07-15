import React from 'react';
import styles from './MainContent.module.css';
import ContentNavbar from './ContentNavbar/ContentNavbar';
import CardsOfGoods from './CardsOfGoods/CardsOfGoods';
import { connect } from 'react-redux';
import { setCurrentPage, sortingData, setPaginationSize, setEditModePaginationSize, setFilteredData } from '../../redux/app-reducer.ts';




const MainContent = (props) => {
    
    return (<div className={styles.pageMainContent}>

        <ContentNavbar 
            data={props.data}
            count={props.count}
            totalCount={props.totalCount}
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
            setPaginationSize={props.setPaginationSize}
            
            editModePaginationSize={props.editModePaginationSize}
            setEditModePaginationSize={props.setEditModePaginationSize}

            />
        <CardsOfGoods  
            data={props.data}
            dataForSearch={props.dataForSearch}
            currentPage={props.currentPage}
            count={props.count}
            totalCount={props.totalCount}
            sortingData={props.sortingData}
            setFilteredData={props.setFilteredData}
            setCurrentPage={props.setCurrentPage}

            />
    

    </div>);
}
const mapStateToProps = (state) => ({
    count: state.appPage.count,
    totalCount: state.appPage.totalCount,
    data: state.appPage.data,
    dataForSearch: state.appPage.dataForSearch,
    currentPage: state.appPage.currentPage,
    editModePaginationSize: state.appPage.editModePaginationSize

});



export default connect(mapStateToProps, { setCurrentPage, sortingData, setPaginationSize, setEditModePaginationSize, setFilteredData })(MainContent);