import { useObserver } from 'mobx-react-lite';
import React from 'react';
import styles from "./interface.module.css"
const Interface = () => {
    
   return useObserver(() => (
     <> 
    <img width='80' className={styles.logo} src='/assets/logo.png' alt="logo" />
      <div className={styles.nav}>
         Swipe to navigate
      </div>
      </>
   ))
}

export default Interface;