import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';
import send from '../../assets/img/footer/send.svg';
import logoFooter from '../../assets/img/footer/logo-footer.svg';
import visa from '../../assets/img/footer/visa.svg';
import mastercard from '../../assets/img/footer/mastercard.svg';

import { info } from './info.js';
import { service } from './service.js';
import { contacts } from './contacts.js';
import { networks } from './networks.js';

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.footerWrap}>
                <div className={style.footerNav}>
                    <div className={style.footerListWrap}>
                        <ul>
                            <li className={style.listTitle}>Информация</li>
                            {
                                info.map((item, i) => (
                                    <li key={`info item ${i}`} className={style.listLink}>{item.title}</li>
                                ))
                            }
                        </ul>
                        <ul>
                            <li className={style.listTitle}>Услуги и сервисы</li>
                            {
                                service.map((item, i) => (
                                    <li key={`service item ${i}`} className={style.listLink}>{item.title}</li>
                                ))
                            }
                        </ul>
                        <ul>
                            <li className={style.listTitle}>Контакты</li>
                            {
                                contacts.map((item, i) => (
                                    <li key={`contacts item ${i}`} className={style.listLink}>{item.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <div className={style.footerNetworks}>
                            <p className={style.footerNetworksText}>Следите за нами</p>
                            { 
                                networks.map((item, i) => (
                                    <Link className={style.footerNetworksLinks} to={item.link}><img src={item.icon} alt="networks" /></Link>
                                ))
                            }
                        </div>
                        <div className={style.footerConnectBlock}>
                            <p className={style.footerConnectText}>Подписывайтесь на скидки</p>
                            <form>
                                <input placeholder="Укажите ваш email..." />
                                <button type="submit"><img src={send} alt="send"/></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={style.footerBasement}>
                    <Link to="/"><img src={logoFooter} alt="logo" /></Link>
                    <p>2008-2021 Интернет-магазин v-comp.com.ua Все права защищены</p>
                    <div className={style.footerPayment}>
                        <div  className={style.footerPaymentMastercard}><img src={mastercard} alt="mastercard"/></div>
                        <div className={style.footerPaymentViza}><img src={visa} alt="visa"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;