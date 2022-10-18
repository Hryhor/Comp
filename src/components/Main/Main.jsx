import React from 'react';
import scalec from '../../assets/img/main/products/icon-scales.svg';
import like from '../../assets/img/main/products/icon-like.svg';

import style from './style.module.scss';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import MenuProducts from './MenuProducts/MenuProducts';
import SimpleSlider from './SimpleSlider/SimpleSlider';
import Benefits from './Benefits/Benefits';
import News from './News/News';
import About from './About/About';

//import products from './products.json';

const Main = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://6341eb9d20f1f9d7997bbdc8.mockapi.io/items').then(res => {
            return res.json();
        }).then((arr) => {
            setProducts(arr);
        });
    }, []);

    return(
        <main>
            <div className={style.container}>
                <div className={style.offer}>
                    <MenuProducts/>
                    <div className={`${style.offerCarousel} ${style.gridItemTwo}`}>
                      <SimpleSlider />
                    </div>
                    <Benefits />
                </div>
                <div className={style.products}>
                    <h2 className={style.title}>Топ продаж</h2>
                    <div className={style.cardWrap}>
                        {products.map((item, i) => (
                            <div className={style.card}>
                                <div className={style.cardIconsWrap}>
                                    <img src={scalec} alt="scales"/>
                                    <img src={like} alt="like"/>
                                </div>
                                <div className={style.cardImg} key={`products item ${i}`}>
                                    <img src={item.imgUrl} alt="products" width="218px" height="214px"/>
                                </div>
                                <div className={style.cardDesc}>{item.desc}</div>
                                <div className={style.cardReviews}>Отзывов: {item.reviews}</div>
                                <div className={style.orderWrap}>
                                    <div className={style.cardPrice}>{item.price} грн</div>
                                    <button className={style.cardBtnOrder}>КУПИТЬ</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*<GameZone />*/}
            <div className={style.container}>
                <News />
            </div>
            <About />
        </main>

    );
}

export default Main;