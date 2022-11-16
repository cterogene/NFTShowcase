import React from 'react'
import styles from '../styles/global';
const Button = ({assetUrl, Link}) => {
  return (
    <div className={styles.btnBlack} onClick={() => window.open(Link, "_blank")}>
        <img  src={assetUrl} alt="expo_icon" 
        className={styles.btnIcon}/>

        <div className= 'flex flex-col justify-start ml-4'>
          <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
          <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
        </div>
      
    </div>
  )
}

export default Button
  