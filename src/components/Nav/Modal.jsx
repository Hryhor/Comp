import React from 'react';
import close from '../../assets/img/nav/close.svg';
import googleLogo from '../../assets/img/nav/logoGoogle.svg';
import facebookLogo from '../../assets/img/nav/logoFacebook.svg';
import style from './style.module.scss';


const Modal = ({open, setOpen}) => {
    const openModal = `${open ? `${style.show}` : ''}`;
    
    return(
        <div className={`${style.modalWindow} ${style.animated} ${openModal}`}>
            <div className={style.modalBody}>
                <div className={style.wrap}>
                        <p className={style.madalTitle}>Вход</p>
                        <button onClick={() => setOpen(false)} className={style.btnClose}>
                            <img src={close} alt="close"></img>
                        </button>
                </div>
                <div className={style.formBlock}>
                    <form action="" method="">
                        <input placeholder='Ваш номер телефона' />
                        <input className={style.passwordBtn} placeholder='Пароль' />
                        <button className={style.forgotPassword}>Забыли пароль?</button>
                        <button className={style.submitBtn}>ВОЙТИ</button>
                    </form>
                </div>
                <p className={style.signUpNetworksTitle}>или войти с помощью</p>
                <div className={style.btnWrap}>
                    <button className={style.signUpNetworksGoogle}><img className={style.btnLogo} src={googleLogo} alt=""/>Google</button>
                    <button className={style.signUpNetworksFacebook}><img className={style.btnLogo} src={facebookLogo} alt=""/>Facebook</button>
                </div>
                <div className={style.modalRegistrationBlock}>
                    <p className={style.modalRegistrationText}>Нет аккаунта?</p>
                    <button className={style.modalRegistrationBtn}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;