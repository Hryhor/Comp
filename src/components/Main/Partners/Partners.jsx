import style from './style.module.scss';

import { companies } from './companies.js';

const Partners = () => {
    return(
        <div className={style.partners}>
            <h2>Партнеры</h2>
            <div className={style.parnersIconsWrap}>
                {
                   companies.map((item, i) => (
                        <div className={style.parnersIconsWrapImg}><img key={`companies item ${i}`} className={style.parnersIcons} src={item.img} alt={item.desc} /></div>
                   ))
                }
            </div>
        </div>
    );
}

export default Partners;