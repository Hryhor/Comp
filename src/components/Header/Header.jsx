import style from './styles.module.scss';
import logo from './logo.svg';
import loupe from './loupe.svg';
import checkMark from '../../assets/img/header/check-mark.svg';
import { Link } from 'react-router-dom';
import { nav } from './nav.js';


const Header = () => {
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
               {
                nav.map((item, i) => (
                  <Link to='/' className={style.cartBtn}><img className={style.cartBtnImg} src={item.img} alt={item.desc} key={`nav item ${i}`}/></Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;