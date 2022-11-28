import style from './styles.module.scss';
//react
import React from 'react';
//svg icons
import logo from './logo.svg';
import loupe from './loupe.svg';
import checkMark from '../../assets/img/header/check-mark.svg';
import iconScales from '../../assets/img/header/icon-1.svg';
import iconLike from '../../assets/img/header/icon-2.svg';
import iconCart from '../../assets/img/header/icon-3.svg';

import { Link } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';

const Header = () => {
    const { items } = useSelector(state => state.cart);

    return(
      <div className={style.header}>
        <div>
          <div className={style.headerWrap}>
            <div className={style.headerLogoWrap}>
                <Link to='/'><img src={logo} alt="logo"/></Link >
            </div>
            <button className={style.headerBtn}>КАТАЛОГ ТОВАРОВ</button>
            <form className={style.headerSearchBlock}>
              <input className={style.headerSearch} placeholder='Поиск'/>
              <button className={style.headerSerchBtn}><img src={loupe} alt="search"/></button>
            </form>
            <div className={style.headerTelWrap}>
              <Link to='/' className={style.headerTel}>050 065 87 96</Link>
              <img className={style.checkMark} src={checkMark} alt="" />
            </div>
            <div className={style.cartBtnWrap}>
                <Link to='' className={style.cartBtn}>
                  <img className={style.checkMark} src={iconScales} alt="scale" />
                </Link>
                <Link to='/' className={style.cartBtn}>
                  <img className={style.checkMark} src={iconLike} alt="liks" />
                </Link>
                <Link to='/cart' className={style.cartBtn}>
                  <img className={style.checkMark} src={iconCart} alt="cart" />
                  <span className={style.cartBtnCount}>{items.length}</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;