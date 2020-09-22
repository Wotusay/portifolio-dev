import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "./interface.module.css"

const Interface = () => {
   const smallScreen = useMediaQuery({minWidth: '320px', maxWidth:'400px'});
   const normalScreen = useMediaQuery({minWidth: '600px'});
   return useObserver(() => (
     <> 
    <img width={smallScreen === true ? '55' : normalScreen === true ? '80' : '80'} className={styles.logo} src='/assets/logo.png' alt="logo" />
      <div className={styles.nav}>
         Swipe to navigate
      </div>

      <div className={styles.nav_wrapper}>
         <div className={styles.navi}>
               <a href='https://woutsalembier.myportfolio.com/work' style={{ textDecoration: "none" }}
            className={styles.nav_item} >Designs</a>
                 <a href='mailto:wout.salembier@hotmail.com' style={{ textDecoration: "none" }}
            className={styles.nav_item} >Hire me!</a>
         </div>
      </div>
      </>
   ))
}

export default Interface;