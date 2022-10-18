import { Link } from 'react-router-dom';

import arrowRight from '../../../assets/img/main/arrow-right.svg';
import style from '../style.module.scss';

import { menu } from './menu.js';

const MenuProducts = () => {
    return(
        <div className={`${style.offerNav} ${style.gridItemOne}`}>
            <ul>
                {menu.map((item,  i) => (
                    <li className={style.listItem} key={`menu item ${i}`}>
                        <Link className={style.listItemLink} to='/'>{item.title}</Link><img src={arrowRight} alt='select'/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuProducts;