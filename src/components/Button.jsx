import React from 'react'
import styles from '../styles/global';
const Button = ({assetUrl, Link}) => {
  return (
    <div className={styles.btnBlack} onClick={() => window.open(Link, "_blank")}>
        <img  src={assetUrl} alt="expo_icon" 
        className={styles.btnIcon}/>
      
    </div>
  )
}

export default Button
  