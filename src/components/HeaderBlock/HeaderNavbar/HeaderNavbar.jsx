import React, { Fragment } from 'react';
import styles from './HeaderNavbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../Logo.svg';
import Media from 'react-media';




const HeaderNavbar = () => {
    return (
            <Media queries={{
                small: "(max-width: 1039px)",
                large: "(min-width: 1040px)"
            }}>



            {matches => (
                <Fragment>
                    {matches.small && <div>
                        <NavLink to='/main' className={styles.companyLinkMobile}>
                            <img src={logo} alt='logo_image' className={styles.companyLogo} />
                            <span className={styles.companyName}>Agency</span>
                        </NavLink>
             
                    </div>}
                    
                    {matches.large && <nav className={styles.navbar}>
                        <NavLink to='/main' className={styles.companyLink}>
                            <img src={logo} alt='logo_image' className={styles.companyLogo} />
                            <span className={styles.companyName}>Agency</span>
                        </NavLink>
                        <div className={styles.linksWrapper}>
                            <NavLink to='/about' className={styles.item}>About</NavLink>

                            <NavLink to='/services' className={styles.item}>Services</NavLink>

                            <NavLink to='/pricing' className={styles.item}>Pricing</NavLink>

                            <NavLink to='/blog' className={styles.item}>Blog</NavLink>
                        </div>

                        <NavLink to='/contacts' className={styles.contact}>Contact</NavLink>
                        
                         </nav>}
                </Fragment>
            )}

         
    </Media>    
   );
}

export default HeaderNavbar;