import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import login from '../../assets/img/nav/login.svg';
import style from './style.module.scss';
import Modal from './Modal';
import { menu } from './menu.js';

const Nav = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className={style.nav}>
            <div className={style.container}>
                <ul className={style.menuWrap}>
                    {menu.map((item, i) => (
                        <li className={style.menuItem} key={`menu item ${i}`}>
                            <Link to={item.link} className={style.menuItemLink}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <button onClick={() => setOpen(true)} className={style.loginBtn}>
                        <img src={login} alt='login'/>
                    </button>
                </div>
            </div>
            <Modal open={open} setOpen={setOpen} />
        </div>
    );
}

export default Nav;