import { Link } from 'react-router-dom';

import style from './style.module.scss';
import arrowRight from '../../../assets/img/news/arrow-right.svg';

import { articles } from './articles.js';


const News = () => {
    return(
        <div className={style.news}>
            <h2>Новости</h2>
            <div  className={style.newsCarsWrap}>
                {articles.map((item, i) => (
                    <div className={style.newsCard} key={`articles item ${i}`}>
                            <div className={style.newsCardImg}>
                                <img src={item.img} alt="article"/>
                            </div>
                            <div className={style.newsCardDesc}>
                                <h3 className={style.newsCardTitle}>{item.title}</h3>
                                <p className={style.newsCardArticle}>{item.text}</p>
                                <div className={style.newsCardInfo}>
                                    <p>{item.date}</p>
                                    <Link className={style.newsCardLink} to={item.link}>Читать полностью<img src={arrowRight} alt="link" /></Link>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
            <div className={style.newsLinkWrap}>
                <Link className={style.newsLink} to='/'>Все новости<img src={arrowRight} alt="link" /></Link>
            </div>
        </div>
    );
}

export default News;