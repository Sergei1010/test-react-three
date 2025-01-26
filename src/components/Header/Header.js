import React from 'react'
import styles from './Header.module.scss'
import HomeLogo from '@/assets/img/NetflixLogo.png'
import { ReactComponent as SearcIcon } from '@/assets/img/SearchIcon.svg'
import UserIcon from '@/assets/img/UserIcon.png'
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          <a href="/" className={styles.homeLink}>
            <img src={HomeLogo} alt="Логотип" />
          </a>
          <div className={styles.divider}></div>
          <span className={styles.date}>Friday July 8th</span>
        </div>
        <nav className={styles.rightHeader}>
          <a href="/" className={styles.searchLink}>
            <SearcIcon />
          </a>
          <a href="/" className={styles.accountLink}>
            <img src={UserIcon} alt="Фото користувача" />
          </a>
        </nav>
      </header>
    </>
  )
}

export default Header
